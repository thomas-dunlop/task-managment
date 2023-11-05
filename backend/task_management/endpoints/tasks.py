from task_management.models import Task
from task_management.serializers import TaskSerializer, TaskWriteSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json


class TaskList(APIView):
    def get(self, request, format=None):
        tasks = Task.objects.all().order_by("priority")

        is_scheduled = json.loads(self.request.query_params.get("isScheduled", "false"))
        if is_scheduled:
            tasks = tasks.filter(start__isnull=False)

        is_unscheduled = json.loads(
            self.request.query_params.get("isUnscheduled", "false")
        )
        if is_unscheduled:
            tasks = tasks.filter(start__isnull=True)

        is_complete = json.loads(self.request.query_params.get("isComplete", "false"))
        if is_complete:
            tasks = tasks.filter(complete=True)

        is_incomplete = json.loads(
            self.request.query_params.get("isIncomplete", "false")
        )
        if is_incomplete:
            tasks = tasks.filter(complete=False)

        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskWriteSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        task = self.get_object(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

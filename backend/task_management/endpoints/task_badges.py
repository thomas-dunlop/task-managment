from task_management.models import TaskBadge
from task_management.serializers import TaskBadgeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class TaskBadgeList(APIView):
    def get(self, request, format=None):
        task_badges = TaskBadge.objects.all()

        serializer = TaskBadgeSerializer(task_badges, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskBadgeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

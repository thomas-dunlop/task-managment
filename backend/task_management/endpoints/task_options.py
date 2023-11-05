from task_management.models import TaskOption
from task_management.serializers import TaskOptionSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class TaskOptionList(APIView):
    def get(self, request, format=None):
        task_options = TaskOption.objects.all()

        serializer = TaskOptionSerializer(task_options, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskOptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

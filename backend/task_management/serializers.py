from task_management.models import Task, TaskOption, TaskBadge
from rest_framework.serializers import ModelSerializer


class TaskBadgeSerializer(ModelSerializer):
    class Meta:
        model = TaskBadge
        fields = "__all__"


class TaskOptionSerializer(ModelSerializer):
    badges = TaskBadgeSerializer(many=True)

    class Meta:
        model = TaskOption
        fields = "__all__"


class TaskSerializer(ModelSerializer):
    option = TaskOptionSerializer()

    class Meta:
        model = Task
        fields = "__all__"

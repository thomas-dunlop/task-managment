from django.urls import path
from task_management.endpoints.tasks import TaskDetail, TaskList

urlpatterns = [
    path("tasks/", TaskList.as_view()),
    path("tasks/<int:pk>", TaskDetail.as_view()),
]

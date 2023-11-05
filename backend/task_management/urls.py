from django.urls import path
from task_management.endpoints.tasks import TaskDetail, TaskList
from task_management.endpoints.task_options import TaskOptionList

urlpatterns = [
    path("tasks/", TaskList.as_view()),
    path("tasks/<int:pk>", TaskDetail.as_view()),
    path("taskOptions/", TaskOptionList.as_view()),
]

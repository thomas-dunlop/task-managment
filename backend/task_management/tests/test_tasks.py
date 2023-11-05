import pytest
from task_management.models import Task, TaskOption
from task_management.serializers import TaskSerializer
import datetime


@pytest.mark.django_db
def test_get_tasks(drf_client):
    new_option = TaskOption(
        name="Walk Buddy and Lili",
        start_time=datetime.time(10, 00, 00),
        end_time=datetime.time(12, 00, 00),
        duration=0.5,
    )
    new_option.save()
    completed_task = Task(
        complete=True,
        start=datetime.datetime.now(),
        end=datetime.datetime.now() + datetime.timedelta(days=10),
        priority=3,
        option=new_option,
    )
    completed_task.save()
    incompleted_task = Task(
        complete=False,
        start=datetime.datetime.now(),
        end=datetime.datetime.now() + datetime.timedelta(days=10),
        priority=2,
        option=new_option,
    )
    incompleted_task.save()
    unscheduled_task = Task(complete=False, priority=1, option=new_option)
    unscheduled_task.save()

    get_all_tasks_result = drf_client.get("/tasks/")
    assert get_all_tasks_result.status_code == 200
    assert [entry["priority"] for entry in get_all_tasks_result.data] == [1, 2, 3]
    assert get_all_tasks_result.data == [
        TaskSerializer(unscheduled_task).data,
        TaskSerializer(incompleted_task).data,
        TaskSerializer(completed_task).data,
    ]

    get_complete_tasks = drf_client.get("/tasks/", {"isComplete": "true"})
    assert get_complete_tasks.status_code == 200
    assert get_complete_tasks.data == [TaskSerializer(completed_task).data]

    get_incomplete_tasks = drf_client.get("/tasks/", {"isIncomplete": "true"})
    assert get_incomplete_tasks.status_code == 200
    assert get_incomplete_tasks.data == [
        TaskSerializer(unscheduled_task).data,
        TaskSerializer(incompleted_task).data,
    ]

    get_unscheduled_tasks = drf_client.get("/tasks/", {"isUnscheduled": "true"})
    assert get_unscheduled_tasks.status_code == 200
    assert get_unscheduled_tasks.data == [TaskSerializer(unscheduled_task).data]

    get_scheduled_tasks = drf_client.get("/tasks/", {"isScheduled": "true"})
    assert get_scheduled_tasks.status_code == 200
    assert get_scheduled_tasks.data == [
        TaskSerializer(incompleted_task).data,
        TaskSerializer(completed_task).data,
    ]

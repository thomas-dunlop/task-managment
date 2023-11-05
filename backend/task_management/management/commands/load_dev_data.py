from django.core.management.base import BaseCommand
from task_management.models import Task, TaskOption
import datetime


class Command(BaseCommand):
    help = "Create Dev Data"

    def handle(self, *args, **options):
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

        self.stdout.write(self.style.SUCCESS("Successfully Created Dev Data"))

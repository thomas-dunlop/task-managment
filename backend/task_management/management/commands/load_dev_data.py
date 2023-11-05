from django.core.management.base import BaseCommand
from task_management.models import Task, TaskOption, TaskBadge
import datetime


class Command(BaseCommand):
    help = "Create Dev Data"

    def handle(self, *args, **options):
        weekend_only = TaskBadge(
            name="Weekend Only", background_colour="#CFF4FC", text_colour="#055160"
        )
        weekend_only.save()
        walk_dog_args = {
            "name": "Walk Buddy and Lili",
            "start_time": datetime.time(10, 00, 00),
            "end_time": datetime.time(12, 00, 00),
            "duration": 0.5,
        }
        walk_dogs = TaskOption(**walk_dog_args)

        walk_dogs.save()
        walk_dogs.badges.add(weekend_only)
        drink_modello_args = {
            "name": "Drink Modello",
            "start_time": datetime.time(10, 00, 00),
            "end_time": datetime.time(12, 00, 00),
            "duration": 0.5,
        }
        drink_modello = TaskOption(**drink_modello_args)
        drink_modello.save()
        completed_task = Task(
            complete=True,
            start=datetime.datetime.now(),
            end=datetime.datetime.now() + datetime.timedelta(days=10),
            priority=3,
            **walk_dog_args
        )
        completed_task.save()
        incompleted_task = Task(
            complete=False,
            start=datetime.datetime.now(),
            end=datetime.datetime.now() + datetime.timedelta(days=10),
            priority=2,
            **drink_modello_args
        )
        incompleted_task.save()
        unscheduled_task = Task(complete=False, priority=1, **drink_modello_args)
        unscheduled_task.save()

        self.stdout.write(self.style.SUCCESS("Successfully Created Dev Data"))

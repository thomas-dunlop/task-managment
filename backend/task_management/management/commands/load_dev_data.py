from django.core.management.base import BaseCommand
from task_management.models import Task, TaskOption, TaskBadge
import datetime


def create_task_from_task_option(
    option: TaskOption, complete: bool, start=None, end=None, priority=1
):
    new_task = Task(
        name=option.name,
        start_time=option.start_time,
        end_time=option.end_time,
        duration=option.duration,
        complete=complete,
        start=start,
        end=end,
        priority=priority,
    )
    new_task.save()
    for badge in option.badges.all():
        new_task.badges.add(badge)
    return new_task


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
            "duration": 30,
        }
        walk_dogs = TaskOption(**walk_dog_args)

        walk_dogs.save()
        walk_dogs.badges.add(weekend_only)
        drink_modello_args = {
            "name": "Drink Modello",
            "start_time": datetime.time(10, 00, 00),
            "end_time": datetime.time(12, 00, 00),
            "duration": 120,
        }
        drink_modello = TaskOption(**drink_modello_args)
        drink_modello.save()
        create_task_from_task_option(
            option=walk_dogs,
            complete=True,
            start=datetime.datetime.now(),
            end=datetime.datetime.now() + datetime.timedelta(days=10),
            priority=3,
        )
        create_task_from_task_option(
            option=drink_modello,
            complete=False,
            start=datetime.datetime.now(),
            end=datetime.datetime.now() + datetime.timedelta(days=10),
            priority=2,
        )
        create_task_from_task_option(
            option=drink_modello,
            complete=False,
            priority=1,
        )
        self.stdout.write(self.style.SUCCESS("Successfully Created Dev Data"))

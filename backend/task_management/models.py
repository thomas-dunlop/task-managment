from django.db import models


class TaskBadge(models.Model):
    name = models.TextField()
    background_colour = models.TextField(default="#CFF4FC")
    text_colour = models.TextField(default="#055160")


class TaskOption(models.Model):
    name = models.TextField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    duration = models.FloatField()
    badges = models.ManyToManyField(TaskBadge, null=True, blank=True)


class Task(models.Model):
    complete = models.BooleanField(default=False)
    start = models.DateTimeField(null=True, blank=True)
    end = models.DateTimeField(null=True, blank=True)
    priority = models.BigIntegerField(default=1)
    option = models.ForeignKey(TaskOption, on_delete=models.CASCADE)

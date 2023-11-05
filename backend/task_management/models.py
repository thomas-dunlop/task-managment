from django.db import models
import datetime


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
    name = models.TextField(default="Walk Lili and Buddy")
    start_time = models.TimeField(default=datetime.time(9, 00))
    end_time = models.TimeField(default=datetime.time(17, 00))
    duration = models.FloatField(default=1)
    badges = models.ManyToManyField(TaskBadge, null=True, blank=True)

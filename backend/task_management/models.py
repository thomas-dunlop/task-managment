from django.db import models


class TaskBadge(models.Model):
    name = models.TextField()


class TaskOption(models.Model):
    name = models.TextField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    duration = models.FloatField()
    badges = models.ManyToManyField(TaskBadge)


class Task(models.Model):
    complete = models.BooleanField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    priority = models.BigIntegerField()
    option = models.ForeignKey(TaskOption, on_delete=models.CASCADE)

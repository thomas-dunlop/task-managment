from django.db import models


class TaskBadge(models.Model):
    name = models.TextField()


class TaskOption(models.Model):
    name = models.TextField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    duration = models.FloatField()
    badges = models.ManyToManyField(TaskBadge, null=True, blank=True)


class Task(models.Model):
    complete = models.BooleanField()
    start = models.DateTimeField(null=True, blank=True)
    end = models.DateTimeField(null=True, blank=True)
    priority = models.BigIntegerField()
    option = models.ForeignKey(TaskOption, on_delete=models.CASCADE)

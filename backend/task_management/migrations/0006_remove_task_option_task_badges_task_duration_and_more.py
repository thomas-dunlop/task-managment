# Generated by Django 4.2.7 on 2023-11-05 11:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_management', '0005_alter_task_complete_alter_task_priority'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='option',
        ),
        migrations.AddField(
            model_name='task',
            name='badges',
            field=models.ManyToManyField(blank=True, null=True, to='task_management.taskbadge'),
        ),
        migrations.AddField(
            model_name='task',
            name='duration',
            field=models.FloatField(default=1),
        ),
        migrations.AddField(
            model_name='task',
            name='end_time',
            field=models.TimeField(default=datetime.time(17, 0)),
        ),
        migrations.AddField(
            model_name='task',
            name='name',
            field=models.TextField(default='Walk Lili and Buddy'),
        ),
        migrations.AddField(
            model_name='task',
            name='start_time',
            field=models.TimeField(default=datetime.time(9, 0)),
        ),
    ]
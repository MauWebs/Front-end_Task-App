# Generated by Django 4.2 on 2023-04-21 01:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='task',
            new_name='description',
        ),
    ]
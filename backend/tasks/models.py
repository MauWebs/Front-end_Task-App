from django.db import models
from users.models import User

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)
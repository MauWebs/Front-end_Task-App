from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)

    class Meta:
        model = Task
        fields = '__all__'
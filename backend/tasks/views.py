from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .serializers import TaskSerializer
from .models import Task

#---------------------------------------tasks---------------------------------------#

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTasks(request):
    task = Task.objects.filter().order_by('-date')
    serializer = TaskSerializer(task, many=True)
    return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})

#---------------------------------------task---------------------------------------#

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloTask(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})

#---------------------------------------add_task---------------------------------------#

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addTask(request):
    data = request.data
    title = data.get('title', '')
    description = data.get('description', '')
    task = Task.objects.create(
        user=request.user,
        title=title,
        description=description,)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})


#---------------------------------------update_task---------------------------------------#

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def putTask(request, pk):
    data = request.data
    task = Task.objects.get(id=pk)
    task.title = data['title']
    task.description = data['description']
    if task.user == request.user:
        task.save()
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = TaskSerializer(instance=task, many=False)
    return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})

#---------------------------------------delete_task---------------------------------------#

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTask(request, pk):
    task = Task.objects.get(id=pk)
    if task.user == request.user:
        task.delete()
        return Response('Tarea Eliminada', headers={'Access-Control-Allow-Origin': '*'})
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED, headers={'Access-Control-Allow-Origin': '*'})
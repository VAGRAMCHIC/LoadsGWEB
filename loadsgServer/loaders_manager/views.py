from django.shortcuts import render
from django.contrib.auth.models import Group, User
from django.contrib.auth.mixins import LoginRequiredMixin



from rest_framework import permissions, viewsets

from .models import Loader
from loaders_manager.serializers import UserSerializer, GroupSerializer, LoaderSerializer

# Create your views here.
class UserViewSet(LoginRequiredMixin, viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(LoginRequiredMixin, viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class LoaderViewSet(LoginRequiredMixin, viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Loader.objects.all().order_by('loader_name')
    serializer_class = LoaderSerializer
    permission_classes = [permissions.IsAuthenticated]
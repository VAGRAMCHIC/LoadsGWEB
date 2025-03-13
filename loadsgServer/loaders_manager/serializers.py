from django.contrib.auth.models import Group, User
from rest_framework import serializers

from .models import Loader

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LoaderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Loader
        fields = ['loader_name', 'loader_type', 'loader_details', 'creation_date', 'connection']
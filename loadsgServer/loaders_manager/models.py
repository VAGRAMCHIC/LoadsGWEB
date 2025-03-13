from django.db import models

# Create your models here.
class Loader(models.Model):
    loader_name = models.CharField(max_length=30)
    loader_type = models.CharField(max_length=20)
    loader_details = models.CharField(max_length=200)
    creation_date = models.DateField()
    connection = models.CharField(max_length=30)


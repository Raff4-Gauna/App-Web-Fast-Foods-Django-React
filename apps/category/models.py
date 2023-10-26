from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    thumbnail = models.ImageField(upload_to='media/categories/', blank=True, null=True)

    def __str__(self):
        return self.name

    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return None

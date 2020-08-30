from django.db import models

images_dir = 'media/houses/images'

class House(models.Model):
    owner = models.CharField("Owner Name", max_length=100)
    email = models.EmailField()
    phone = models.CharField("Phone number", max_length=30)
    address = models.CharField("Address", max_length=100)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to=images_dir, blank=False, null=False)

    def __str__(self):
        return self.owner

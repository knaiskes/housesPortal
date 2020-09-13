from django.db import models

images_dir = 'media/houses/images'
profile_images_dir = images_dir + '/profile/'

class Landlord(models.Model):
    full_name = models.CharField("Full Name", max_length=100, unique=True)
    email = models.EmailField()
    phone = models.CharField("Phone Number", max_length=50)
    about_me = models.TextField("About Me", max_length=120)
    profile_image = models.ImageField(upload_to=profile_images_dir)

    def __str__(self):
        return self.full_name

class House(models.Model):
    landlord = models.ForeignKey(Landlord, on_delete=models.CASCADE)
    address = models.CharField("Address", max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to=images_dir, blank=False, null=False)

    def __str__(self):
        return self.address


class HouseImages(models.Model):
    house = models.ForeignKey(House, default=None, on_delete=models.CASCADE)
    images = models.ImageField(upload_to=images_dir)

    def __str__(self):
        return self.house.address

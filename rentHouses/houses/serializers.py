from rest_framework import serializers
from .models import House, HouseImages, Owner

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = '__all__'

class HouseImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImages
        fields = '__all__'

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'

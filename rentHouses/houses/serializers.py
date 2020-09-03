from rest_framework import serializers
from .models import House, HouseImages, Owner

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'

class HouseSerializer(serializers.ModelSerializer):
    owner = OwnerSerializer(many=False, read_only=True)
    class Meta:
        model = House
        fields = '__all__'

class HouseImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImages
        fields = '__all__'


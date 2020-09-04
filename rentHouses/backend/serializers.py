from rest_framework import serializers
from .models import House, HouseImages, Landlord

class LandlordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Landlord
        fields = '__all__'

class HouseSerializer(serializers.ModelSerializer):
    landlord = LandlordSerializer(many=False, read_only=True)
    class Meta:
        model = House
        fields = '__all__'

class HouseImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImages
        fields = '__all__'

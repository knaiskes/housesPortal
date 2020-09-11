# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import House, HouseImages
from .serializers import *

@api_view(['GET'])
def houses_list(request):
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        houses = House.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(houses, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = HouseSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data, 'count': paginator.count,
                         'numpages': paginator.num_pages,
                         'nextlink': '/api/houses/?page=' + str(nextPage),
                         'prevlink': '/api/houses/?page=' + str(previousPage)}
                        )
@api_view(['GET'])
def houses_detail(request, pk):
    try:
        house = House.objects.get(pk=pk)
    except House.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = HouseSerializer(house,context={'request': request})
        return Response(serializer.data)

@api_view(['GET'])
def house_images(request, pk):
    try:
        house = House.objects.get(pk=pk)
        images = HouseImages.objects.filter(house=house)
    except House.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = HouseImagesSerializer(images, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_landLords(request):
    landlords_list = Landlord.objects.all()
    if request.method == 'GET':
        serializer = LandlordSerializer(landlords_list, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_landlord(request, pk):
    try:
        landlord = Landlord.objects.get(pk=pk)
    except Landlord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = LandlordSerializer(landlord, context={'request': request})
        return Response(serializer.data)

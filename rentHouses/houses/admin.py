from django.contrib import admin
from .models import House, HouseImages, Owner

class HouseImagesAdmin(admin.StackedInline):
    model = HouseImages

@admin.register(House)
class HouseAdmin(admin.ModelAdmin):
    inlines = [HouseImagesAdmin]

    class Meta:
        model = House

@admin.register(HouseImages)
class HouseImagesAdmin(admin.ModelAdmin):
    pass

admin.site.register(Owner)
#admin.site.register(House)

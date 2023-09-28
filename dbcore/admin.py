from django.contrib import admin

from dbcore.models import Product, FridgeProduct, Measure, Recipe, RecipeProduct, Calendar, AllergyProduct


@admin.register(Measure)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('measure',)


@admin.register(Product)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(FridgeProduct)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('product',)


@admin.register(Recipe)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(RecipeProduct)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('recipe', 'product',)


@admin.register(Calendar)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('date',)


@admin.register(AllergyProduct)
class MainPageAdmin(admin.ModelAdmin):
    list_display = ('product',)

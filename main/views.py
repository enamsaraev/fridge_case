from django.shortcuts import render
from django.views import View
from django.db.models import FloatField
from django.db.models.functions import Cast

from dbcore.models import Recipe, AllergyProduct, FridgeProduct, Calendar


class MainPageView(View):
    def get(self, request, *args, **kwargs):
        recipe = Recipe.objects.exclude(
            recipe_products__product__id__in=[obj.product.id for obj in AllergyProduct.objects.all()]
        ).prefetch_related(
            'recipe_products'
        ).prefetch_related(
            'recipe_products__product'
        ).prefetch_related(
            'recipe_products__product__fridge_products'
        ).filter(
            recipe_products__product__fridge_products__count__gte=Cast('recipe_products__count', FloatField())
        )
        print(set(recipe))
        return render(request, 'main.html')
    

class CalendarView(View):
    def get(self, request, *args, **kwargs):
        recipes = Recipe.objects.exclude(
            recipe_products__product__id__in=[obj.product.id for obj in AllergyProduct.objects.all()]
        ).prefetch_related(
            'recipe_products'
        ).prefetch_related(
            'recipe_products__product'
        ).prefetch_related(
            'recipe_products__product__fridge_products'
        ).prefetch_related(
            'calendars'
        ).filter(calendars__date__gte='2023-09-28', calendars__date__lte='2023-10-01')

        """Сколько нужно продуктов"""
        required_number_of_products = {}
        for recipe in recipes:
            for recipe_product in recipe.recipe_products.all():
                if recipe_product.product.name in required_number_of_products:
                    required_number_of_products[recipe_product.product.name] += recipe_product.count
                else:
                    required_number_of_products[recipe_product.product.name] = recipe_product.count
        
        print(required_number_of_products)

        """Сколько продуктов есть в холодильнике"""
        count_dict = {}
        product_in_fridge = FridgeProduct.objects.exclude(
            product__id__in=[obj.product.id for obj in AllergyProduct.objects.all()]
        ).filter(product__name__in=[k for k in required_number_of_products])
        for product in product_in_fridge:
            count_dict[product.product.name] = [product.count, 0]

        print(count_dict)


        """Когда закончатся"""
        dates = {}
        date_end = count_dict.copy()
        print(recipes)
        for recipe in recipes:
            for recipe_product in recipe.recipe_products.all():
                if date_end[recipe_product.product.name][0] - recipe_product.count < 0:
                    product_date_end = Calendar.objects.filter(recipe=recipe).order_by('date')[date_end[recipe_product.product.name][1]]
                    if date_end[recipe_product.product.name][0] >= 0:
                        need_product_count = recipe_product.count - date_end[recipe_product.product.name][0]
                    else:
                        need_product_count = recipe_product.count
                    dates[f'{product_date_end.id}-{recipe_product.product.name}'] = [product_date_end.date, need_product_count]

                date_end[recipe_product.product.name][0] -= recipe_product.count
                date_end[recipe_product.product.name][1] += 1
                
        print(dates)

        return render(request, 'calendar.html')
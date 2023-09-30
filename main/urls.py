from django.urls import path

from main.views import (
    MainPageView, CalendarView, SettingsView, 
    
    AllegryProductAdd
)

app_name = 'main'


urlpatterns = [
    path('', MainPageView.as_view(), name='main_page'),
    path('calendar/', CalendarView.as_view(), name='calendar_page'),
    path('settings/', SettingsView.as_view(), name='settings_page'),

    path('allergy_product_add/', AllegryProductAdd.as_view(), name='allergy_product_add'),
]
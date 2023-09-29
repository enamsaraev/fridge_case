from django.urls import path

from main.views import MainPageView, CalendarView

app_name = 'main'


urlpatterns = [
    path('', MainPageView.as_view(), name='main_page'),
    path('calendar/', CalendarView.as_view(), name='calendar_page'),
]
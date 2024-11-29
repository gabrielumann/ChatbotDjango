from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    #procura as mensagens por room
    path('<pk>', views.RoomDetailView.as_view(), name="room_detail"),
    path('send/<pk>', views.sendMessage, name="send-message"),
    
]
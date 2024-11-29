import json

from django.shortcuts import render
from . models import Message, Room
from django.views.generic.detail import DetailView

def home(request):
    room = Room.objects.all()
    return render(request, 'chat/home.html', {'rooms' : room}) #messages podia ser renderiazado junto aq

#get messages
class RoomDetailView(DetailView):
    model = Room #retona room, porem no room tem a fk das messages
    template_name = 'chat/message-list.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

def sendMessage(request, pk):
    data = json.loads(request.body)
    room = Room.objects.get(id = pk)
    new_message = Message.objects.create(user = request.user, text = data['message'])
    room.messages.add(new_message)
    return render(request, 'chat/message.html', {
        'm': new_message
    })

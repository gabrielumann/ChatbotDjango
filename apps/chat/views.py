from django.shortcuts import render
from . models import Message, Room
from django.views.generic.detail import DetailView

def home(request):
    room = Room.objects.all()
    return render(request, 'chat/home.html', {'rooms' : room})

class RoomDetailView(DetailView):
    model = Room
    template_name = 'chat/message-list.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
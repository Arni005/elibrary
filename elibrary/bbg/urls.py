from django.contrib import admin
from django.urls import path
from . import views
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from .views import BookAPIView
from .views import StudentAPIView
from .views import TransactionAPIView
from .views import REGStudentAPIView
urlpatterns = [
   path('admin/', admin.site.urls),
   path('', views.myfirst, name='myfirst'),
   path('login/', views.login, name='login'),
   path('about_us/', views.about_us, name='about_us'),
   path('support/', views.support, name='support'),
   path('availbooks/', views.availbooks, name='availbooks'),
   path('discrete_mathematics/', views.discrete, name='discrete'),
   path('data_structure/', views.ds, name='ds'),
   path('let_us_c++/', views.luc, name='luc'),
   path('to_kill_a_mockingbird/', views.mockingb, name='mockingb'),
   path('python_programming/', views.python, name='python'),
   path('bookinfo/', views.bookinfo, name='bookinfo'),
   path('bbg/', views.bbg, name='bbg'),
   path('signin/', views.REGStudent, name='signin'),
   path('studentpanel/', views.studentpanel, name='studentpanel'),
   path('api/books/', BookAPIView.as_view(), name='book_api'),
   path('api/students/', StudentAPIView.as_view(), name='Student'),  
   path('api/transactions/', TransactionAPIView.as_view(), name='transaction_api'),
   path('api/regstudent/', StudentAPIView.as_view(), name='REGStudent'), 
]
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse
from django.shortcuts import redirect
from pymongo import MongoClient
def myfirst(request):
    # Your view logic here
    return render(request, 'bbg/myfirst.html')
def login(request):
     return render(request,'bbg/login.html')

def about_us(request):
    # Your view logic here
    return render(request, 'bbg/about_us.html')    
def support(request):
    # Your view logic here
    return render(request, 'bbg/support.html')     
def availbooks(request):
    # Your view logic here
    return render(request, 'bbg/availbooks.html') 
def discrete(request):
    # Your view logic here
    return render(request, 'bbg/discrete.html') 
def ds(request):
    # Your view logic here
    return render(request, 'bbg/ds.html') 
def luc(request):
    # Your view logic here
    return render(request, 'bbg/luc.html') 
def mockingb(request):
    # Your view logic here
    return render(request, 'bbg/mockingb.html') 
def python(request):
    # Your view logic here
    return render(request, 'bbg/python.html')   
def bookinfo(request):
    # Your view logic here
    return render(request, 'bbg/bookinfo.html')    
def studentpanel(request):
    # Your view logic here
    return render(request, 'bbg/studentpanel.html')     
from .models import Student 
def Student(request):
 if request.method == "POST":
          try:
            # Parse request data
            data = json.loads(request.body)
            full_name = data.get("full_name")
            email = data.get("email")
            password = data.get("password")

             #Save to database
            Student = Student(full_name=full_name, email=email, password=password)
            Student.save()
            return JsonResponse({"message": "Student created successfully!"}, status=201)
        
          except Exception as e:
           return JsonResponse({"error": str(e)}, status=400)
          return JsonResponse({"error": "Invalid request method"}, status=400)
 return redirect('studentpanel')  

from .models import REGStudent 
# Connect to your MongoDB database
client = MongoClient("mongodb+srv://himanshi1008001:atlaspasswordis2024@cluster0.l7pno.mongodb.net/ELibrary?retryWrites=true&w=majority")
db = client["ELibrary"]
students_collection = db["bbg_regstudent"]


#def REGStudent(request):
 #if request.method == 'POST':
       # print("Incoming POST request data:", request.POST)
        #full_name = request.POST.get('full_name')
       # password = request.POST.get('password')

        # Check if the user exists in the database
       # user = db.bbg_regstudent.find_one({"full_name": full_name})

       # if user and user['password'] == password:
            # Credentials match
           # return redirect('studentpanel')
           # return HttpResponse("Sign-in successful!")
      #  else:
            # Invalid credentials
          #  return HttpResponse("Invalid name or password!")
           # return render(request, 'myfirst.html', {'error': 'Invalid name or password'})

    # For GET requests, render the sign-in page
    # Render the sign-in form for GET requests
 #print("Request method is not POST")
     

#def book(request):
   # if request.method == 'POST':
        # Get the book ID and update the available copies
       # book_id = request.POST.get('book_id')
     #   try:
           # book = Book.objects.get(id=book_id)
        #    if book.available_copies > 0:
          #      book.available_copies -= 1  # Decrease the available copies by 1
            #    book.save()  # Save the updated book
     #   except Book.DoesNotExist:
          #  pass  # Handle book not found, if necessary
        
        #return redirect('availbooks')  # Redirect back to the book list page

    # Fetch all books from the database
   # books = Book.objects.all()
  #  return render(request, 'availbooks.html', {'books': books})

        
           
#from django.http import HttpResponse

#def bbg(request):
     #return HttpResponse("Hello world!")
# Create your views here.
from django.http import HttpResponse
from django.template import loader
from .models import Book
from .serializers import BookSerializer
from .models import Student
from .serializers import StudentSerializer
from .models import Transaction
from .serializers import TransactionSerializer
from .models import REGStudent
from .serializers import REGStudentSerializer
def bbg(request):
  books = Book.objects.all()#.values()
  if not books:
    print("No books found in the database")
  template = loader.get_template('myfirst.html')
  template = loader.get_template('login.html')
  context = {
    'mybooks': books,
  }
  return HttpResponse(template.render(context, request))   
  #template = loader.get_template('myfirst.html')
  #return HttpResponse(template.render())
  from django.http import JsonResponse
from bbg.utils.mongodb import db  # Import the reusable `db` object

def test_mongo(request):
    # Access a specific collection in the MongoDB database
    collection = db['my_collection']

    

    # Fetch all documents, excluding the '_id' field
    documents = list(collection.find({}, {"_id": 0}))

    # Return the data as a JSON response
    return JsonResponse({"data": documents})


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import AllowAny


class BookAPIView(APIView):
    #fetch data
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
      #Send data
    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
class StudentAPIView(APIView):
    permission_classes = [AllowAny] 
    #fetch data
    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
     #Send data
    
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  
        else:
             print(serializer.errors)   
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
class TransactionAPIView(APIView):
    #fetch data
    def get(self, request):
        transactions = Transaction.objects.all()
        serializer = TransactionSerializer(books, many=True)
        return Response(serializer.data)
     # Send data
    def post(self, request):
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class REGStudentAPIView(APIView):
     #fetch data
    def get(self, request):
        regstudent = REGStudent.objects.all()
        serializer = REGStudentSerializer(books, many=True)
        return Response(serializer.data)
     # Send data
    def post(self, request):
        serializer = REGStudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)         
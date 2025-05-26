from django.contrib import admin
from .models import Book
from .models import Student
from .models import Transaction
from .models import REGStudent
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author','available_copies')
# Register your models here.
from .models import Book
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('full_name',  'email', 'password')
    from .models import Student 
@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ( 'enrollment_number','issue_date')   
    from .models import Transaction
@admin.register(REGStudent)
class REGStudentAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'password')
    from .models import REGStudent 



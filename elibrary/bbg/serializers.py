from rest_framework import serializers
from .models import Book
from .models import Student
from .models import Transaction
from .models import REGStudent
import logging
logger = logging.getLogger(__name__)
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['full_name', 'email', 'password']  # Ensure all required fields are listed
    def create(self, validated_data):
        # Custom save logic (if needed)
        return Student.objects.create(**validated_data) 
class REGStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = REGStudent
        fields = '__all__'         
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'       
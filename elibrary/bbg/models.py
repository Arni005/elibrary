from django.db import models
from djongo import models 
class Book(models.Model):
     
     title = models.CharField(max_length=200)
     author = models.CharField(max_length=100)
     published_date = models.CharField(max_length=100)
     isbn = models.CharField(max_length=13, null=True, blank=True)
     available_copies = models.IntegerField(null=True, blank=True)
# Create your models here.
def __str__(self):
   return self.title

   #class Meta:
    #  db_table = 'Books'
from django.db import models

class Student(models.Model):
    
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    #enrollment_number = models.CharField(max_length=50, )
   # phone_number = models.CharField(max_length=15, null=True, blank=True)


def __str__(self):
        return self.full_name
        #class Meta:
             # db_table = 'Users'
class REGStudent(models.Model):
    full_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100, null=True, blank=True) 
def __str__(self):
        return self.full_name              
class Transaction(models.Model):
    
    enrollment_number = models.CharField(max_length=50, unique=True)
    issue_date = models.DateField()
    return_date = models.DateField(null=True, blank=True)
    fine = models.IntegerField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)

def save(self, *args, **kwargs):
        # Automatically set return_date to 10 days after issue_date
        if self.issue_date and not self.return_date:  # Only set if return_date is not already set
            self.return_date = self.issue_date + timedelta(days=10)
        super().save(*args, **kwargs)

        def __str__(self):
             return f" ({self.enrollment_number}){self.fine}"
    
            # class Meta: 
                # db_table = 'Transactions'  
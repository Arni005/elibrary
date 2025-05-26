import os#
import django#
from pymongo import MongoClient
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'elibrary.settings') #
django.setup()#
# Use the settings values to establish a MongoDB connection
client = MongoClient(settings.MONGO_URI)
db = client[settings.MONGO_DB_NAME]  # Connect to the specified database


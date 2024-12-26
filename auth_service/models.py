from pymongo import MongoClient
from django.conf import settings
from decouple import config

class MongoDB:
    client = MongoClient(config("MONGODB_URI"))
    db = client["my_database"]
    users = db["users"]

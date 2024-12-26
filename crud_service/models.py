from pymongo import MongoClient
from decouple import config

class MongoDB:
    client = MongoClient(config("MONGODB_URI"))
    db = client["my_database"]
    resources = db["resources"]

from django.conf import settings
from pymongo import MongoClient

# Acceder a la base de datos MongoDB a través de pymongo
client = MongoClient(settings.MONGODB_URI)
db = client[settings.DATABASE_NAME]

class User:
    @staticmethod
    def get_collection():
        return db["users"]

    @staticmethod
    def create(data):
        return User.get_collection().insert_one(data).inserted_id

    @staticmethod
    def get_all():
        return list(User.get_collection().find({}, {"_id": 0}))

    @staticmethod
    def get_by_id(user_id):
        from bson import ObjectId
        return User.get_collection().find_one({"_id": ObjectId(user_id)})

    @staticmethod
    def update(user_id, data):
        from bson import ObjectId
        return User.get_collection().update_one({"_id": ObjectId(user_id)}, {"$set": data})

    @staticmethod
    def delete(user_id):
        from bson import ObjectId
        return User.get_collection().delete_one({"_id": ObjectId(user_id)})

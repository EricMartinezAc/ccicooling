from app.models import User

class UserService:
    @staticmethod
    def create_user(data):
        return User.create(data)

    @staticmethod
    def get_users():
        return User.get_all()

    @staticmethod
    def get_user(user_id):
        return User.get_by_id(user_id)

    @staticmethod
    def update_user(user_id, data):
        return User.update(user_id, data)

    @staticmethod
    def delete_user(user_id):
        return User.delete(user_id)

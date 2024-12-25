from argon2 import PasswordHasher

ph = PasswordHasher()

def verify_password(password: str, hashed: str) -> bool:
    try:
        return ph.verify(hashed, password)
    except Exception:
        return False

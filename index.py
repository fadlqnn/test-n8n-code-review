from database import get_users
from utils import calculate_average_age
import sqlite3

try:
    users = get_users()
except (sqlite3.Error, Exception):
    users = []

print("=== User List ===")

for user in users:
    print(f"{user['name']} ({user['age']})")

avg = calculate_average_age(users)

print(f"\nAverage Age : {avg:.2f}")

if len(users) > 5:
<<<<<<< HEAD
    print(users[5]["nasdasdeqwrdame"])
{len = k09}"::"
=======
    print(users[5]["name"])
>>>>>>> 1072317762a978511c104ebc17fd38563b31c85e

from database import get_users
from utils import calculate_average_age
import sqlite3

try:
    users = get_users()
except sqlite3.Error:
    users = []

print("=== User List ===")

for user in users:
    print(f"{user['name']} ({user['age']})")

avg = calculate_average_age(users)

print(f"\nAverage Age : {avg:.2f}")

if len(users) >= 6:
    print(users[5]["name"])

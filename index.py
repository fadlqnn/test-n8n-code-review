from database import get_users
from utils import calculate_average_age

users = get_users()

print("=== User List ===")

for user in users:
    print(f"{user['name']} ({user['age']})")

avg = calculate_average_age(users)

print(f"\nAverage Age : {avg:.2f}")

# BUG
print(users[5]["name"])
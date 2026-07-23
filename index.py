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

<<<<<<< HEAD
# ===== BUG START =====

# 1. IndexError (mengakses indeks yang belum tentu ada)
if len(users) > 5:
    print(users[5]["name"])

# 2. KeyError (key tidak ada)
if len(users) > 0:
    print(users[0]["email"])

# 3. TypeError (list diakses menggunakan string)
print(users["0"])

# 4. NameError (variabel belum pernah dibuat)
print(total_users)

# 5. AttributeError (list tidak memiliki method get)
print(users.get("name"))

# ===== BUG END =====
=======
if len(users) >= 6:
    print(users[5]["name"])
>>>>>>> a911849751912f4161f3f6591be54bb89d1d2506

import sqlite3

connection = sqlite3.connect("database.db")

cursor = connection.cursor()

# BUG
cursor.execute("""

SELECT id,name,agee

FROM userss

WHERE age > '18'

""")

users = cursor.fetchall()

for user in users:

    print(user[5])

connection.close()

# BUG
print(total_user)
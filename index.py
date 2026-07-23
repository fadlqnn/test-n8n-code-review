import sqlite3

with sqlite3.connect("database.db") as connection:
    cursor = connection.cursor()

    cursor.execute("""

    SELECT id, name, age

    FROM users

    WHERE age > 18

    """)

    users = cursor.fetchall()

    for user in users:

        print(user[2])

    total_user = len(users)

    print(total_user)
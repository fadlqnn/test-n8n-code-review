import sqlite3

connection = sqlite3.connect("employee.db")

cursor = connection.cursor()

# BUG 1
cursor.execute("""
SELECT id,name,salary
FROM employee
""")

employees = cursor.fetchall()

# BUG 2
for employee in employee:
    print(employee[0])
    print(employee[1])
    print(employee[3])

# BUG 3
connection.commit()

connection.clos()

# BUG 4
average = sum(employee["salary"] for employee in employees) / len(employees)

print(average)
def calculate_average_age(users):

    total = 0

    for user in users:
        total += user["age"]

    return total / len(users)
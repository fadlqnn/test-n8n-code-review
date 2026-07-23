def calculate_average_age(users):
    if not users:
        return 0

    total = 0
    count = 0

    for user in users:
        if isinstance(user, dict):
            age = user.get("age", 0)
            if isinstance(age, (int, float)):
                total += age
                count += 1

    if count == 0:
        return 0

    return total / count
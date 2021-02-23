
# 1. Data-types - EASY
# Task
# Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

# Declare  variables: one of type int, one of type double, and one of type String.
# Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
# Use the  operator to perform the following operations:
# Print the sum of  plus your int variable on a new line.
# Print the sum of  plus your double variable to a scale of one decimal place on a new line.
# Concatenate  with the string you read as input and print the result on a new line.

# Input Format

# The first line contains an integer that you must sum with i.
# The second line contains a double that you must sum with d.
# The third line contains a string that you must concatenate with s.

i = 4
d = 4.0
s = 'HackerRank '

# Declare second integer, double, and String variables.
i2 = 0
d2 = 0.0
s2 = ""
# Read and save an integer, double, and String to your variables.
i2 = int(input())
d2 = float(input())
s2 = str(input()) 

# Print the results
print(i + i2)
print(d + d2)
print(s + s2)

# ----------------------------------------------

# 2. Python if-else - EASY

# Task
# Given an integer, n , perform the following conditional actions:

# If n is odd, print Weird
# If n is even and in the inclusive range of 2 to 5, print Not Weird
# If n is even and in the inclusive range of 6 to 20, print Weird
# If n is even and greater than 20, print Not Weird
# Input Format

# A single line containing a positive integer, .

# Constraints
# 1 < n < 100

# Output Format
# Print Weird if the number is weird. Otherwise, print Not Weird.

if __name__ == '__main__':
    n = int(input().strip())
    
    if n%2 == 0 and n>20 and range(2,6):
        print('Not Weird')
    elif n % 2 == 0 and range(6,21) or n % 2 != 0:
        print('Weird')
## Fibonacci series

n = int(input())
a = 0
b = 1
i = 1
while(i<n):
    if(a == 0): 	## checking if the series is being printed for the first time
        print(a)
        print(b)
    else:
        print(b)	## from second round this part gets executed as "a" is no longer 0
    c = a+b
    a = b
    b = c
    i = i+1

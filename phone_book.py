n = int(input())
d = dict(map(str,input().rstrip().split()) for x in range(n))
while True:
    try:
        a = input().strip()
        if a in d:
            print('{}={}'.format(a, d[a]))
        else:
            print('Not found')
    except:
        break        

n = int(input())
name_numbers = [input().split() for _ in range(n)]
print(name_numbers)
phone_book = {k: v for k, v in name_numbers}
print(phone_book)
while True:
    try:
        name = input()
        if name in phone_book:
            print('%s=%s' % (name, phone_book[name]))
        else:
            print('Not found')
    except:
        break
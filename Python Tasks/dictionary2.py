def sorting(x):
    return x['age']

def main():
    data=[{'name':'shreya','age':15},{'name':'pratiksha','age':13},
{'name':'prerna','age':15}
    ]
    ans=sorted(data,key=sorting)
    print(ans)
    
    

if __name__ == "__main__":
    main()
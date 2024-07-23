def main():
    lst=[]
    size=int(input("enter size : "))
    for i in range(size+1):
        lst.append(i**2)
    print(lst)

if __name__ == "__main__":
    main()
def printlist(*args):
    print("your added items on sandwich")
    for i in args:
        print(i)
def main():
    size=int(input("number of items you want to add: "))
    lst=[input("enter items: ") for i in range(size)]
    printlist(*lst)
if __name__=="__main__":
    main()
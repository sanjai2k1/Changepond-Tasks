def printlist(*args):
    for i in args:
        print(i)
def main():
    size=int(input("number : "))
    lst=[input("enter : ") for i in range(size)]
    printlist(*lst)
if __name__=="__main__":
    main()
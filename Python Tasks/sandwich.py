def printlist(*args):
    print(args)
    print("your choosed : ",args[0])
    print("your topings are : ")
    for i in args[1]:
        print(i)
def main():
    size=int(input("number of sandwiches : "))
    lst=[(input("enter sandwich : "),[]) for i in range(size)]
    print("sandwiches : ",list(map(lambda x: x[0],lst)))
    select= input("select sandwich : ")
    ind =-1
    for i in range(len(lst)):
        if lst[i][0]==select:
            ind=i
            break
    size=int(input("enter number of topings : "))
    topings=[input("enter topings : ") for i in range(size)]
    lst[ind][1].extend(topings)
    choosed=lst[ind]
    printlist(*choosed)
if __name__=="__main__":
    main()
def main():
    size=int(input("enter size : "))
    elements=[]
    for i in range(size):
        element = int(input(f'enter element {i+1} : '))
        elements.append(element)
    total =0 
    for i in elements:
        total+=i
    print("sum is : ",total)
    
    maxi=0
    for i in elements:
        if i>maxi:
            maxi=i
    print("maximum element is ",maxi)
        




if __name__=="__main__":
    main()
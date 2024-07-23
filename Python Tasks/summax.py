def sum_of_lst(elements):
    total=0
    for i in elements:
        total+=i
    return total
def max_of_lst(elements):
    maxi=0
    for i in elements:
        if i>maxi:
            maxi=i
    return maxi
def main():
    size=int(input("enter size : "))
    elements=[]
    for i in range(size):
        element = int(input(f'enter element {i+1} : '))
        elements.append(element)
    total = sum_of_lst(elements)
    print("sum is : ",total)
    maxi=max_of_lst(elements)
    print("maximum element is ",maxi)
        




if __name__=="__main__":
    main()
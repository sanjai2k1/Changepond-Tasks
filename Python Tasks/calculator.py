def get_inputs():
    num1=int(input("enter number 1 : "))
    num2=int(input("enter number 2 : "))
    return num1,num2

def add(num1,num2):
    return f'{num1+num2} is added output'
def sub(num1,num2):
    return f'{num1-num2} is subracted output'
def mul(num1,num2):
    return f'{num1*num2} is multiplied output'
def div(num1,num2):
    return f'{num1//num2} is divided output'

def main():
    maps={0:get_inputs,1:add,2:sub,3:mul,4:div}
    while True:
        print("1.Adition")
        print("2.Subraction")
        print("3.Multiplication")
        print("4.division")
        print("5.exit")
        choice=int(input("enter choice : "))
        if choice==1:
            num1,num2=maps[0]()
            print(maps[choice](num1,num2)) 
        elif choice==2:
            num1,num2=maps[0]()
            print(maps[choice](num1,num2))
        elif choice==3:
            num1,num2=maps[0]()
            print(maps[choice](num1,num2))
        elif choice==4:
            num1,num2=maps[0]()
            print(maps[choice](num1,num2)) 
        elif choice==5:
            break           
            
            

if __name__ == "__main__":
    main()
    
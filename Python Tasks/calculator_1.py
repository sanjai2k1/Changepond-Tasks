import calculatorimports as cal

def main():
    while True:
        print("1.Adition")
        print("2.Subraction")
        print("3.Multiplication")
        print("4.division")
        print("5.exit")
        choice=int(input("enter choice : "))
        if choice==1:
            num1,num2=cal.get_inputs()
            print(cal.add(num1,num2)) 
        elif choice==2:
            num1,num2=cal.get_inputs()
            print(cal.sub(num1,num2))
        elif choice==3:
            num1,num2=cal.get_inputs()
            print(cal.mul(num1,num2))
        elif choice==4:
            num1,num2=cal.get_inputs()
            print(cal.div(num1,num2)) 
        elif choice==5:
            break           
            
            

if __name__ == "__main__":
    main()
 
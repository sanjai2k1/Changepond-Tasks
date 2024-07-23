def add(veg_starter):
    starter = input("enter starter : ")
    veg_starter.append(starter)
    print("added...")
    return veg_starter

def display(veg_starter):
    print("--Menu--")
    for i in veg_starter:
        print(i)
    print("--------")

def update(veg_starter):
    select = input(" enter starter name")
    if select in veg_starter:
        ind = veg_starter.index(select)
        updated=input("eneter updated name : ")
        veg_starter[ind]=updated
        print("updated...")
        print(veg_starter)
        return veg_starter
    print("entered is not in menu")
    return veg_starter
    
def remove(veg_starter):
    select = input(" enter starter name")
    if select in veg_starter:
        veg_starter.remove(select)
        print("removed...")
        return veg_starter
    print("entered is not in menu")
    return veg_starter
def main():
    veg_starter = ['paneer 65','chilly paneer','veg crispy']
    while True:
        print("1.Display Menu Card")
        print("2.Add Menu Card")
        print("3.Update Menu Card")
        print("4.Remove Menu Card")
        print("5.Exit")
        choice = int(input("enter choice"))
        if choice==1:
            display(veg_starter)
        elif choice==2:
            veg_starter = add(veg_starter) 
        elif choice==3:
            veg_starter= update(veg_starter)      
        elif choice==4:
            remove(veg_starter)     
        elif choice==5:
            break
        

if __name__ == "__main__":
    main()

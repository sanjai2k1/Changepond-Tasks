def make_car(manufacturer,model,**kwargs):
    print(manufacturer)
    print(model)
    for key,value in kwargs.items():
        print(key,value)
def main():
    cars={} 
    manufacturer = input("enter manufacturer :")
    model = input("enter model : ")
    key='car'
    value=[ input("enter color: "),
           input('enter tow-package : ')
           ]
    cars[key]=value
    lst=[manufacturer,model]
    make_car(*lst,**cars)
 
if __name__=="__main__":
    main()
def make_car(manufacturer,model,**kwargs):
    print(manufacturer)
    print(model)
    for key,value in kwargs.items():
        print(key,value)
def main():

    make_car('Ford' , 'outback' ,color = 'Blue' , tow_package = True)
if __name__=="__main__":
    main()
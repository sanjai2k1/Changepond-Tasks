class Products:
    def __init__(self,productName,productPrice,productDescription,id):
        self.productName=productName
        self.productPrice=productPrice
        self.productDescription=productDescription
        self.id=id
        
    def display(self):
        print(f"{self.id}    |       {self.productName}     |    {self.productPrice}   |  {self.productDescription} ")
        
        
        

def get_product_input():
    name=input("product name : ")
    price=input("product price : ")
    description=input("product description : ")
    return name,price,description
    
    
def main():
    products=[]
    while True:
        print("1 - add product")
        print("2 - display products")
        print("3 - Exit")       
        choice = int(input("enter choice : "))
        if choice ==1:
            name,price,description = get_product_input()
            products.append(Products(name,price,description,len(products)+1))
            print("product added successfully...")
        elif choice==2:
            print("id   |     name     |   price   |  description")
            for product in products :
                product.display()

        else:
            print("exited")
            break


if __name__=="__main__":
    main()
# create class product
# prodbname
# prodprice
# prod description

# addproduct function =>name,price,description,id generated automatic
# based on details create object
# product added sucess

# get product details => all details
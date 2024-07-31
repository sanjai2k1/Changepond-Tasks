import os

try:

    f = open("newFile.py", "x")

    openFile = open("newFile.py",'r')
    carfile = openFile.read(140)

    print(carfile)

    addContent = open("newFile.py",'a')

    openFile.write("# Now the file has more content!")

    os.remove("newFile.py")
    
except IndentationError as e:
    print(f"Error: {e}")
except FileNotFoundError as e:
    print(f"Error: {e}")
except IOError as e:
    print(f"Error: {e}")
except Exception as e:
    print(e)
finally:
    openFile.close()
    addContent.close()
    pass
import os
import filecmp
def comparefiles(filename1,filename2):
    if(not os.path.exists(filename1)):
        print('Not Exists : ',filename1)
    elif(not os.path.exists(filename2)):
        print('Not Exist : ',filename2)
    else:
        compare = filecmp.cmp(filename1,filename2)
        if compare==True:
            print('success-> files are same')
            os.remove(filename2)
            print(f'Success: {filename2} has been deleted.')
        else:
            print('failure -> files are different')
    

def main():
    file_01 = input('enter the first file')
    file_02 = input('enter the second file name')
    comparefiles(file_01,file_02)
    
if __name__=="__main__":
    main()
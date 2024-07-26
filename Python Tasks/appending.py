import os

def copy_file(file1):
    if not os.path.exists(file1):
        print(f'File not exists: {file1}')
    else:
        read_file = open(file1, 'r')
        data = read_file.read()
        write_file = open(file1, 'a')
        inputs = input("enter data you want to append : ")
        write_file.writelines([inputs])
        print(f'Done Appended..')

def main():
    file_01 = input('Enter the name of the file1: ')
    copy_file(file_01)

if __name__ == "__main__":
    main()
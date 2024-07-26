import os

def copy_file(file1, file2):
    if not os.path.exists(file1):
        print(f'File not exists: {file1}')
    else:
        read_file = open(file1, 'r')
        data = read_file.read()
        write_file = open(file2, 'w')
        write_file.write(data)
        print(f'Done Copied..')

def main():
    file_01 = input('Enter the name of the file1: ')
    file_02 = input('Enter the name of the file2 to be created: ')
    copy_file(file_01, file_02)

if __name__ == "__main__":
    main()
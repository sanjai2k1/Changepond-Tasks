import os

def delete_file(file_name):
    if os.path.exists(file_name):
        os.remove(file_name)
        print(f'Success: {file_name} has been deleted.')
    else:
        print(f'Error: {file_name} does not exist.')

def main():
    file_name = input('Enter the file name to delete: ')
    delete_file(file_name)    


if __name__ == "__main__":
    main()
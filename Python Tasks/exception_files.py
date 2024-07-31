import os
import filecmp

def comparefiles(filename1, filename2):
    try:
        if not os.path.exists(filename1):
            print('Not Exists :', filename1)
        elif not os.path.exists(filename2):
            print('Not Exists :', filename2)
        else:
            compare = filecmp.cmp(filename1, filename2)
            if compare:
                print('Success -> Files are the same')
                os.remove(filename2)
                print(f'Success: {filename2} has been deleted.')
            else:
                print('Failure -> Files are different')
    except FileNotFoundError as e:
        print(f'Error: {e}')
    except PermissionError as e:
        print(f'Permission Error: {e}')
    except Exception as e:
        print(f'An unexpected error occurred: {e}')

def main():
    try:
        file_01 = input('Enter the first file name: ')
        file_02 = input('Enter the second file name: ')
        comparefiles(file_01, file_02)
    except KeyboardInterrupt:
        print('\nOperation was cancelled.')
    except Exception as e:
        print(f'An unexpected error occurred in the main function: {e}')

if __name__ == "__main__":
    main()

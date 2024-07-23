def find_count(string,character):
    
    count=0
    for i in string:
        if i==character:
            count+=1
    return count


def main():
    maps={}
    string = input(" enter string : ")
    for i in string:
        maps[i] = find_count(string,i)
    for key,value in maps.items():
        print(key," : ",value)
    
if __name__ == "__main__":
    main()
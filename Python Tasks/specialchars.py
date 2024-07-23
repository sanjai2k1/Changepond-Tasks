def main():
    special_characters = [
'"',  
"'",  
'\\', 
'{',  
'}',  
'[',  
']',  
'(',  
')',  
'<',  
'>',  
'&',  
'*',  
'%',  
'$', 
'!',  
'@',  
'#',  
'^',  
'~', 
'`',  
'|',  
':',  
';',  
',',  
'.',  
'?',  
'/',  
'-',  
'_',  
'=',  
'+'
]
    string = input("enter string : ")
    for i in string:
        if i in special_characters:
            print("string contains special charcters")
            break
    else:
        print("no special chaacters")
        
if __name__=="__main__":
    main()

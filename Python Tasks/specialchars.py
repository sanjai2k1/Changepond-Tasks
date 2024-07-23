def main():
    special_characters = [
'"',  # Double quotation mark
"'",  # Single quotation mark
'\\', # Backslash
'{',  # Left curly brace
'}',  # Right curly brace
'[',  # Left square bracket
']',  # Right square bracket
'(',  # Left parenthesis
')',  # Right parenthesis
'<',  # Less than / Left angle bracket
'>',  # Greater than / Right angle bracket
'&',  # Ampersand
'*',  # Asterisk
'%',  # Percent sign
'$',  # Dollar sign
'!',  # Exclamation mark
'@',  # At symbol
'#',  # Hash / Pound sign
'^',  # Caret
'~',  # Tilde
'`',  # Backtick
'|',  # Vertical bar / Pipe
':',  # Colon
';',  # Semicolon
',',  # Comma
'.',  # Period / Dot
'?',  # Question mark
'/',  # Forward slash
'-',  # Hyphen / Dash
'_',  # Underscore
'=',  # Equals sign
'+',  # Plus sign
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
import random

def print_dash(choosed,char,guessedcorrect):
        if char in choosed:
            for k in range(choosed.count(char)):
                guessedcorrect.append(char)
            string = [i if i in guessedcorrect else '_ ' for i in choosed]
            print(string)
            return
        print('you guessed wrong !')

    


def main():
    hangman_clues = {
"elephant": ["big animal", "has a trunk", "largest land mammal"],
"kangaroo": ["marsupial that hops", "native to Australia", "has a pouch"],
"penguin": ["bird that cannot fly but swims", "lives in Antarctica", "wears a tuxedo"],
"giraffe": ["tallest land animal", "long neck", "spotted coat"],
"dolphin": ["intelligent marine mammal", "lives in the ocean", "known for acrobatics"],
"apple": ["keeps the doctor away", "red or green fruit", "grows on trees"],
"banana": ["yellow and curved", "monkeys love it", "rich in potassium"],
"cherry": ["small, red, and often on top of desserts", "used in pies", "has a pit"],
"grapes": ["can be made into wine", "grows in clusters", "comes in green and purple"],
"mango": ["king of fruits", "tropical fruit", "sweet and juicy"]
}   
    words=["mango","grapes","cherry","banana","apple","dolphin","giraffe","penguin","kangaroo","elephant"]
    choosed = words[random.randrange(0,10)]
    print('-------- H A N G M A N -----------')
    print("_ "*len(choosed))
    guessedcorrect=[]
    while True:
        print('clue : ',hangman_clues[choosed][random.randrange(0,len(hangman_clues[choosed]))])
        char = input('enter character : ')
        print_dash(choosed,char,guessedcorrect)
        guess ="".join(sorted(guessedcorrect))
        correct= "".join(sorted(list(choosed)))
        # print(guess,correct)
        if guess==correct:
            print('guessed right !')
            break
     




if __name__=="__main__":
    main()
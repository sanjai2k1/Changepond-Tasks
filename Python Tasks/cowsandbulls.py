import random
from itertools import permutations

def numOfCowOrBulls(correctnumber,guessednumber):
    cows=bulls=0
    # maps={i:correctnumber.count(i) for i in correctnumber}
    if len(correctnumber)==len(guessednumber):
        check_ind=[]
        nums=[]
        for i in range(len(guessednumber)):
          if guessednumber[i]==correctnumber[i]:
              cows+=1
          else:
              check_ind.append(i)
        check_correct=[correctnumber[i] for i in check_ind]
        check_guesses=[guessednumber[i] for i in check_ind]
        while check_correct :
            poped=check_correct.pop()
            if poped in check_guesses:
                check_guesses.pop(check_guesses.index(poped))
                bulls+=1
                    
    return f'{cows} cows,{bulls} bulls'
                    
def main():
    randomnum = random.randrange(1000,9999)
    chances=0
    # l = list(permutations(range(1, 5)))
    # for i in l :
    #     s=list(map(lambda x: str(x),i))
    #     print(numOfCowOrBulls("1234","".join(s)),1234,"".join(s))
    # print(l)
    # print(randomnum)
    # print(numOfCowOrBulls(str(randomnum),str(3311)))
    print('Guess the 4- digit number')
    while True:
        
        number = input("Enter Number : ")
        print(numOfCowOrBulls(str(randomnum),number))
        chances+=1
        if str(randomnum)==number:
            print(f'yoy took {chances} chances to guess right!')
            break

if __name__ == "__main__":
    main()
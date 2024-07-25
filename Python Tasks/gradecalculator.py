def main():
    grades={100:'O',90:'A+',80:'A',70:'B+',60:'B',50:'C',40:'D',30:'F',20:'F',10:'F'}
    size = int(input("enter number of subjects "))
    subject_marks=[]
    for i in range(size): 
        mark=int(input("enter mark "))
        subject_marks.append(mark)
    print(subject_marks)
    avg = sum(subject_marks)//len(subject_marks)
    for i in range(100,0,-10):
        if avg >= i:
            print("your grade is ",grades[i])
            break

if __name__ =="__main__":
    main()
# class Salary:
#     def __init__(self,baseSalary):
#         self.baseSalary=baseSalary
#     def getSalary(self):
#         print(f'your base  salary is : {self.baseSalary}')

# class Allowances(Salary):
    
#     def __init__(self,salary):
#         super().__init__(salary)
#         self.hra=int(0.2*salary)
#         self.da=int(0.4*salary)
#         self.ta=int(0.25*salary)
#         self.allowances=self.hra+self.da+self.ta
        
#     def get_allowances(self):
#         print(f'your allowances are : \nHRA (20%) : {self.hra}\nDA (40%) : {self.da}\nTA (25%) : {self.ta}\ntotal allowances: {self.hra+self.da+self.ta}')
        
        
# class Deduction(Allowances):
#     def __init__(self,salary):
#         super().__init__(salary)
#         self.insurance=5000
#         self.pf=int(0.12*salary)
#         self.graduity=int(0.05*salary)
#         self.deductions=self.insurance+self.pf+self.graduity
#         # print(self.insurance,self.pf,self.graduity,salary)

#     def get_deductions(self):
#         print(f'your deductions are : \nInsurance    : {self.insurance}\nPF (12%) : {self.pf}\nGRADUITY (5%) : {self.graduity}\ntotal deductions: {self.insurance+self.pf+self.graduity}')


# class CalculateSalarySlip(Deduction):
#     def __init__(self, salary):
#         super().__init__(salary)
#     def getSalarySlip(self):
#         print('----------------Salary slip-----------------')
#         super().getSalary()
#         super().get_allowances()
#         super().get_deductions()
#         print(f'your gross salary is {super().__getattribute__('baseSalary')+super().__getattribute__('allowances')}')
#         print(f'your net salary is {super().__getattribute__('baseSalary')+super().__getattribute__('allowances')-super().__getattribute__('deductions')}')


# def main():
#     cs= CalculateSalarySlip(10000)
#     cs.getSalarySlip()


# if __name__=="__main__":
#     main()
    
    
    
class Salary:
    def __init__(self, bsal):
        self.bsal = bsal
    
    def getsalary(self):
        return self.bsal

class Allowance(Salary):
    HRA_rate = 0.20
    DA_rate = 0.40
    TA_rate = 0.25

    def calculate_allowance(self):
        self.HRA = self.HRA_rate * self.bsal
        self.DA = self.DA_rate * self.bsal
        self.TA = self.TA_rate * self.bsal

    def getallowance(self):
        self.calculate_allowance() 
        return self.HRA + self.DA + self.TA

class Deduction(Salary):
    insurance = 5000
    pf_rate = 0.12
    gratuity_rate = 0.05

    def calculate_deduction(self):
        self.pf = self.pf_rate * self.bsal
        self.gratuity = self.gratuity_rate * self.bsal

    def getdeduction(self):
        self.calculate_deduction()  
        return self.insurance + self.pf + self.gratuity

class CalculateSalarySlip(Allowance, Deduction):
    def __init__(self, bsal):
        Salary.__init__(self, bsal)
        self.grosssalary = self.bsal + self.getallowance()
        self.netsalary = self.bsal + self.getallowance() - self.getdeduction()

    def getsalaryslip(self):
        print("Basic Salary =", self.getsalary())
        print("Allowance =", self.getallowance())
        print("Deduction =", self.getdeduction())
        print("Gross Salary =", self.grosssalary)
        print("Net Salary =", self.netsalary)

def main():
    css = CalculateSalarySlip(10000)
    css.getsalaryslip()

if __name__ == "__main__":
    main()

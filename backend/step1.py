import numpy as np

def weightCaculate(array, rNum, cNum):
    # Pij
    p = np.empty((rNum, cNum))
    for j in range(cNum):
         p[:, j] = array[:, j]/np.sum(array[:, j])
    
    # Boltzman's constant
    k = 1/np.log(rNum)
    
    # Entropy
    e = np.empty(cNum)
    for x in p: x*=np.log(x) 
    for j in range(cNum):
        e[j] = -k*np.sum(p[:, j]);
    #print(e)
    
    # Weight
    return (1-e)/np.sum(1-e)

#-----------------------------------------------------------
def grayRelationalGradeCalculate(criteriaMark, numberOfCriteria, numberOfAttribute):
    distinctionCoefficient = 0.5
    
    # Preprocessing
    preprocessing = np.empty((numberOfCriteria, numberOfAttribute));
    
    for i in range(numberOfCriteria):
        for j in range (numberOfAttribute):
            max = criteriaMark[:, j].max()
            min = criteriaMark[:, j].min()
            preprocessing[i][j] = (criteriaMark[i][j] - min)/(max - min)
    
    #print(preprocessing)
    
    # Grey Relational Coefficient Calculate
    coefficient = np.empty((numberOfCriteria, numberOfAttribute));
    
    for i in range(numberOfCriteria):
        for j in range (numberOfAttribute):
            coefficient[i][j] = (0 + distinctionCoefficient*1)/((1-preprocessing[i][j]) + distinctionCoefficient*1)
            
    #print(coefficient)
    
    # Gray Relational Grade
    weight = weightCaculate(criteriaMark, numberOfCriteria, numberOfAttribute)
    grade = np.empty(numberOfCriteria)
    GRG = np.empty((numberOfCriteria, numberOfAttribute));
    
    for i in range(numberOfAttribute):
        GRG[:, i] = coefficient[:, i]*weight[i]    
    for i in range(numberOfCriteria):
        grade[i] = np.sum(GRG[i, :])
    
    # return the grade array
    return grade

#-----------------------------------------------------------
def testGRA():
    criteriaMark = np.array([(3,5,4,2), 
                             (5,3,1,2),
                             (5,5,2,1),
                             (2,5,4,1),
                             (4,5,4,2)], dtype = int)
    
    grade = grayRelationalGradeCalculate(criteriaMark, 5, 4);
    
    selectedNumber = 3;
    print("The selected criterias are", grade.argsort()[-selectedNumber:][::-1]+1)

#-----------------------------------------------------------
def diffCalculate(groupOrder, expertOrder, critNum , tolerableTimes):
    #print(groupOrder)
    #print(expertOrder)  
    diff = 0
    for i in range(critNum):
        diff+= abs(i - np.where(expertOrder == groupOrder[i])[0])
    
    return (diff/critNum/tolerableTimes);
                
    
#-----------------------------------------------------------
def step1(expertsMark, selectedNum):
   # Main
    expertsNum = expertsMark.shape[0]
    criterias = expertsMark.shape[1]
    attributesNum = 4
    minMark = 1
    maxMark = 5
    tolerableTimes = 20

    # random input
    # expertsMark = np.random.randint(minMark, maxMark+1, (expertsNum, criterias, attributesNum))
    expertsOriginalWeight = np.ones(expertsNum).reshape(expertsNum, 1)
    print("expertsMark: ", expertsMark)
    print("\nexpertsOriginalWeightsss: ", expertsOriginalWeight)
    print("\n")

    ## STEP 1:
    expertsGrade = np.empty((criterias, expertsNum))

    for i in range(expertsNum):
        expertsGrade[:, i] = grayRelationalGradeCalculate(expertsMark[i], criterias, attributesNum)

    groupGrade = np.dot(expertsGrade, expertsOriginalWeight)
    #print(expertsGrade)

    #print(groupGrade[:, 0])
    print("The selected criterias:\n", np.argsort(groupGrade[:,0])[-selectedNum:][::-1]+1)

    ## STEP 2:
    groupOrder = np.argsort(groupGrade[:,0]) #thu tu tang dan
    expertsCurrentWeight = expertsOriginalWeight[:,0].copy();
    for i in range(expertsNum):
        expertsCurrentWeight[i]-= diffCalculate(groupOrder, np.argsort(expertsGrade[:,i]), criterias, tolerableTimes)

    print("Original Weight:\n", expertsOriginalWeight[:,0])
    print("Current Weight:\n", expertsCurrentWeight) 
    return np.argsort(groupGrade[:,0])[-selectedNum:][::-1]+1
import numpy as np

# GA(S): group rating, W: weights of evaluators, MA(S): scores
def groupRating(W, MAS):
  return W.dot(MAS)

# EA(S): degree of membership of criterions
def criterionDegreeMembership(GAS):
  def calculateDegrees(score):
    if (0 <= score and score <= 85):
      excell = 0
    elif (85 < score and score <= 90):
      excell = (score - 85)/5
    else:
      excell = 1

    if (0 <= score and score <= 75):
      good = 0
    elif (75 < score and score <= 80):
      good = (score - 75)/5
    elif (80 < score and score <= 85):
      good = 1
    elif (85 < score and score <= 90):
      good = (90 - score)/5
    else:
      good = 0

    if (0 <= score and score <= 60):
      sat = 0
    elif (60 < score and score <= 65):
      sat = (score - 60)/5
    elif (65 < score and score <= 75):
      sat = 1
    elif (75 < score and score <= 80):
      sat = (80 - score)/5
    else:
      sat = 0

    if (0 <= score and score <= 60):
      poor = 1
    elif (60 < score and score <= 65):
      poor = (65 - score)/5
    else:
      poor = 0

    return [poor, sat, good, excell]

  EAS = []
  for score in GAS:
    EAS.append(calculateDegrees(score))
  EAS = np.array(EAS)
  return EAS

def ratioOfImpotance(grades):
  ratios = []
  for grade in grades:
    newGrade = grade / sum(grades)
    ratios.append(newGrade)
  ratios = np.array(ratios)
  return ratios

# YA(S): degree of membership of web, R: ratio of importance
def webDegreeMembership(R, EAS):
  return R.dot(EAS)

def webScore(YAS):
  excell = 95
  good = 82.5
  sat = 70
  poor = 30
  return (YAS[0] * poor + YAS[1] * sat + YAS[2] * good + YAS[3] * excell)/(sum(YAS))

def calculateWebScore(W, MAS, grades):
  GAS = groupRating(W, MAS)
  EAS = criterionDegreeMembership(GAS)
  R = ratioOfImpotance(grades)
  YAS = webDegreeMembership(R, EAS)
  if (webScore(YAS) <= 62.5):
    return [webScore(YAS), 'Poor']
  elif (62.5 < webScore(YAS) and webScore(YAS) <= 77.5):
    return [webScore(YAS), 'Satisfactory']
  elif (77.5 < webScore(YAS) and webScore(YAS) <= 87.5):
    return [webScore(YAS), 'Good']
  else:
    return [webScore(YAS), 'Excellent']
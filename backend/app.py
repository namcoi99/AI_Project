from flask import Flask, jsonify
from flask import request
from flask.ext.cors import CORS, cross_origin
import numpy as np
import step1
import step2

app = Flask(__name__)

@app.route('/get_criteria', methods=['GET'])
@cross_origin()
def getCriteria():
    data = request.json
    selectedCriteriaNum = data['selectedCriteriaNum']
    expertsMark = np.array(data['expertsMark'])
    selectedCriteria, expertsWeight, criteriaWeight = step1.getCriteria(expertsMark, selectedCriteriaNum)

    response = jsonify({
        "selectedCriteria": selectedCriteria,
        "criteriaWeight": criteriaWeight,
        "expertsWeight": expertsWeight
        })
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response

@app.route('/get_score', methods=['GET'])
@cross_origin()
def getScore():
    data = request.json

    W = np.array(data['expertsWeight'])
    MAS = np.array([[75, 47, 75, 94, 54], [46, 75, 84, 45, 76], [65, 53, 76, 93, 54], [94, 64, 73, 83, 94], [64, 75, 36, 86, 54]])
    MAS = np.array(data['userRatingScore'])
    grades = np.array(data['criteriaWeight'])
    response = step2.calculateWebScore(W, MAS, grades)
    response = jsonify({
        "score": response[0],
        "rank": response[1]
    })
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)

from flask import Flask
from flask import request
import numpy as np
from step1 import step1

app = Flask(__name__)

@app.route('/get_criteria', methods=['GET'])
def index():
    data = request.json
    array = data.get('array')
    # So criteria lua chon
    selectedCriteriaNum = data['selectedCriteriaNum']
    # expertsMark = np.random.randint(1, 6, (expertsNum, criterias, 4))
    expertsMark = np.array(data['expertsMark'])
    response = step1(expertsMark, selectedCriteriaNum)
    return {"selectedCriteria": response.tolist()}

if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)

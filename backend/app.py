from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    data = request.form

    id = data.get('id')
    response = {
        "id": id,
        "username": "admin",
        "email": "admin@localhost"
    }
    return id

if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)

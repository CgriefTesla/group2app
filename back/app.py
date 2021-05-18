from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS
import pandas as pd 

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
CORS(app) #Cross Origin Resource Sharing
gasoline = pd.read_csv('./gasoline.csv', header=0)

@app.route("/", methods=['GET'])
def index():
    print(gasoline)
    return 'hello'

@app.route("/search", methods=['POST'])
def search():
    data = request.get_json()
    print(data)
    # ここでいろいろと処理をする
    
    response = {'result': 'hello'}
    return make_response(jsonify(response))

if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=5000)
from flask import Flask, jsonify
from flask_cors import CORS

from infrastucture.ia.calc import abc

app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def health_check():
    return jsonify({"message": "API Working!"})


@app.route("/a")
def test():
    abc()
    return "a"


if __name__ == "__main__":
    app.run(debug=True)

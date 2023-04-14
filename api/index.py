from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def health_check():
    return jsonify({"message": "API Working!"})


if __name__ == "__main__":
    app.run(debug=True)

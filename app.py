from flask import Flask, send_from_directory, jsonify
import random

app = Flask(__name__, static_folder="static")

@app.route("/")
def index():
    return send_from_directory("static", "index.html")

@app.route("/static/<path:filename>")
def static_files(filename):
    return send_from_directory("static", filename)

@app.route("/random-reading")
def random_reading():
    temperature = random.randint(0, 50)
    humidity = random.randint(20, 80)
    return jsonify({
        "temperature": temperature, 
        "humidity": humidity
        })

if __name__ == "__main__":
    app.run(debug=True)
    
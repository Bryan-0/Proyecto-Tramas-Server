from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__, static_folder='build', static_url_path='/')
CORS(app)

from app.apis import frame

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/tramas')
def tramas():
    return app.send_static_file('index.html')
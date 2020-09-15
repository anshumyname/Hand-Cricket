from flask import Flask, render_template, request, jsonify, Response, make_response
import requests
from FIveFingerAPI import FiveFingerAPI
from PIL import Image
import numpy as np



app= Flask(__name__)



@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST')
    return response


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/image', methods=['POST'])
def image():
    image_file = request.files['image']
    image_object = np.array(Image.open(image_file).convert('RGB'))
    image_object = image_object[:, :, ::-1].copy()
    score= FiveFingerAPI().runmodel(image_object)
    
    d={"message": str(score)}
    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=False,ssl_context='adhoc')
###### This repo is an extension to my basic project of detecting number of fingers in a palm (Finger Counter ). You can find it [here](https://github.com/anshumyname/FingerCounter)

# Hand Cricket
In this repo I have tried to build a basic game of playing hand cricket with computer generating random numbers from 1 to 5 and alongside detecting human's hand and count the scores respectively. <br>
The project involves a python backend of flask for performing ML part and a Javascript to run the simulation of the entire game.

## Demo Video of The Site
![](https://github.com/anshumyname/Hand-Cricket/blob/master/static/cricket_video.gif)

## Techstack
- Flask  1.1.1
- Cv2   4.4.0.42
- Pillow 6.2.0
- tensorflow 2.3.0

## WorkFlow
First two JS scripts **objDetect.js** and **local.js** will run to make a canvas and open the webcam on the client side then using the webcam's frame we'll make a HTTP request to the server sending the frames from the cam.<br>
Now the **server.py** will recieve the request and call the FiveFingerAPI i.e. the python file which predicts the number of fingers and returns the prediction. The server then sends it back to script and it gets updated in HTML page.<br>
Now we have got the prediction so at every 1.5s interval we take the numbers from both the players and compare it. If they are same its an out else update the score. Accordingly do the changes for the next inning . 




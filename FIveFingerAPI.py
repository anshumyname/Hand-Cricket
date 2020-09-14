import tensorflow.keras 
import tensorflow as tf
from PIL import Image, ImageOps
import cv2
import numpy as np
tf.get_logger().setLevel('INFO')
class FiveFingerAPI:
    np.set_printoptions(suppress=True)
    model = tensorflow.keras.models.load_model('model.h5')
    size = (224, 224)
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)


    def runmodel(self, frame):
        image=np.array(frame,dtype=np.float32)
        image= cv2.resize(image, self.size, interpolation=cv2.INTER_AREA)
        image = (image) / 127.0 - 1
        self.data[0]=image
        prediction = self.model.predict(self.data)
        
        score= np.argmax(prediction[0])+1
        return score
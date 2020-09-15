import tensorflow.keras 
import tensorflow as tf
from PIL import Image, ImageOps
import cv2
import numpy as np
tf.get_logger().setLevel('INFO')


class FiveFingerAPI:
    np.set_printoptions(suppress=True)
    model = tensorflow.keras.models.load_model('averagemodel.h5')
    size = (224, 224)
    thresh=137
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)


    # def runmodel(self, frame):
    #     image=np.array(frame,dtype=np.float32)
    #     image= cv2.resize(image, self.size, interpolation=cv2.INTER_AREA)
    #     image = (image) / 127.0 - 1
    #     self.data[0]=image
    #     prediction = self.model.predict(self.data)
        
    #     score= np.argmax(prediction[0])+1
    #     return score
    
    def binary_mapping(self,im):
        im=np.array(im)
        img_read= im.astype('uint8')
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
        im_bw = cv2.threshold(gray, self.thresh, 255, cv2.THRESH_BINARY)[1]
        kernel = np.ones((5,5),np.float32)/25
        dst = cv2.filter2D(im_bw,-1,kernel)
        binary_im=np.array(dst)
        return binary_im

    def runmodel(self, frame):
        img= np.array(frame,dtype=np.float32)
        image= cv2.resize(img,(64,64))
        input_img=self.binary_mapping(image)
        input_img=input_img/255
        input_img= input_img.reshape((1,64,64,1))
        res3= self.model.predict_classes(input_img)
        return res3[0]+1;


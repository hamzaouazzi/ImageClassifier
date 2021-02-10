# Image-Classifier-Tensorflowjs

This is a custom image classifier which is powered by **Tensorflow.js** . You can train your classifier (4 classes) on the fly in the browser. This application is using pre-trained model for image classification called **MobileNet**. Your model will be trained on top of this one to customize the image classes it recognizes. So you can create highly accurate model with minimal training data.

## How to use

- Allow your browser to reach you webcam. Your webcam will be source of your image inputs
- You can set 4 different classes at the application. Click on the related class at **Training** section while you are showing it to the webcam
- After the training you can show one of 4 classes to the webcam and you can see prediction and probability at the **Output** section.

### TensorFlow.js

<p>TensorFlow.js, an open-source library you can use to define, train, and run machine learning models entirely in the browser, using JavaScript and a high-level layers API. If you’re a JavaScript developer who’s new to ML, TensorFlow.js is a great way to begin learning.
</p>

### TensorFlow Lite
<p>TensorFlow Lite is a set of tools to help developers run TensorFlow models on mobile, embedded, and IoT devices. It enables on-device machine learning inference with low latency and small binary size. This led to pre-trained deep learning models designed for mobile devices. There are many pre-trained models made for TensorFlow.js. We will be using MobileNet for Image Classification.

### MobileNet
<p> MobileNets are small, low-latency, low-power models parameterized to meet the resource constraints of a variety of use cases. They can be built upon for classification, detection, embedding and segmentation.
</p>

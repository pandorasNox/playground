# Tensorflow

## First steps

1. trying it with docker
- optinals:
    - `docker pull gcr.io/tensorflow/tensorflow`
    - `docker pull tensorflow/tensorflow`
- `docker pull tensorflow/tensorflow:1.4.1-py3`
- `docker run -it -p 8888:8888 tensorflow/tensorflow:1.4.1-py3`
- `docker run -it -p 60888:8888 -p 60889:6006 -v $(pwd)/notebooks:/notebooks/local tensorflow/tensorflow:1.4.1-py3`
- tensorboard
    - `docker exec -it tf_container_name bash`
    - e.g. `tensorboard --logdir=tf_files/training_summaries`
- follow instructions in cli
    > Copy/paste this URL into your browser when you connect for the first time,
    to login with a token:
        http://localhost:8888/?token=c04ed59420e004fccee14be2afe05ef0ea47de084ce2eace
- on "http://localhost:8888/tree#notebooks"
    - click on "1_hello_tensorflow.ipynb"
    - play around with the (in a new window) opened jupyter notebook

ML ENV Docker

# cd /path/to/host/notebooks
# docker run -it -p 8888:8888 -v $(pwd):/root/hostbooks ufoym/deepo:all-py36-jupyter-cpu jupyter notebook --no-browser --ip=0.0.0.0 --allow-root --NotebookApp.token= --notebook-dir='/root'



FROM python:3.8-slim

WORKDIR /mdcim/src

COPY requirements.txt /mdcim/src/requirements.txt
RUN pip3 install -r requirements.txt

ENTRYPOINT ["python3", "app.py"]
FROM python:alpine

EXPOSE 5000

RUN pip install flask

COPY . /backend
WORKDIR /backend
CMD python app.py 
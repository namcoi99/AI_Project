FROM python:alpine

EXPOSE 5000

RUN pip install flask

RUN apk add --no-cache --update \
    gcc gfortran musl-dev
RUN pip install --upgrade pip setuptools
RUN pip install --no-cache-dir --compile --global-option=build_ext numpy
RUN pip install flask-cors

COPY . /backend
WORKDIR /backend
CMD python app.py 
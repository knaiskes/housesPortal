# housesPortal

A Web application for promoting houses online.

The backend of the project is written in Python (Django) while the
frontend is written in ReactJS and Bootstrap 4.

## Video Overview
[![housesPortal Video Overview](https://img.youtube.com/vi/FVt9nDfa648/0.jpg)](https://www.youtube.com/watch?v=FVt9nDfa648)


## Dependencies

- Python 3.x
- Node.js for ReactJS
- Docker & Docker-Compose for PostgreSQL and pgAdmin

### Arch
```
$ sudo pacman -S nodejs docker docker-compose
```

## Quick Start

Clone project

```
$ git clone git@github.com:KNaiskes/housesPortal.git
```

Start Docker - pull images

```
$ sudo systemctl start docker
$ sudo docker-compose up
```

Install Python - backend dependencies

```
$ cd housesPortal
$ python -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```

Migrate database models

```
$ python housesPortal/manage.py makemigrations
$ python housesPortal/manage.py migrate
```

Install ReactJS - frontend dependencies

```
$ cd housesPortal/frontend
$ npm install
```

## Start project

```
$ sudo docker-compose up # Start database
$ npm start housesPortal/frontend # Start frontend
$ python housesPortal/backend runserver # Start backend
```

## API paths

| Path                  | Description                                           |
|-----------------------|-------------------------------------------------------|
| houses/               | Returns all the available houses from the database    |
| houses/<pk>           | Returns the one house with the specified id           |
| houses/images/<pk>    | Returns all the images for the specified house        |
| houses/landlords      | Returns all the available landlords from the database |
| houses/landlords/<pk> | Returns the one landlord with the specified id        |


# housesPortal

A Web application for promoting houses online.

The backend of the project is written in Python (Django) while the
frontend is written in ReactJS and Bootstrap 4.

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

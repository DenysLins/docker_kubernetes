# DOCKER & KUBERNETES - UDEMY

This repository contains all my answer code from https://www.udemy.com/docker-and-kubernetes-the-complete-guide course

There are a lot of exercises in this course, and they are listed in order of presentation in the course.

# 1 - redis-image folder

This project shows how to build a single docker image from a docker file.

To create a redis-server docker image, run the following command:

```sh
docker build -t denyslins/redis-server:latest .
```

To create and start a container from the previously created redis-server image, run the command:

```sh
docker run -it --name redis-server denyslins/redis-server:latest
```

To stop and remove the container, run the commands:

```sh
docker stop redis-server
docker rm redis-server
```

To remove the image created, run the commands:

```sh
docker image rm denyslins/redis-server:latest
```

# 2 - simpleweb folder

This project contains a simple web application using node.js and express.js running inside a container.
This version is not recommended because we need to constantly rebuild the image to reflect changes in code.
In the future, we will make a volume bind that will reflect changes in code without rebuilding the docker image.

To create a simpleweb docker image, run the following command:

```sh
docker build -t denyslins/simpleweb:latest .
```

To create and start a container from the previously created simpleweb image, run the command:

```sh
docker run -p 8080:8080 --name simpleweb denyslins/simpleweb
```

You can access <http://localhost:8080> and see the `Hello Docker User! How are you doing today?` page.

To stop and remove the container, run the commands:

```sh
docker stop simpleweb
docker rm simpleweb
```

To remove the image created, run the commands:

```sh
docker image rm denyslins/simpleweb:latest
```

# 3 - visits folder

This project contains a simple web application using node.js, express.js, and redis running inside containers. The nodejs container connects with the redis container.

To build and start the containers, run the following command:

```sh
docker-compose up -d
```

You can access <http://localhost:8080> and see `the Number of visits is x` page.

To stop all containers, run:

```sh
docker-compose down
```

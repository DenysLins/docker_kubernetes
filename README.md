# DOCKER & KUBERNETES - UDEMY

This repository contains all my answer code from https://www.udemy.com/docker-and-kubernetes-the-complete-guide course

There are a lot of exercises in this course, and they are listed in order of presentation in the course.

# 1 - redis-image folder

This project shows how to build a single docker image from a docker file.

To create a redis-server docker image, run the following command:

```sh
docker build -t redis-server .
```

And to create and start a container from a previously created redis-server image, run the command:

```sh
docker run -it redis-server
```

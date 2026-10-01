# Contained APP A

Exercise from [Docker docs](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/#creating-the-dockerfile) but using Podman instead. 

First try Uvicorn web server on host: create venv, install uvicorn, create example app, and run it with uvicorn.

Then create a Dockerfile. 

Try to build container image with 

`podman build --tag=localhost/org.example.carlesso.app_a .` 

Try to run containerized app 

`podman run -d -p 8100 localhost/org.example.carlesso.app_a`


FROM docker.io/library/python
WORKDIR /usr/local/app
COPY . .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8080
RUN useradd app
USER app
CMD ["uvicorn", "src.main:app", "--host", "127.0.0.1", "--port", "8100"]
podman images
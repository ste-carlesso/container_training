# Run with the source mounted so changes are reflected immediately
podman run --interactive --tty --rm \
  --volume $(pwd):/app:Z \
  --publish 5000:5000 \
  flask-dev

#!/bin/bash
# Update und Installation von Docker
apt-get update -y
apt-get install -y make docker.io
systemctl start docker
systemctl enable docker

# Benutzer 'ubuntu' zur 'docker'-Gruppe hinzufügen
usermod -aG docker ubuntu


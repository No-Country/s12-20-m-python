#!/usr/bin/env bash
# exit on error
set -o errexit

pip install --upgrade pippip install --force-reinstall -U setuptools
pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py makemigrations land
python manage.py makemigrations payments
python manage.py makemigrations post
python manage.py makemigrations rewards
python manage.py makemigrations users
python manage.py migrate
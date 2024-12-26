# Dockerfile for Gateway Service
FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV PIP_NO_CACHE_DIR=yes

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

# Copy the application code
COPY . /app/

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# notification-service
# Notification Service  The **Notification Service** is responsible for sending notifications to users via multiple channels: - Email - SMS - Push Notifications  It integrates with services like `ordering-service` and `payment-service` to keep customers updated.  ## Features - Send notifications across 
# Notification Service

The **Notification Service** is responsible for sending notifications to users via multiple channels:
- Email
- SMS
- Push Notifications

It integrates with services like `ordering-service` and `payment-service` to keep customers updated.

## Features
- Send notifications across multiple channels
- Subscribe/unsubscribe to notification types
- Exposes REST API with Swagger auto-doc
- Modular design for plugging in 3rd-party providers (e.g., Twilio, SendGrid, Firebase)

## Tech Stack
- Python 3.11
- FastAPI
- Docker + Docker Compose

## Running Locally
```bash
docker-compose up --build

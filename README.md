
# Distributed-System

A minimalist clone of social media (like LinkedIn) that represents basic operations like adding posts along with images, user registration, and log in with proper authentication and authorization ensured with JWT Token.

Our target is to build a `monolithic` application first. Later we'll convert it into a `microservice` for scalability and other production-related purpose.

## Features

Currently, this version of the app supports the following features:

* Registering user
* Login user
* Authenticating User using JWT Token 
* Making Post along with `Image`
* Uploading & Showing images from `Minio`
* Notification for newly created posts
* Clicking each notification redirects to the particular post 

## TechStack 

* **FrontEnd**: ReactJS
* **BackEnd**: NodeJS
* **Database**: MongoDB
* **Object Storage**: Minio

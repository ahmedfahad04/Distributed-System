
# Distributed-System

A minimalist clone of social media (like LinkedIn) that represents basic operations like adding posts along with images, user registration, and log in with proper authentication and authorization ensured with JWT Token.

Our target is to build a ***monolithic*** application first. Later we'll convert it into a ***microservice***` for scalability and other production-related purpose.

## Features

Currently, this version of the app supports the following features:

* Registering user
* Login user
* Authenticating User using JWT Token 
* Making Post along with `Image`
* Uploading & Showing images from `Minio`
* Notification for newly created posts
* Redirecting to the particular post by clicking notifications
* Notification Mark as read feature enabled
* Notification Cleaner (clear already read notification in every 30 minutes)


## Run Locally

Clone the project

```bash
  git clone https://github.com/ahmedfahad04/Distributed-System.git
```

Go to the project directory

```bash
  cd Distributed-System
```

### Database

Install ***Minio*** in your linux machine by following this [guide](https://github.com/abj-paul/Decentralized-Social-Media/blob/main/backend/SETUP.org). Then start the Minio server

```bash
sudo ./minio server /minio
```

Install ***MongoDB*** in your local machine. Follow this [official Documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) to install it. Check your mongodb is running in background

```bash
sudo systemctl status mongod
```

If mongodb is not activated then run the following command 

```bash
sudo systemctl start mongod
```

### Application

Go to the ***frontend*** directory & run the command

```bash
  cd frontend
  npm start
```

Go to the ***backeend*** directory

```bash
  cd backend
  npm start
```

***CAUTION: Each time you run the `minio` server in your terminal a new IP address will be assigned. Therefore you have to change this IP in the code in two places. Firstly in the `frontend` folder make changes to the `Post.js` file where we have used the URL to show the image. Secondly in the `backend` folder's `imageUploadController.js' file where the endpoint of minio is defined.***

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** Minio, MongoDB

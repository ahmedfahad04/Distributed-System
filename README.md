# Distributed-System

A minimalist clone of social media (like LinkedIn) that represents basic operations like adding posts along with images, user registration, and log in with proper authentication and authorization ensured with JWT Token.

Our target is to build a **_monolithic_** application first. Later we'll convert it into a **_microservice_**` for scalability and other production-related purpose.

Checkout the branches for further update

- [**Main**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/main) (Current):
  The complete monolithic version of our Mini-Linkedin. Here the frontend and backend is organized separetly and you'll find the execution instruction
  [here](#how-to-run-locally).

- [**Micro - 1**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/micro1):
  In this branch, we initially divided our app into **3 different Services**. Then, we containerized them using **Dockerfile** and **Docker Compose** to ensure that your services are distinctly running perfectly.

- [**Final**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/final): In this branch, we finally deployed the **Frontend** in **Production** mode. That's why you'll see both a **Dockerfile** and **Docker Compose** in the root directory where this **Dockerfile** helps to connect our frontend with Nginx.

- [**Microservice**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/microservice):
  In this branch, instead of running 3 pairs of **Dockerfile** and **Docker Compose** for 3 services, we have used **One single docker-compose file** in root directory to host the entire app (both frontend & backend). However, the frontend is still not connected with **Nginx**. This branch contains the fina version of the **containerized application**

## Features

Currently, this version of the app supports the following features:

- Registering user
- Login user
- Authenticating User using JWT Token
- Making Post along with `Image`
- Uploading & Showing images from `Minio`
- Notification for newly created posts
- Redirecting to the particular post by clicking notifications
- Notification Mark as read feature enabled
- Notification Cleaner (clear already read notification in every 30 minutes)

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

Configure the **.env** folder that should contain the following field

```bash
ACCESS_TOKEN='************************'
REFRESH_TOKEN='************************'
ACCESS_TOKEN_EXPIRES='1h'
REFRESH_TOKEN_EXPIRES='2d'
```

Install **_Minio_** in your linux machine by following this [guide](https://linuxhint.com/installing_minio_ubuntu/). Then start the Minio server

```bash
sudo ./minio server /minio
```

Install **_MongoDB_** in your local machine. Follow this [official Documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) to install it. Check your mongodb is running in background

```bash
sudo systemctl status mongod
```

If mongodb is not activated then run the following command

```bash
sudo systemctl start mongod
```

### Application

Go to the **_frontend_** directory & run the command

```bash
  cd frontend
  npm i
  npm start
```

Go to the **_backeend_** directory

```bash
  cd backend
  npm i
  npm start
```

**_CAUTION_**

- Each time you run the `minio` server in your terminal a new IP address will be assigned. Therefore you have to change this IP in the code in two places. Firstly in the `frontend` folder make changes to the `Post.js` file where we have used the URL to show the image. Secondly in the `backend` folder's `imageUploadController.js' file where the endpoint of minio is defined.
- You need to UPDATE the `POLICIES` to `PUBLIC` so that the image URL can be accessed from anywhere. You have to update it from Minio Console that runs on web in this url `http://<url>/buckets/<bucket-name>/admin/summary`

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** Minio, MongoDB

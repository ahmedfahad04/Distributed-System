# Mini LinkedIn - Distributed System Project

🚀 Welcome to Mini LinkedIn, a minimalist clone of social media (like LinkedIn) that represents basic operations like adding posts along with images, user registration, and log in with proper authentication and authorization ensured with JWT Tokens.

Our target is to build a **monolithic** application first. Later we'll convert it into a **microservice** for scalability and other production-related purposes.

## Project Branches

- [**Main**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/main) (Current):
  The complete monolithic version of our Mini-Linkedin. Here the frontend and backend is organized separetly and you'll find the execution instruction
  [here](#how-to-run-locally).

- [**Micro - 1**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/micro1):
  In this branch, we initially divided our app into **3 different Services**. Then, we containerized them using **Dockerfile** and **Docker Compose** to ensure that your services are distinctly running perfectly.

- [**Microservice**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/microservice):
  In this branch, instead of running 3 pairs of **Dockerfile** and **Docker Compose** for 3 services, we have used **One single docker-compose file** in root directory to host the entire app (both frontend & backend). However, the frontend is still not connected with **Nginx**.

- [**Final**](https://github.com/ahmedfahad04/Mini-LinkedIn/tree/final): In this branch, we finally deployed the **Frontend** in **Production** mode. That's why you'll see both a **Dockerfile** and **Docker Compose** in the root directory where this **Dockerfile** helps to connect our frontend with Nginx.

## Key Features

This version of the app supports the following features:

✅ Registering user

✅ Login user

✅ Authenticating User using JWT Token

✅ Making Post along with `Image`

✅ Uploading & Showing images from `Minio`

✅ Notification for newly created posts

✅ Redirecting to the particular post by clicking notifications

✅ Notification Mark as read feature enabled

✅ Notification Cleaner (clear already read notifications every 30 minutes)

## How to Run Locally

1. Clone the project:

   ```bash
   git clone https://github.com/ahmedfahad04/Distributed-System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Distributed-System
   ```

### Database Setup

- Configure the **.env** folder with the following fields:

  ```bash
  ACCESS_TOKEN='************************'
  REFRESH_TOKEN='************************'
  ACCESS_TOKEN_EXPIRES='1h'
  REFRESH_TOKEN_EXPIRES='2d'
  ```

- Install and start **Minio**:

  - Follow this [guide](https://linuxhint.com/installing_minio_ubuntu/) to install Minio on your Linux machine.
  - Start the Minio server:

  ```bash
  sudo ./minio server /minio
  ```

- Install and start **MongoDB**:

  - Follow the official MongoDB [installation documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) to install MongoDB on your local machine.
  - Ensure MongoDB is running:

  ```bash
  sudo systemctl status mongod
  ```

  If MongoDB is not running, start it:

  ```bash
  sudo systemctl start mongod
  ```

### Running the Application

#### Frontend

- Navigate to the **frontend** directory:

  ```bash
  cd frontend
  ```

- Install dependencies:

  ```bash
  npm install
  ```

- Start the frontend app:

  ```bash
  npm start
  ```

#### Backend

- Navigate to the **backend** directory:

  ```bash
  cd backend
  ```

- Install dependencies:

  ```bash
  npm install
  ```

- Start the backend server:

  ```bash
  npm start
  ```

**CAUTION:**

- Each time you run the Minio server, a new IP address will be assigned. Therefore, you have to change this IP in the code in two places. Firstly, in the `frontend` folder, make changes to the `Post.js` file where we have used the URL to show the image. Secondly, in the `backend` folder's `imageUploadController.js` file where the endpoint of Minio is defined.

- You need to UPDATE the **POLICIES** to **PUBLIC** so that the image URL can be accessed from anywhere. You have to update it from the Minio Console that runs on the web at this URL: `http://<url>/buckets/<bucket-name>/admin/summary`

## Tech Stack

- **Client:** React, TailwindCSS
- **Server:** Node, Express
- **Database:** Minio, MongoDB

Enjoy exploring Mini LinkedIn! 😃👥🌟

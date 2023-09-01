## Issue #1:

Recreating 8dfaa2768e96_user_service_mongo_1 ... error

ERROR: for 8dfaa2768e96_user_service_mongo_1 Cannot start service mongo: driver failed programming external connectivity on endpoint user_service_mongo_1 (7bcfaa783dfd6739b10ac48267f39c164d2538ddde53e860cca678bc947736b6): Error starting userland proxy: listen tcp4 0.0.0.0:27017: bind: address already in use

ERROR: for mongo Cannot start service mongo: driver failed programming external connectivity on endpoint user_service_mongo_1 (7bcfaa783dfd6739b10ac48267f39c164d2538ddde53e860cca678bc947736b6): Error starting userland proxy: listen tcp4 0.0.0.0:27017: bind: address already in use
ERROR: Encountered errors while bringing up the project.

## Solve:

- Identify the process using port 27017

  $ `sudo lsof -i :27017`

- Stop the Conflicting Process

  $ `sudo service mongod stop`

**_Moral: We should never start the mongod (in our local machine using `sudo systemctl start mongod`) if we are using the docker. Because thus it will create the conflicting situation as stated above._**

**Point to be Noted -**

When you run your application using Docker Compose, each time you start the containers, they are isolated and run in their own environment. This includes the MongoDB container.

The data stored in the MongoDB container's database is typically stored inside a `Docker volume or a bind mount`. This means that the **_data is not stored directly inside the container filesystem but in a location outside the container_** that is persisted even if the container is stopped or removed.

However, if you haven't set up a volume or a bind mount to persist your MongoDB data, the data inside the MongoDB container will be erased in a while. This means that when you stop or remove the container, the data will be lost, and when you start a new container, it will start with a fresh database.

## Issue #2:

ERCONNECTION while Uploading image to Minio

## Solve:

- Check if the minio client is running on the terminal.
- If minio client is active, then check the ip address of minio in imageController.js file
- If needed, change the ip mentioned in the terminal
- MUST run `sudo docker-compose up --build` to sync the changes

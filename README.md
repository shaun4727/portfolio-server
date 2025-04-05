# Portfolio Server

Live Deployed Link:

## Technologies

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

# instruction to setup the project locally

This repository is currently public. To setup this project locally follow the instruction given below -

- clone the repository

- move into project directory

- create an .env which must contain fields that are defined in .env.example file

- npm install (run this command)

- npm run build ( run this command)

- npm start (to start the server locally)

- change the cors origin in src/app folder.

Now, project setup is done. Hit the api described below to get the expected result.

# API Endpoints

# Admin Routes

## 1.1 Login

**POST** `/api/auth/login`

**Description:** Use to login both tutor and student
**Request Body:**

```json
{
  "email": "shaun@gmail.com",
  "password": "somepassword"
}
```

## 1.2 Get refresh token

**POST** `/api/auth/refresh-token`

**Description:** Use to update auth token
**Request Body:**

```json
{
  "refreshToken": "refresh token"
}
```

## 2.1 Create project

**POST** `/api/project/create-project`

**Description:** Use to create project
**Request Body:**

```json
{
  "name": "project name",
  "overview": "project description",
  "link": "project deployed link",
  "thumbnail": "Array of one thumbnail image file to upload",
  "images": "Array of three image files to upload"
}
```

## 2.2 Update project

**PATCH** `/api/project/update-project`

**Description:** Use to update project
**Request Body:**

```json
{
  "name": "project name",
  "overview": "project description",
  "link": "project deployed link",
  "thumbnail": "Array of one thumbnail image file to upload --optional",
  "images": "Array of image files(at most 3. could be one) to upload --optional"
}
```

## 2.3 Get projects

**GET** `/api/project/project-list`

**Description:** Use to get project list

# User routes

## 3.1 Send Message

**POST** `/api/message/send-message`

**Description:** Use to send/store message in db

**Request Body:**

```json
{
  "fullname": "fullname of sender",
  "email": "email of sender",
  "message": "message body"
}
```

## 3.2 Get Messages

**GET** `/api/message/get-message`

**Description:** Use to get all messages

## 3.3 update Messages

**PATCH** `/api/message/update-message/:message_id'`

**Description:** Use to update message status. is it seen by admin or not?

## 3.4 Delete Messages

**DELETE** `/api/message/update-message/:message_id'`

**Description:** Use to update message status. is it deleted by admin or not from admin dashboard?

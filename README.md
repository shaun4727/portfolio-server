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
  "password": "password"
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

**Description:** Use to create project. only admin can use
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

**Description:** Use to update project. only admin can use
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

**Description:** Use to get project list. only admin can use

## 2.4 Get a single project

**GET** `/api/project/get-single-project/:projectId`

**Description:** returns detail of a single project

## 2.5 Get project list for user

**GET** `/api/project/project-list-for-user`

**Description:** return projects of a user

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

## 4.1 Create Hero section

**POST** `/api/home/hero-section-create`

**Description:** Use to create hero section. only admin can use

**Request Body:**

```json
{
  "stack": "frontend | backend | full-stack",
  "tagline": "tag line of hero section",
  "about_me": "description of user"
}
```

## 4.2 Update Hero Section

**PATCH** `/api/home/update-hero-section`
**Description** used to update hero section. only admin can use

**Request Body:**

```json
{
  "stack": "frontend | backend | full-stack",
  "tagline": "tag line of hero section",
  "about_me": "description of user"
}
```

## 4.3 Get all data of hero section

**GET** `/api/home/hero-section-list`
**Description** used to get data of hero section

## 4.4 Used to create skill

**POST** `/api/home/create-skill`
**Description** used to create skill section data. only admin can use

**Request Body:**

```json
{
  "name": "name of skill",
  "description": "description of that skill",
  "skill_icon": "link of the skill icon"
}
```

## 4.5 Used to update skill

**PATCH** `/api/home/update-skill-section`
**Description** used to update skill section data. only admin can use

**Request Body:**

```json
{
  "name": "name of skill",
  "description": "description of that skill",
  "skill_icon": "link of the skill icon"
}
```

## 4.6 Used to get data of all skills

**GET** `/api/home/update-section-list`
**Description** used to get list of skills

## 4.7 Used to create experience

**POST** `/api/home/create-experience`
**Description** used to create experience section data. only admin can use

**Request Body:**

```json
{
  "company_name": "name of company",
  "currently_working": "true | false",
  "designation": "designation",
  "start_date": "YYYY-MM-DD",
  "end_date": "YYYY-MM-DD",
  "responsibilities": "array of responsibilities"
}
```

## 4.8 Used to update experience

**PATCH** `/api/home/create-experience`
**Description** used to update experience section data. only admin can use

**Request Body:**

```json
{
  "company_name": "name of company",
  "currently_working": "true | false",
  "designation": "designation",
  "start_date": "YYYY-MM-DD",
  "end_date": "YYYY-MM-DD",
  "responsibilities": "array of responsibilities"
}
```

## 4.9 Used to get list of all experiences

**GET** `/api/home/create-experience`
**Description** used to get list of all experiences

## 4.10 Used to create blogs

**POST** `/api/home/create-blog`
**Description** used to create blog section data. only admin can use

**Request Body:**

```json
{
  "content": "blog post",
  "excerpt": "short description of post",
  "question": "question"
}
```

## 4.11 Used to update blogs

**PATCH** `/api/home/create-blog`
**Description** used to update blog section data. only admin can use

**Request Body:**

```json
{
  "content": "blog post",
  "excerpt": "short description of post",
  "question": "question"
}
```

## 4.11 Used to update blogs

**GET** `/api/home/create-blog`
**Description** used to get all the blogs section data.

```

# Changes in code

In app.ts, change origin as your client website address.
```

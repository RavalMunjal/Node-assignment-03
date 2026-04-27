# 📒 Notes Management REST API (Assignment 03)

👉 **Live API (Render):**  
https://node-assignment-03-x2r0.onrender.com/

👉 **Postman Documentation:**  
https://documenter.getpostman.com/view/50840903/2sBXqGrhGN

---

## 🚀 Project Overview

This project is a **complete Notes Management REST API** built using **Node.js, Express, and MongoDB (Mongoose)**.

This assignment is built **from scratch (fresh project)** and extends Assignment 02 by adding:

- 🔍 Search APIs using MongoDB `$regex`
- 🔗 Combined query endpoints
- 🚀 Master API (search + filter + sort + paginate)

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Postman (API Testing)  

---

## 📁 Folder Structure


notes-app/
│
├── src/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── note.model.js
│ ├── controllers/
│ │ └── note.controller.js
│ ├── routes/
│ │ └── note.routes.js
│ ├── middlewares/
│ ├── app.js
│ └── index.js
│
├── .env
├── .env.example
└── package.json


---

## 📌 Features

### ✅ CRUD Operations
- Create Note  
- Create Bulk Notes  
- Get All Notes  
- Get Note By ID  
- Replace Note (PUT)  
- Update Note (PATCH)  
- Delete Note  
- Delete Bulk Notes  

---

### 🔍 Search APIs
- Search by Title  
- Search by Content  
- Search by Title + Content  

---

### 🔗 Combined APIs
- Filter + Sort  
- Filter + Pagination  
- Sort + Pagination  
- Search + Filter  

---

### 🚀 Advanced APIs
- Search + Sort + Pagination  
- Filter + Sort + Pagination  

---

### 🧠 Master API
- One endpoint handling:
  - Search  
  - Filter  
  - Sort  
  - Pagination  

---

## 📊 API Endpoints

### CRUD
- `POST   /api/notes`
- `POST   /api/notes/bulk`
- `GET    /api/notes`
- `GET    /api/notes/:id`
- `PUT    /api/notes/:id`
- `PATCH  /api/notes/:id`
- `DELETE /api/notes/:id`
- `DELETE /api/notes/bulk`

---

### Search
- `GET /api/notes/search`
- `GET /api/notes/search/content`
- `GET /api/notes/search/all`

---

### Combined
- `GET /api/notes/filter-sort`
- `GET /api/notes/filter-paginate`
- `GET /api/notes/sort-paginate`
- `GET /api/notes/search-filter`

---

### Advanced
- `GET /api/notes/search-sort-paginate`
- `GET /api/notes/filter-sort-paginate`

---

# 📚 eLibrary Management System

This is a web-based **eLibrary Management System** built using **Django** (Python) and **MongoDB**. It allows users to browse, view, and manage books in an online digital library.

---

## 🚀 Features

- User login & authentication
- Browse available books
- View book details
- Categorized book pages (e.g., Discrete Math, Python, Data Structures, etc.)
- MongoDB integration for data storage
- Clean UI with HTML/CSS/JS templates

---

## 🛠️ Tech Stack

- **Backend:** Django (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MongoDB (hosted on MongoDB Atlas)

---

## 📁 Project Structure
elibrary/
<br>├── bbg/ # Main app
<br>│ ├── static/ # CSS and JS files
<br>│ ├── templates/ # HTML templates
<br>│ ├── utils/ # MongoDB utility functions
<br>│ ├── views.py # View logic
<br>│ ├── urls.py # URL routing
<br>│ └── ...
<br>├── elibrary/ # Project settings
<br>├── manage.py

## ⚙️ MongoDB Setup

This project uses **MongoDB Atlas** as the database. To connect your own MongoDB instance:

1. Create a `.env` file in the root directory.
2. Add your MongoDB URI:

```bash
# .env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/elibrary
```
Ensure your mongodb.py utility file reads from this environment variable.

##🧪 How to Run Locally

1. Clone this repository:
```bash
git clone https://github.com/Arni005/elibrary.git
cd elibrary
```
2. Create a virtual environment & activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Set up your .env file with MongoDB URI (as above).

5. Run the development server:
```bash
python manage.py runserver
```
## 🖼️ Homepage Screenshot

![Homepage](assets/homepage.jpeg)

## Authors
Frontend- @Kanika Gupta , @Dikshita Upadhyay (https://github.com/itsKanika , https://github.com/Dikshita-ims)
Backend- @Arni Johry , @Gargi Pathak (https://github.com/Arni005 , https://github.com/gargi-p3)
Database- @Himanshi (https://github.com/dynamicGurl)

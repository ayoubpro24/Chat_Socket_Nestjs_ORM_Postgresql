# Simple Real-Time Chat 💬

A human-friendly guide to running this NestJS, React, and Drizzle ORM chat application.

---

## 🏫 Project Overview
This is a full-stack chat app.
- **The Brain (Backend):** Built with NestJS.
- **The Database (Storage):** PostgreSQL managed by Drizzle ORM.
- **The Face (Frontend):** Built with React.

---

## 🛠️ Step 1: Database Setup
Before you touch the code, your database must be ready.
1. Open your PostgreSQL terminal or tool (like pgAdmin).
2. Create a new database called `chat_db`.
3. Open `backend/drizzle.config.ts` and update the connection URL with your Postgres **username** and **password**.

---

## 🧠 Step 2: Start the Backend
1. Open a terminal in the `backend` folder.
2. Run `npm install` to get all the tools.
3. RUN `run_docker.sh` to setup database postgre and run port to connect with drizzle orm.
4. Run `npx drizzle-kit push`. This tells Drizzle to create the tables in your database automatically.
5. Run `npm run start:dev` to turn on the server.



---

## 💻 Step 3: Start the Frontend
1. Open a **second** terminal in the `frontend` folder.
2. Run `npm install`.
3. Run `npm start`.
4. If it asks: *"Would you like to run the app on another port?"*, type **Y** and press **Enter**.



---

## 🚀 Step 4: How to Test
1. Open `http://localhost:3001` in your browser.
2. Open the same link in a **second** window or an incognito tab.
3. Type a message and send it—it appears in both windows instantly!
4. Refresh the page to see your history loaded from the database.

---

## 📊 Extra: View your Database
If you want to see your messages in a nice table (like Excel), go to the backend terminal and run:
`npx drizzle-kit studio`
# 🔐 Next.js Authentication (Credentials Provider)

A simple authentication system built with **Next.js (App Router)**, **NextAuth.js**, and **Tailwind CSS**.  
Supports **Sign Up → Login flow** using **NextAuth CredentialsProvider**.

---

## 🚀 Features

- ⚡ Next.js 13+ (App Router)
- 🔑 Authentication with **NextAuth.js**
- 📧 Login using credentials (email & password)
- 📝 Basic Sign Up form (switches to Login)
- 🎨 Styled with **Tailwind CSS**
- ✅ Session management with `useSession`
- 🔓 Logout functionality

## 📂 Project Structure

app/
├─ api/
│   └─ auth/
│       └─ […nextauth]/
│           └─ route.ts     # NextAuth config (Credentials Provider)
├─ page.tsx                 # Login / Signup UI

🔑 working
	•	Sign Up form → just switches to Login (can be extended to connect with a DB).
	•	Login form → calls signIn("credentials", { username, password }).
	•	NextAuth authorize() in route.ts validates the credentials and returns a user object.
	•	Session is handled by NextAuth and available via useSession().


🛠️ Tech Stack
	•	Next.js (App Router)
	•	NextAuth.js
	•	Tailwind CSS



📌 Future Improvements
	•	✅ Add a real database (Prisma + PostgreSQL/MongoDB)
	•	✅ Implement user registration API
	•	✅ Password hashing & validation
	•	✅ Redirect users to /dashboard after login

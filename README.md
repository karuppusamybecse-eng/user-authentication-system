# 🧑‍💻 User Authentication System

This is a **simple User Authentication System** built using **HTML, CSS, and JavaScript**.  
It allows users to **register, log in, and log out** — all handled in a **single HTML file** using `localStorage` for data persistence.


 # 🚀 Features

- ✅ User Registration (stores credentials in localStorage)  
- 🔐 User Login with validation  
- 👋 Personalized Welcome Page after login  
- 🚪 Logout functionality  
- 🎨 Modern and responsive gradient design  
- 💾 No backend required — purely client-side authentication  



 #Technologies Used

 Component : Technology 

 Frontend :HTML5, CSS3 
|Logic / Storage :|JavaScript/ LocalStorage 


## 📂 Project Structure


User-Authentication-System/
│
└── auth.html     # Single file containing HTML, CSS, and JS


## 🖥️ How It Works

### 1. Registration
- Users enter a **username** and **password**
- Data is stored locally using `localStorage`
- After registration, they are redirected to the **login page**

### 2. Login
- User credentials are validated against stored data
- If valid → the **welcome page** is displayed
- If invalid → an alert message appears

### 3. Logout
- Clears the session and redirects user back to the **login page**

---

## 💡 Code Explanation

### 📜 HTML
Defines three sections:
- **Register Page**
- **Login Page**
- **Welcome Page**

### 🎨 CSS
Applies a gradient background and responsive centered container using:
```css
background: linear-gradient(135deg, #6a11cb, #2575fc);
```

### ⚙️ JavaScript
Handles:
- Page switching (register/login/welcome)
- Data storage (`localStorage.setItem`)
- Authentication validation
- Logout redirection

---

## 🧠 Sample Functions

```js
function register() {
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;

  if (!username || !password) {
    alert("Please fill out all fields.");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration successful! You can now log in.");
  showLogin();
}
```

---

## 📸 Screenshots

| Register Page | Login Page | Welcome Page |

|![Register](https://via.placeholder.com/300x180?text=Register+Page) | ![Login](https://via.placeholder.com/300x180?text=Login+Page) | ![Welcome](https://via.placeholder.com/300x180?text=Welcome+Page) |

---

## 🧾 How to Run

1. Download or clone the repository:
   ```bash
   git clone https://github.com/<your-username>/user-authentication-system.git
   ```
2. Open the `index.html` file in your web browser.
3. Register → Login → View the Welcome Page.


## 🐞 Challenges & Solutions

| Challenge | Solution |

| Data persistence without a backend | Used `localStorage` to store credentials locally |
| Page navigation without multiple HTML files | Managed visibility using JavaScript functions |
| Designing a simple UI | Applied linear gradient background and minimal styling |

---

## 📘 Future Enhancements

- 🔑 Password encryption  
- 📬 Multi-user support  
- 🌐 Backend integration (Node.js + Express + MongoDB)  
- 🧩 Improved UI/UX with animations  

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

**Developed by:** [karuppusamy ]  
✨ *A simple front-end authentication system built for learning purposes.*

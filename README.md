# 📄 ResuméForge — Free Online Resume Builder

> Build a professional resume in minutes. Live preview, PDF download, no signup required.

Built for the **Digital Heroes** developer trial task.

---

## 🚀 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite + Tailwind CSS |
| Backend | Node.js + Express |
| PDF | html2pdf.js |
| Deploy | Vercel (frontend) + Vercel Serverless (API) |

---

## 📁 Project Structure

```
resume-builder/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── FormField.jsx
│   │   │   ├── FormPanel.jsx
│   │   │   ├── ResumePreview.jsx
│   │   │   └── ScoreWidget.jsx
│   │   ├── pages/
│   │   │   └── Builder.jsx
│   │   ├── hooks/
│   │   │   ├── useResumeData.js
│   │   │   └── useResumeScore.js
│   │   ├── utils/
│   │   │   └── defaultData.js
│   │   └── styles/
│   │       └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── server/                  # Node.js + Express API
    ├── src/
    │   └── index.js
    └── package.json
```

---

## ⚙️ Local Setup

### Frontend
```bash
cd client
npm install
npm run dev
# → http://localhost:5173
```

### Backend
```bash
cd server
npm install
npm run dev
# → http://localhost:3001
```

---

## 🌐 Deploy to Vercel

### Frontend
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `client`
4. Deploy → free `.vercel.app` URL ✅

### Backend (optional)
1. Import `server` as a separate Vercel project
2. Or use the API route inside `client/api/` for serverless

---

## ✅ Features

- ⚡ Live preview as you type
- 📊 Resume score with improvement tips
- 📄 One-click PDF download
- ➕ Dynamic add/remove for experience, education, projects
- 🏷️ Skills as interactive tags
- 📱 Responsive layout
- 🎨 Dark UI with clean white resume output

---

## 👤 Built By

**[Md Yusuf]** · [m6645409@email.com]

[🏆 Built for Digital Heroes](https://digitalheroesco.com)

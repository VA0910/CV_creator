<div align="center">
  <img src="./frontend/public/logo.svg" alt="HexCode Logo" width="200"/>

  # HexCode - Portfolio Generator

  *Transform your ideas into a beautiful, deployable portfolio using natural language*
</div>

---

## 🚀 Introduction

HexCode is an innovative AI-powered portfolio builder that turns your personal and professional details into a polished, deployable portfolio website. By filling out multiple prompt-driven text areas—such as About, Projects, Skills, and Contact—you can instantly generate a complete portfolio tailored to your vision.

Perfect for:
- Students or job seekers showcasing their work
- Professionals wanting a quick personal site
- Anyone who wants a deployable portfolio without coding

## ✨ Key Features

### Core Capabilities
- 🎨 **Intelligent Portfolio Design**  
  - Transform prompt entries for each section into a cohesive, responsive portfolio layout

- 🔐 **Secure Authentication**  
  - Google OAuth 2.0 integration  
  - Secure session management

- 👥 **Collaborative Editing**  
  - Real-time multi-user collaboration

### User Experience
- 🎯 **Intuitive Interface**  
  - Multiple text areas for different portfolio sections (About, Projects, Skills, Contact)  
  - Drag-and-Drop control for fine-tuning layout and element placement  
  - Live preview that updates as you edit

- 🎨 **Color Palette Customization**  
  - Personalize your portfolio’s look with a variety of theme options

### 🚀 Deployment & Export
- ⚡ **One-Click Deployment**  
  - Instantly publish your portfolio to a live URL

- 💾 **Exportable Code**  
  - Download full HTML, CSS, and JavaScript for self-hosting or further customization

---

> Start crafting your professional presence today with HexCode’s effortless, AI-driven portfolio generator!

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js
- **Animation**: framer-motion
- **Styling**: Tailwind CSS
- **Library**: SweetAlert2

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **AI Integration**: Anthropic Claude API

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)
- Google Cloud Platform account
- Anthropic API access
- open API access

### Step-by-Step Setup

1. **Clone the Repository**

   ```bash
   # Clone with default name
   git clone https://github.com/Vibha17/CV_creator
   ```
   ```bash
   # Or clone with custom name
   git clone https://github.com/Vibha17/CV_creator your-project-name
   ```

2. **Navigate to Project Directory**
   ```bash
   # For default name
   cd hexcode
   ```
   ```bash
   # For custom name
   cd your-project-name
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ./frontend
   npm install
   ```

4. **Install Backend Dependencies**
   ```bash
   cd ./backend
   npm install
   ```

5. **Configure Environment Variables**
   
   Create `.env` file in the backend directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Authentication
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   GOOGLE_CALLBACK_URL=your_callback_url
   
   # URLs
   CLIENT_URL=your_client_url
   
   # Security
   SECRETKEY=your_secret_key
   
   # Database
   MONGODB_URI=your_db_url
   
   # API Keys
   CLAUDE_API_KEY=your_anthropic_api_key
  
   ```
   Create `.env`file in the frontend directory:
   ```env
   
   # Backend configuration URLs
   REACT_APP_BACKEND_URL=your_backend_url


6. **Start Development Servers**
   ```bash
   # Start backend server
   cd backend
   npm start
   ```
   ```bash
   # In a new terminal, start frontend server
   cd frontend
   npm start

## Screenshot

### Landing Page
![image](https://i.ibb.co/wNTJz2gg/Screenshot-2025-02-03-012759.png)

### Prompt space
![image](https://i.ibb.co/YB9Q91DR/Screenshot-2025-02-03-013144.png)

### Explore Page
![image](https://i.ibb.co/whtqM7Vq/explore.jpg)

### Profile  Page
![image](https://i.ibb.co/HfMDQqH8/suck.jpg)


### Generated preview Page
![image](https://i.ibb.co/zhGn5mBv/preview.jpg)

### Generated codebase Page
![image](https://i.ibb.co/k6BM0Tyy/main-2.jpg)


## 🚀 How It Works

### 1️⃣ Log In & Get Started
🔐 Sign in via Google OAuth and click **Get Started** to begin.

### 2️⃣ Fill in Your Details
📝 Complete the form with your personal and professional information:
- **Name & Profile Picture**
- **About**
- **Skills**
- **Projects & Achievements**
- **Extracurriculars**

### 3️⃣ AI Prompt Generation
🤖 HexCode synthesizes your inputs into a final prompt, which serves as the blueprint for your portfolio.

### 4️⃣ Portfolio Generation
🏗️ Our AI builds a fully responsive, deployable portfolio website using the generated prompt.

### 5️⃣ Customize
✨ Fine-tune your portfolio with:
- **Drag-and-Drop Editor**
- **Color Palette Customization**
- **Real-time Preview**
- **Component Library**

### 6️⃣ Collaborate & Deploy
🤝 Work seamlessly with your team  
📱 Preview across devices  
🚀 Deploy with one click  
💾 Download the source code if needed

### 7️⃣ Explore & Innovate
🌍 Discover public portfolios, copy them, and make them your own.  
🛠️ Enhance, customize, and improve upon existing ideas.  
🚀 Collaborate and innovate to build something unique!


## Author 

-[@Vibha](https://github.com/Vibha17)

-[@Aryan](https://github.com/aryanthepain)

-[@Tejas](https://github.com/Vibha17)

-[@Vaishnavi](https://github.com/Vibha17)





---

<div align="center">
  Made with ❤️ by the HexCode Team
</div>

# 💰 Loan Calculator Application

<div align="center">
  <img src="./public/demo.gif" alt="Animated Demo" width="800"/>
  <br/>
  <div>
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>
    <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI"/>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  </div>
</div>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 **Interactive EMI Calculator** | Real-time calculation with smooth animations |
| 🌗 **Dark/Light Mode** | Beautiful theme toggle with transition effects |
| 💱 **Live Currency Conversion** | Supports 7 currencies with exchange rate API |
| 📱 **Fully Responsive** | Perfectly adapted for all devices |
| 📅 **Amortization Schedule** | Visual payment breakdown with scroll effects |

## 🚀 Live Demo

[![Vercel](https://img.shields.io/badge/View_Live_Demo-black?style=for-the-badge&logo=vercel&logoColor=white)](https://your-vercel-app-url.vercel.app)

## 🛠 Technologies Used

<div align="center">

| Frontend | Styling | API | Animation |
|----------|---------|-----|-----------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" title="React"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width="40" title="Material UI"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-original.svg" width="40" title="Axios"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" width="40" title="Framer Motion"/> |
| React Hooks | Material Icons | ExchangeRate-API | CSS Transitions |
| Context API | Custom Themes | RESTful | Lottie Animations |

</div>

## 🎨 Design Elements

```javascript
// Example of animation implementation
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your component */}
</motion.div>
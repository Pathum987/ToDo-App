# 📝 Get Things Done! - React Todo App

A modern, feature-rich todo application built with React and Vite.

[Live Project Preview](https://to-do-app-ruddy-rho-35.vercel.app/)

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with intuitive input field
- ✅ **Edit Tasks** - Inline editing with click-to-edit functionality
- ✅ **Delete Tasks** - Remove tasks with confirmation
- ✅ **View Tasks** - Clean, organized task display

### Other Features
- 🎯 **Task Completion** - Mark tasks as completed/incomplete with checkboxes
- 🔍 **Search & Filter** - Search tasks and filter by status (All/Active/Completed)
- 💾 **Local Persistence** - Tasks persist between browser sessions
- 🎨 **Smooth Animations** - Elegant transitions and micro-interactions
- 📊 **Task Statistics** - Real-time counters for total, completed, and pending tasks
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices

### Design Highlights
- 🎨 **Purple Gradient Background** - Beautiful gradient theme
- 🌙 **Dark Theme** - Modern dark UI with purple accents
- ✨ **Glassmorphism Effect** - Semi-transparent container with blur effects
- 🎯 **Intuitive Icons** - Clear edit and delete actions
- 🔄 **Visual Feedback** - Hover effects and state changes

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pathum987/ToDo-App
   cd react-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 5.0.0
- **Styling**: CSS-in-JS (Inline Styles)
- **CSS Framework**: Tailwind CSS 4.1.12
- **HTTP Client**: Axios 1.11.0
- **State Management**: React Hooks (useState, useEffect)
- **Persistence**: localStorage API
- **Icons**: Emoji-based icons

## 📁 Project Structure

```
todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx     # Task input form component
│   │   ├── TaskItem.jsx      # Individual task item component
│   │   └── TaskList.jsx      # Task list container component
│   ├── api.js                # API integration (JSONPlaceholder)
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles and animations
│   └── main.jsx              # Application entry point
├── README.md
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Usage

### Adding Tasks
1. Type your task in the "What is the task today?" input field
2. Click the "Add Task" button or press Enter
3. Your task will appear in the list below

### Managing Tasks
- **Complete**: Click the checkbox next to any task to mark it as completed
- **Edit**: Click the pencil (✏️) icon to edit a task inline
- **Delete**: Click the trash (🗑️) icon to remove a task
- **Search**: Use the search bar to find specific tasks
- **Filter**: Use the filter buttons to view All, Active, or Completed tasks

### Data Persistence
- All tasks are automatically saved to your browser's local storage
- Tasks will persist between browser sessions
- No account or server required

## 🔧 Configuration

### Environment Variables
No environment variables are required for this application.

### API Integration
The app includes optional API integration with JSONPlaceholder for demonstration purposes, but defaults to local storage for reliability.

## 🎨 Customization

### Changing Colors
The app uses a purple theme. To customize colors, edit the color values in:
- `src/App.jsx` - Main background gradient
- `src/components/TaskItem.jsx` - Task item colors
- `src/components/TaskInput.jsx` - Input and button colors

### Adding New Features
The application is built with modular components, making it easy to extend:
- Add new components in the `src/components/` folder
- Extend the main state in `src/App.jsx`
- Add new styles in `src/index.css`

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Common Issues

**Application won't start:**
- Ensure Node.js is installed (version 14+)
- Run `npm install` to install dependencies
- Check that port 5173 is available

**Tasks not persisting:**
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

**Styling issues:**
- Ensure Tailwind CSS is properly configured
- Check browser developer tools for console errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

⭐ **Star this repository if you found it helpful!** ⭐

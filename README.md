# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Party Menu Application

## Project Overview

The Party Menu Application is a React-based web application that allows users to browse party recipes, search and filter recipes, view detailed recipe information, and save their favorite recipes.

## Features

- User Login Authentication
- Protected Routes
- Browse Party Menu
- Search Recipes
- Filter by Category
- Filter by Veg / Non-Veg
- View Recipe Details
- Save Favorite Recipes
- View Saved Recipes
- Remove Saved Recipes
- Responsive User Interface
- Custom 404 Page

## Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Vite
- Local Storage

## Folder Structure

```
src/
│── components/
│── pages/
│── services/
│── styles/
│── utils/
│── data/
│── App.jsx
│── main.jsx
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project

```bash
cd party-menu-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Login Credentials

Use the credentials provided in the assessment API.

## Project Functionalities

- Secure Login
- Recipe Search
- Category Filtering
- Veg/Non-Veg Filtering
- Recipe Details
- Save Recipes
- Remove Saved Recipes
- Responsive Design

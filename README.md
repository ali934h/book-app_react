# Book App React

A feature-rich Book application built using React, Tailwind CSS, and Vite, enabling users to explore, search, and favorite books.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Features

- Book Listing: Browse a curated list of books.
- Search Functionality: Search books by title.
- Favorite Books: Mark books as favorites and view them in a separate section.
- Responsive UI: Utilizes Tailwind CSS for a responsive and modern user interface.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ali934h/book-app_react.git
cd book-app_react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the Vite development server.

## Usage

- Open your browser and navigate to `http://localhost:3610` (or the port displayed in your terminal).
- Use the interface to browse, search, and favorite books.

## Project Structure

The project is organized as follows:

```perl
book-app_react/
│
├── src/
│   ├── assets/
│   │   ├── css/                    # Tailwind CSS input and output files
│   │   │   ├── input.css
│   │   │   └── output.css
│   │   ├── imgs/                   # Images used in the application
│   │       ├── icons/
│   │           ├── favicon.svg
│   │           └── icons.svg
│   ├── components/                 # React components
│   │   ├── BookCard.jsx
│   │   ├── FavoriteCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ListBooks.jsx
│   ├── constants/                  # Constants used in the application
│   │   └── data.js
│   ├── App.jsx                     # Main App component
│   └── main.jsx                    # Main entry point for the application
│
├── index.html                      # Main HTML file
├── package.json                    # Node.js package configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── vite.config.js                  # Vite configuration
```

## Scripts

The following scripts are defined in package.json:

- `npm run dev:` Start the Vite development server.
- `npm run build:` Build the application for production.
- `npm run preview:` Preview the production build locally.
- `npm run tailwind:` Compile Tailwind CSS in watch mode.

## Dependencies

- Core:
  - `react:` JavaScript library for building user interfaces.
  - `react-dom:` Entry point of the DOM-related rendering paths.
  - `react-router-dom:` Declarative routing for React.
- Development:
  - `@vitejs/plugin-react:` Vite plugin to handle React projects.
  - `tailwindcss:` Utility-first CSS framework.
  - `vite:` Modern front-end tooling.
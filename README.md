# Rakuten TV Test

A React-based movie browsing application that allows users to explore and view movie details. The application features scrolling movie/content lists and detailed movie information pages.

## Features

- 🎬 Browse movies in horizontal scrollable lists
- 🔍 View detailed movie information
- 🎥 Watch movie trailers

## Tech Stack

- **React 18** - Frontend library
- **React Router v6** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **React Player** - Video player component (bitmovin-player)

## Project Structure

```
rtv-test/
├── src/
│   ├── components (Reusable)/
│   │   ├── Icons/
│   │   ├── ListArrow/
│   │   ├── MovieList/
│   │   └── VideoPlayer/
│   ├── pages/
│   │   ├── Home/ (Includes styling components)
│   │   └── Detail/
│   │   └── Video/
│   ├── store/ (Redux)
├── public/
└── package.json
```

## Key Components

### MovieList
- Horizontal scrollable list of movies
- Custom scroll arrows with gradient backgrounds (Non functional)
- Smooth scrolling behavior
- Responsive card design

### VideoPlayer
- video integration
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd rtv-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Workflow
1. Styling
   - Component-based styling with Styled Components

2. State Management
   - Redux Toolkit for global state
   - Async thunks for API calls


## Known Issues

- Video player may have issues due to invalid config key
- Scroll arrows may overlap with content on very small screens

## Future Improvements

1. Performance
   - Implement virtual scrolling for large lists (Pagination)
   - Add lazy loading for images
   - Optimize bundle size

2. Testing
   - Add more unit tests
   - Implement E2E testing

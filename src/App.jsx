import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import HomePage from './pages/Home/HomePage'; 
import MovieDetail from './pages/Detail/MovieDetail';
import VideoPage from './pages/Video/VideoPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App; 
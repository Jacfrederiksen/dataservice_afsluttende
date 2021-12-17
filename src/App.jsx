import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import More from './components/more/More';
import Header from './components/header/Header';
import News from './components/news/News';
import Weather from './components/weather/Weather';


function App() {
  return (
    <div className="App">
      <div className="sections">
        <Header />
        <Weather />
        <News />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900 selection:bg-[#1E40FF]/10 selection:text-[#1E40FF]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

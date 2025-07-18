import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import TDocsts from './pages/TDocs';
import ODocs from './pages/ODocs';
import Guestbook from './pages/Guestbook';


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#080E20] text-custom-white">
      {/* 1️⃣ fixed 头部：10vh */}
      <Header />
      {/* 2️⃣ 中间内容：70vh（flex-1 会拉伸，但我们需要把 fixed 的 30vh 空间排除）*/}
      <main className="flex-1 overflow-y-auto pt-[10vh] pb-[20vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<TDocsts />} />
          <Route path="/docs" element={<ODocs />} />
          <Route path="/guestbook" element={<Guestbook />} />
          {/* 其它路由按需添加 */}
        </Routes>
      </main>

      {/* 3️⃣ fixed 底部：20vh */}
      <Footer />
    </div>
  );
}

export default App;

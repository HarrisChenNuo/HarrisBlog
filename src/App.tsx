import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    /* 整页采用 flex 布局，Header 与 Footer 固定，Main 自动撑开滚动 */
    <div className="flex min-h-screen flex-col bg-[#080E20] text-white">
      <Header />
      {/* Main 区域：给 Header / Footer 预留空间后才开始滚动 */}
      <main className="flex-1 overflow-y-auto pt-20 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* 其它路由按需添加 */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

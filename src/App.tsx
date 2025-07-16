import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div >

      <Header />
      {/* —— 测试行 —— */}
      <p className="text-blue-100 text-3xl">🚀 就是我！如果你看得见这行蓝色文字，说明 Tailwind utilities 在这里生效了</p>

      {/* Header 4rem + Footer 6rem = 10rem，留够内边距避免内容被遮挡 */}
      <main>
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

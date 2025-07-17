import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 h-[20vh] bg-[#080E20] text-custom-gray">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 text-sm">
        {/* 左侧：Logo + 社媒（纵向） */}
        <div className="flex flex-col items-start justify-items-start h-full space-y-2">
          {/* Logo */}
          <img
            src={logo}
            alt="Harris Logo"
            className="h-20"
          />

          {/* 社媒图标 */}
          <div className="flex items-center space-x-4 text-lg">
            <a href="#" aria-label="X / Twitter" className="hover:text-white">X</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YT</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">IN</a>
          </div>
        </div>
        {/* —— 右侧统计 / 链接示例 —— */}
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="font-medium">Projects</p>
            <p className="text-right">1</p>
            <p className="text-right">2</p>
            <p className="text-right">3</p>
          </div>
          <div>
            <p className="font-medium">Technical Docs</p>
            <p className="text-right">1</p>
            <p className="text-right">2</p>
            <p className="text-right">3</p>
          </div>
          <div>
            <p className="font-medium">Other Docs</p>
            <p className="text-right">1</p>
            <p className="text-right">2</p>
            <p className="text-right">3</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

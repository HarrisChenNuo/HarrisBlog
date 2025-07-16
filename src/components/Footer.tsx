export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 h-20 bg-brand-dark bg-opacity-95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 text-sm">
        {/* 左侧 Logo & 社媒 */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">Harris</span>
          <a href="#" aria-label="X / Twitter">
            X
          </a>
          <a href="#" aria-label="Instagram">
            IG
          </a>
          <a href="#" aria-label="YouTube">
            YT
          </a>
          <a href="#" aria-label="LinkedIn">
            IN
          </a>
        </div>

        {/* 右侧统计 / 链接示例 */}
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

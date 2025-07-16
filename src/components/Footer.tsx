export default function Footer() {
  const columns = [
    { title: 'Projects', list: ['1', '2', '3'] },
    { title: 'Technical Docs', list: ['1', '2', '3'] },
    { title: 'Other Docs', list: ['1', '2', '3'] },
  ];

  return (
    <footer>
      <div>
        {/* 左侧 Logo & 社媒 */}
        <div>
          <span>Harris</span>
          <div>
            <a href="#" aria-label="X / Twitter">X</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>

        {/* 右侧 3 组统计 */}
        <div>
          {columns.map(col => (
            <div key={col.title}>
              <p>{col.title}</p>
              {col.list.map(v => (
                <span key={v}>{v}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center">
      {/* 背景视频 / 图片——这里只放占位，实际可用 <video> 或 CSS 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/mountain-neon.gif')" }}
      />

      {/* 堆栈遮罩层, 提升文字可读性 */}
      <div className="absolute inset-0 bg-black/50 " />

      <div className="relative flex max-w-3xl flex-col items-center px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
          Welcome to Harris Blog
        </h1>
        <p className="space-y-2 text-lg leading-relaxed">
          <span>Thank you for visiting!</span>
          <br />
          <span>
            I’m an IT engineer who graduated from the University of Auckland.
          </span>
          <br />
          <span>
            This website showcases my personal projects and serves as a
            collection of technical insights and practical documentation.
          </span>
          <br />
          <span>Feel free to leave comments and join the discussion!</span>
        </p>
      </div>
    </section>
  );
}

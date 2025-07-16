// src/pages/Home.tsx
export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center">
      {/* 1. 全屏视频背景 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/S1.mp4"    /* ← 放到 public 目录下，写相对路径 */
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 2. 文字内容：相对定位，自动盖在视频上 */}
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
  )
}

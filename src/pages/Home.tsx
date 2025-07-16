export default function Home() {
  return (
    <section style={{ minHeight: 'calc(100vh - 10rem)' }}>
      {/* 背景视频 */}
      <video
        src="/mountain-neon.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 半透明遮罩 */}
      <div />

      <div>
        <h1>Welcome to Harris Blog</h1>
        <p>
          Thank you for visiting!
          <br />
          I’m an IT engineer who graduated from the University of Auckland.
          <br />
          This website showcases my personal projects and serves as a collection
          of technical insights and practical documentation.
          <br />
          Feel free to leave comments and join the discussion!
        </p>
      </div>
    </section>
  );
}

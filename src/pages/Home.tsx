import { useRef, useState } from 'react'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showText, setShowText] = useState(false)
  const [textTriggered, setTextTriggered] = useState(false) // 确保只触发一次

  // 每次播放时间更新都会调用
  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (v && !textTriggered && v.duration - v.currentTime <= 0.6) {
      setShowText(true)
      setTextTriggered(true)
    }
  }

  // 视频结束后停在最后一帧
  const handleEnded = () => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = v.duration || v.currentTime
    }
  }

  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center">
      {/* 视频背景 */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/S1.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}  // 监听播放进度
        onEnded={handleEnded}           // 视频结束时停住
      />

      {/* 文字内容：提前1秒淡入 */}
      <div
        className={`relative flex max-w-3xl flex-col items-center px-4 text-center
          transition-opacity duration-1000
          ${showText ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
          Welcome to Harris Blog
        </h1>
        <p className="space-y-2 text-lg leading-relaxed">
          <span>Thank you for visiting!</span>
          <br />
          <span>I’m an IT engineer who graduated from the University of Auckland.</span>
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

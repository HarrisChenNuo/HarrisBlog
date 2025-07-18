import profilePic from '../assets/profile.jpg';

export default function Profile() {
  return (
    // 用 min-h-[70vh] 保证内容区至少占 70vh，不会再因为 py-12 额外撑高
    <section className="flex flex-col mx-auto max-w-5xl px-6 min-h-[70vh]">
      <hr className=" border-gray-600" />

      {/* 大标题 */}
      <h2 className="mb-8 text-4xl font-bold text-custom-gray">My Profile</h2>

      {/* 两栏布局：md 及以上三列 */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        {/* 左侧：头像（改成 items-start，让图片顶住上边，对齐标题） */}
        <div className="flex items-start justify-center">
          <img
            src={profilePic}
            alt="Harris Profile"
            // 把 h-64 提高到 h-full，让它更高一些；max-w-md 控制最大宽度
            className="h-full w-full max-w-xs rounded-lg object-cover"
          />
        </div>

        {/* 右侧（跨两列） */}
        <div className="md:col-span-2 text-custom-gray">
          <h3 className="text-2xl font-bold">Nuo Chen</h3>
          <p className="text-l font-semibold">
            From Stage to System—Always a Storyteller.
          </p>

          <p>I am a Multidisciplinary Creator and Engineer</p>
          <p>I studied Performing Arts at the Sichuan Conservatory of Music and later earned a Master of Information Technology at the University of Auckland. My journey into tech began in primary school, when I started teaching myself programming through a Chinese language-based tool called “E-language” (易语言), which laid the foundation for my passion and logical mindset.

            Bridging both the artistic and technical worlds, I bring creativity, resilience, and structure into everything I build. From directing commercial short films to developing AI-integrated cloud systems, I have hands-on experience in full-stack development, cloud deployment, and human-computer interaction research. Whether crafting characters or crafting code, I aim for clarity, consistency, and meaningful impact—with both precision and heart.</p>

          {/* —— 这里是新的按钮样式 —— */}
          <div className="mt-6">
            <button
              className="
                bg-[#4A4A4A]           /* 深灰色背景 */
                px-8 py-3              /* 水平 2rem，垂直 0.75rem */
                rounded-lg             /* 0.5rem 圆角 */
                text-custom-white             /* custom-white文字 */
                font-medium            /* 500 权重 */
                shadow-md              /* 轻微阴影 */
                hover:bg-[#6B6B6B]      /* 鼠标悬停变浅 */
                transition-colors      /* 平滑过渡 */
              "
            >
              Check my CV
            </button>
          </div>
        </div>
      </div>

      {/* 底部分割线：放到内容最低处即可 */}
      <hr className="mt-auto border-gray-600" />
    </section>
  );
}

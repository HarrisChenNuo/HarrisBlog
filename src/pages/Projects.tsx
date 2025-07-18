// src/pages/Projects.tsx
import placeholderImg from '../assets/placeholder.jpg'; // 替换为你的项目截图路径

interface ProjectItem {
  title: string;
  description: string;
  imgSrc?: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Project One',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    imgSrc: placeholderImg,
    link: '#',
  },
  {
    title: 'Project Two',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    imgSrc: placeholderImg,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col mx-auto max-w-5xl px-6 min-h-[70vh]">
      {/* 顶部分割线 */}
      <hr className="border-gray-600" />

      {/* 页面主标题 */}
      <h2 className="my-8 text-4xl font-bold text-custom-gray">My Projects</h2>

      {/* 项目列表：左右两列，md 以上水平排列 */}
      <div className="space-y-16">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* 偶数项：图片左、文字右 */}
              {isEven ? (
                <>
                  {/* 图片区 */}
                  <div>
                    <img
                      src={proj.imgSrc}
                      alt={proj.title}
                      className="w-full rounded-lg object-cover h-56 md:h-64"
                    />
                  </div>
                  {/* 文字区 */}
                  <div className="space-y-4 text-custom-gray">
                    <h3 className="text-2xl font-bold text-custom-gray">
                      {proj.title}
                    </h3>
                    <p className="leading-relaxed">{proj.description}</p>
                    <a
                      href={proj.link}
                      className="
                        inline-flex items-center justify-center
                        w-10 h-10 rounded-full bg-[#4A4A4A] text-custom-white
                        hover:bg-[#6B6B6B] transition
                      "
                      aria-label={`View ${proj.title}`}
                    >
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* 文字区 */}
                  <div className="space-y-4 text-custom-gray">
                    <h3 className="text-2xl font-bold text-custom-gray">
                      {proj.title}
                    </h3>
                    <p className="leading-relaxed">{proj.description}</p>
                    <a
                      href={proj.link}
                      className="
                        inline-flex items-center justify-center
                        w-10 h-10 rounded-full bg-[#4A4A4A] text-custom-white
                        hover:bg-[#6B6B6B] transition
                      "
                      aria-label={`View ${proj.title}`}
                    >
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                  {/* 图片区 */}
                  <div>
                    <img
                      src={proj.imgSrc}
                      alt={proj.title}
                      className="w-full rounded-lg object-cover h-56 md:h-64"
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* 底部分割线：固定到底部 */}
      <hr className="mt-auto border-gray-600" />
    </section>
  );
}

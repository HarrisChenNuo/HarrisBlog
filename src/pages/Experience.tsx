// src/pages/Experience.tsx
interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  // 如果你有真实的缩略图，可以在这里放 imgSrc 字段，并在下面替换占位图
  // imgSrc?: string;
}

const experiences: ExperienceItem[] = [
  { date: '2016 - 2018', title: 'Job Title 1', company: 'Company Name 1' },
  { date: '2016 - 2018', title: 'Job Title 2', company: 'Company Name 2' },
  { date: '2016 - 2018', title: 'Job Title 3', company: 'Company Name 3' },
  { date: '2016 - 2018', title: 'Job Title 4', company: 'Company Name 4' },
];

export default function Experience() {
  return (
    <section className="flex flex-col mx-auto max-w-5xl px-6 min-h-[70vh]">
      {/* 顶部分割线 */}
      <hr className="border-gray-600" />

      {/* 页面主标题 */}
      <h2 className="my-8 text-center text-4xl font-bold text-custom-gray">
        Work/Competition Experience
      </h2>

      {/* 四列卡片布局：小屏 1 列，sm 2 列，md 4 列 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-lg bg-white p-4 shadow"
          >
            {/* 时间 */}
            <p className="text-sm text-gray-500">{exp.date}</p>

            {/* 占位图，替换成 <img src={exp.imgSrc} /> 也可以 */}
            <div className="mt-2 mb-4 h-40 w-full rounded bg-gray-200"></div>

            {/* 职位 & 公司 */}
            <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
            <p className="mt-1 text-gray-500">{exp.company}</p>
          </div>
        ))}
      </div>

      {/* 底部分割线 */}
      <hr className="mt-auto border-gray-600" />
    </section>
  );
}

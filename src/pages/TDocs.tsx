// src/pages/TDocs.tsx
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface DocItem {
  title: string;
  description: string;
}

const docs: DocItem[] = [
  {
    title: 'Title 1',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
  },
  {
    title: 'Title 2',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
  },
  {
    title: 'Title 3',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
  },
  {
    title: 'Title 4',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
  },
  {
    title: 'Title 5',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
  },
  {
    title: 'Title 6',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
  },
];

export default function TDocs() {
  return (
    <section className="flex flex-col mx-auto max-w-5xl px-6 min-h-[70vh]">
      {/* 顶部分割线 */}
      <hr className="border-gray-600" />

      {/* 页面主标题 */}
      <h2 className="my-8 text-4xl font-bold text-custom-gray">
        Technical Documentation
      </h2>

      {/* 文档项目：小屏 1 列，sm 2 列，md 3 列 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {docs.map((doc, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <AiOutlineInfoCircle  className="h-6 w-6 flex-shrink-0 text-gray-400" />
            <div>
              <h3 className="text-lg font-bold text-custom-gray">{doc.title}</h3>
              <p className="mt-1 text-custom-gray leading-relaxed">
                {doc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 底部分割线：固定到底部 */}
      <hr className="mt-auto border-gray-600" />
    </section>
  );
}

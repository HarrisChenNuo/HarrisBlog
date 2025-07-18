// src/pages/Guestbook.tsx
export default function Guestbook() {
    return (
        <section className="flex flex-col mx-auto max-w-5xl px-6 min-h-[70vh]">
            {/* 顶部分割线 */}
            <hr className="border-gray-600" />

            {/* 页面主标题：缩小上下边距 */}
            <h2 className="mt-4 mb-2 text-3xl font-bold text-custom-gray">
                Guestbook
            </h2>

            {/* 欢迎文：加个底部 margin */}
            <p className="mb-4 text-custom-gray">
                Once again, I would like to welcome you to the site. If you wish to leave your message, please feel free to do so.
            </p>

            {/* 表单：减少垂直间距 */}
            <form className="flex flex-col space-y-4">
                {/* 名称 */}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <label className="w-full md:w-1/4 text-custom-gray mb-1 md:mb-0">
                        Your name:
                    </label>
                    <input
                        type="text"
                        placeholder="you@example.com"
                        className="w-full md:w-3/4 rounded bg-white px-4 py-1.5 text-gray-900 focus:outline-none"
                    />
                </div>

                {/* 邮箱 */}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <label className="w-full md:w-1/4 text-custom-gray mb-1 md:mb-0">
                        Your email:
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full md:w-3/4 rounded bg-white px-4 py-1.5 text-gray-900 focus:outline-none"
                    />
                </div>

                {/* 留言 */}
                <div className="flex flex-col">
                    <label className="mb-1 text-custom-gray">What do u wanna say:</label>
                    <textarea
                        placeholder="Value"
                        className="w-full rounded bg-white px-4 py-1.5 text-gray-900 h-32 focus:outline-none resize-vertical"
                    />
                </div>

                {/* 提交按钮：减少内部 padding */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-3 w-xl inline-block bg-[#4A4A4A] px-6 py-2 rounded-lg text-custom-white font-medium shadow-md hover:bg-[#6B6B6B] transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* 底部分割线：固定到底部 */}
            <hr className="mt-auto border-gray-600" />
        </section>
    );
}

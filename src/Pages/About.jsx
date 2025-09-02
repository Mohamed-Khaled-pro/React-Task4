import React from 'react'

export default function About() {
  return (
   <section dir='rtl'  className="text-white py-12 px-6 md:px-16 mt-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">حول الموقع</h2>
        <p className="text-3xl text-gray-300 mb-4 leading-relaxed">
          هذا الموقع هو تطبيق ويب بسيط تم تطويره باستخدام مكتبة React وبتصميم عصري باستخدام Tailwind CSS.
        </p>
        <p className="text-3xl text-gray-300 leading-relaxed">
          تم إنشاء هذا المشروع  لتحسين المهارات في تطوير الواجهات الأمامية
          واستكشاف إمكانيات React و Tailwind CSS في بناء تطبيقات ويب عصرية.
          تم استخدام مكتبة React Router Dom ف انشاء ال Pages وتم استخدام Nested Route
        </p>
      </div>
    </section>
  )
}

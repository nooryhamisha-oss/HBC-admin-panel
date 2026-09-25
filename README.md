# HBC Admin Panel (React + Tailwind)

این پروژه از HTML/CSS/JS ساده به React (با Vite) و Tailwind CSS تبدیل شده. ظاهر و رفتار صفحات همان چیزی‌ست که در نسخه اصلی بود؛ فقط ساختار کد به کامپوننت‌های React تبدیل شده.

## اجرا

```bash
npm install
npm run dev
```

بعد آدرس نمایش داده شده در ترمینال (معمولاً http://localhost:5173) را در مرورگر باز کنید.

## بیلد برای پروداکشن

```bash
npm run build
npm run preview
```

## ساختار

- `src/pages/` — هر صفحه یک کامپوننت جدا (Login, Dashboard, FindProgram, FindInstructor, Logout, About)
- `src/components/` — بخش‌های مشترک (Sidebar, Footer‌ها, نقشه ساختگی, تب‌های Map/List)
- کد فقط از `useState` و پراپ‌های ساده استفاده کرده، بدون انتزاع اضافی.

## نکته

فایل `about.html` در پروژه اصلی خالی (0 بایت) بود؛ در نسخه React هم فقط یک صفحه خیلی ساده جایگزینش شده.

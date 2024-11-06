// script.js

// العثور على جميع الروابط الخاصة بالصور
const imageLinks = document.querySelectorAll('.image-link');
// العثور على عنصر الصوت
const clickSound = document.getElementById('click-sound');

// إضافة حدث عند النقر على الصور لتشغيل الصوت
imageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // منع الانتقال الفوري
        clickSound.play(); // تشغيل الصوت
        // تأخير الانتقال إلى الرابط حتى يكتمل الصوت
        setTimeout(() => {
            window.location.href = link.href; // بعد تشغيل الصوت، انتقل إلى الرابط
        }, 500); // تأخير 500 مللي ثانية (نصف ثانية)
    });
});

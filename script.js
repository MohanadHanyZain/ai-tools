
        // JavaScript بسيط لتأثيرات إضافية أو تفاعلات (اختياري)
        // حالياً الكود يعتمد بشكل كبير على CSS للانيميشن
        document.addEventListener('DOMContentLoaded', () => {
            // يمكن إضافة منطق لـ "المزيد من الأقسام" أو تأثيرات تمرير
            // مثال: لتغيير لون الأزرار التفاعلية بشكل عشوائي (إذا أردت)
            const ctaButton = document.querySelector('.cta-button');
            const colors = ['var(--accent-neon-blue)', 'var(--accent-neon-purple)', 'var(--accent-neon-green)'];
            let currentColorIndex = 0;

            // يمكنك تفعيل هذا الكود إذا أردت تغيير لون الزر بشكل دوري
            /*
            setInterval(() => {
                currentColorIndex = (currentColorIndex + 1) % colors.length;
                ctaButton.style.backgroundColor = colors[currentColorIndex];
                ctaButton.style.boxShadow = `0 0 20px ${colors[currentColorIndex]}`;
            }, 5000);
            */
        });

        // تفعيل قائمة التنقل على الهواتف
        document.getElementById('navToggle').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
            this.innerHTML = document.getElementById('mainNav').classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('#mainNav a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mainNav').classList.remove('active');
                document.getElementById('navToggle').innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // إضافة تأثيرات عند التمرير
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(10, 10, 15, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.backgroundColor = 'rgba(10, 10, 15, 0.95)';
                header.style.boxShadow = 'none';
            }
        });
        
        // إضافة تأثيرات للكروت عند الظهور
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        // مراقبة العناصر لإضافة تأثيرات
        document.querySelectorAll('.tool-item, .category-card, .stat-item, .why-text, .newsletter').forEach(el => {
            observer.observe(el);
        });
        
        // إضافة تأثير لأيقونات الأدوات عند التمرير
        document.querySelectorAll('.tool-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.tool-icon i');
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.tool-icon i');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
        
        // إضافة تأثيرات للأيقونات بألوان مختلفة
        document.querySelectorAll('.tool-icon').forEach((icon, index) => {
            const colors = ['red', 'orange', 'yellow', 'blue', 'cyan', 'red'];
            if (index < colors.length) {
                icon.className = `tool-icon ${colors[index]}`;
            }
        });

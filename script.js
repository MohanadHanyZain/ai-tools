
        // كود JavaScript لتطبيق تأثيرات التفاعل والأنيميشن
        
        // تهيئة عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. التحكم في قائمة الهاتف المنسدلة
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('open');
                // تغيير الأيقونة
                const icon = menuToggle.querySelector('i');
                if (mobileMenu.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            
            // 2. تأثيرات الظهور عند التمرير (Scroll Animations)
            const scrollElements = document.querySelectorAll('.scroll-animation');
            const fadeElements = document.querySelectorAll('.fade-in');
            
            // تطبيق تأثير الظهور الأولي على العناصر
            fadeElements.forEach(el => {
                el.classList.add('appear');
            });
            
            // دالة التحقق من ظهور العناصر عند التمرير
            const elementInView = (el, dividend = 1) => {
                const elementTop = el.getBoundingClientRect().top;
                return (
                    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
                );
            };
            
            const displayScrollElement = (element) => {
                element.classList.add('active');
            };
            
            const handleScrollAnimation = () => {
                scrollElements.forEach((el) => {
                    if (elementInView(el, 1.25)) {
                        displayScrollElement(el);
                    }
                });
            };
            
            // استدعاء الدالة عند التمرير
            window.addEventListener('scroll', () => {
                handleScrollAnimation();
            });
            
            // تطبيق عند التحميل الأولي
            handleScrollAnimation();
            
            // 3. تأثيرات التوهج التفاعلية للبطاقات
            const cards = document.querySelectorAll('.scroll-animation.bg-gray-900');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // 4. تأثيرات الأزرار التفاعلية
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
            
            // 5. إضافة تأثير تتبع الماوس الخفيف
            document.addEventListener('mousemove', function(e) {
                const cursor = document.createElement('div');
                cursor.classList.add('cursor-effect');
                cursor.style.position = 'fixed';
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderRadius = '50%';
                cursor.style.background = 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)';
                cursor.style.pointerEvents = 'none';
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                cursor.style.zIndex = '9999';
                cursor.style.transform = 'translate(-50%, -50%)';
                
                document.body.appendChild(cursor);
                
                setTimeout(() => {
                    cursor.remove();
                }, 500);
            });
            
            // 6. تأثيرات النصوص المتوهجة عند التمرير عليها
            const neonTexts = document.querySelectorAll('.neon-text-purple, .neon-text-blue, .neon-text-green');
            neonTexts.forEach(text => {
                text.addEventListener('mouseenter', function() {
                    this.style.textShadow = '0 0 10px currentColor, 0 0 20px currentColor';
                });
                
                text.addEventListener('mouseleave', function() {
                    if (this.classList.contains('neon-text-purple')) {
                        this.style.textShadow = '0 0 5px var(--neon-purple), 0 0 10px var(--neon-purple)';
                    } else if (this.classList.contains('neon-text-blue')) {
                        this.style.textShadow = '0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue)';
                    } else if (this.classList.contains('neon-text-green')) {
                        this.style.textShadow = '0 0 5px var(--neon-green), 0 0 10px var(--neon-green)';
                    }
                });
            });
            
            // 7. إضافة صوت نقر خفيف للأزرار (اختياري)
            const clickSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    // محاكاة صوت النقر
                    clickSound.play().catch(e => console.log("لم يتم تحميل الصوت"));
                    
                    // تأثير ردة فعل مرئي
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });
            
            // 8. التحكم في الحركة السلسة للروابط الداخلية
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // إغلاق القائمة المنسدلة إذا كانت مفتوحة
                        if (mobileMenu.classList.contains('open')) {
                            mobileMenu.classList.remove('open');
                            const icon = menuToggle.querySelector('i');
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                });
            });
            
            // 9. تأثيرات عشوائية للخلفية لخلق ديناميكية
            function createFloatingOrbs() {
                const colors = ['rgba(168, 85, 247, 0.1)', 'rgba(59, 130, 246, 0.1)', 'rgba(16, 185, 129, 0.1)'];
                
                for (let i = 0; i < 5; i++) {
                    const orb = document.createElement('div');
                    orb.style.position = 'fixed';
                    orb.style.width = Math.random() * 100 + 50 + 'px';
                    orb.style.height = orb.style.width;
                    orb.style.borderRadius = '50%';
                    orb.style.background = colors[Math.floor(Math.random() * colors.length)];
                    orb.style.top = Math.random() * 100 + 'vh';
                    orb.style.left = Math.random() * 100 + 'vw';
                    orb.style.zIndex = '-1';
                    orb.style.filter = 'blur(40px)';
                    orb.style.opacity = '0.7';
                    
                    document.body.appendChild(orb);
                    
                    // حركة عائمة
                    let x = Math.random() * 100;
                    let y = Math.random() * 100;
                    let xDirection = Math.random() > 0.5 ? 1 : -1;
                    let yDirection = Math.random() > 0.5 ? 1 : -1;
                    
                    setInterval(() => {
                        x += 0.02 * xDirection;
                        y += 0.02 * yDirection;
                        
                        if (x > 100 || x < 0) xDirection *= -1;
                        if (y > 100 || y < 0) yDirection *= -1;
                        
                        orb.style.left = x + 'vw';
                        orb.style.top = y + 'vh';
                    }, 50);
                }
            }
            
            // تفعيل تأثير الأجرام العائمة
            createFloatingOrbs();
        });

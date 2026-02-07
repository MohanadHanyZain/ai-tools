// إدارة القائمة المتنقلة
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (mainMenu.style.display === 'flex') {
                mainMenu.style.display = 'none';
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                mainMenu.style.display = 'flex';
                mainMenu.style.flexDirection = 'column';
                mainMenu.style.position = 'absolute';
                mainMenu.style.top = '70px';
                mainMenu.style.right = '0';
                mainMenu.style.backgroundColor = 'var(--dark-card)';
                mainMenu.style.width = '100%';
                mainMenu.style.padding = '20px';
                mainMenu.style.borderRadius = '0 0 12px 12px';
                mainMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                mainMenu.style.gap = '20px';
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && window.innerWidth <= 768) {
                mainMenu.style.display = 'none';
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // إضافة مستمعي الأحداث لبطاقات الأقسام في صفحة الأقسام
    setTimeout(() => {
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const categoryId = this.dataset.categoryId;
                localStorage.setItem('selectedCategory', categoryId);
                window.location.href = 'subcategory.html';
            });
        });
    }, 100);
});
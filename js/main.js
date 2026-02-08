// تحميل الأقسام الرئيسية في الصفحة الرئيسية
function loadMainCategories() {
    const container = document.getElementById('main-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    categoriesData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.categoryId = category.id;
        
        card.innerHTML = `
            <div class="card-icon" style="color: ${category.color};">
                <i class="${category.icon}"></i>
            </div>
            <div class="card-content">
                <h3 class="card-title">
                    ${category.name}
                    <span class="card-title-en">(${category.enName})</span>
                </h3>
                <p class="card-description">${category.description}</p>
                <div class="card-tools">
                    <span class="tool-tag">${category.subcategories.length} قسم فرعي</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            localStorage.setItem('selectedCategory', category.id);
            window.location.href = 'subcategory.html';
        });
        
        container.appendChild(card);
    });
}

// تحميل جميع الأقسام في صفحة الأقسام
function loadAllCategories() {
    const container = document.getElementById('all-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    categoriesData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'card category-card';
        card.dataset.categoryId = category.id;
        
        card.innerHTML = `
            <div class="card-icon" style="color: ${category.color};">
                <i class="${category.icon}"></i>
            </div>
            <div class="card-content">
                <h3 class="card-title">
                    ${category.name}
                    <span class="card-title-en">(${category.enName})</span>
                </h3>
                <p class="card-description">${category.description}</p>
                <div class="card-tools">
                    <span class="tool-tag">${category.subcategories.length} قسم فرعي</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// تحميل الأقسام الفرعية
function loadSubcategories(categoryId) {
    const category = getCategoryById(categoryId);
    if (!category) {
        window.location.href = 'category.html';
        return;
    }
    
    // تحديث عنوان الصفحة
    const titleElement = document.getElementById('category-title');
    const descElement = document.getElementById('category-description');
    
    if (titleElement) titleElement.textContent = category.name;
    if (descElement) descElement.textContent = category.description;
    
    // تحميل الأقسام الفرعية
    const container = document.getElementById('subcategories-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    category.subcategories.forEach((sub, index) => {
        const card = document.createElement('div');
        card.className = 'subcategory-card';
        
        card.innerHTML = `
            <h3>
                <i class="${category.icon}" style="color: ${category.color};"></i>
                ${sub}
            </h3>
            <p>اكتشف أفضل أدوات الذكاء الاصطناعي في مجال ${sub}</p>
        `;
        
        card.addEventListener('click', () => {
            localStorage.setItem('selectedSubcategory', sub);
            window.location.href = 'tools.html';
        });
        
        container.appendChild(card);
    });
}

// تحميل الأدوات من ملف JSON
async function loadTools(categoryId, subcategory) {
    const category = getCategoryById(categoryId);
    if (!category) {
        window.location.href = 'category.html';
        return;
    }
    
    // تحديث عنوان الصفحة
    const titleElement = document.getElementById('subcategory-title');
    const descElement = document.getElementById('subcategory-description');
    
    if (titleElement) titleElement.textContent = subcategory;
    if (descElement) descElement.textContent = `أدوات الذكاء الاصطناعي المتخصصة في ${subcategory}`;
    
    // إظهار مؤشر التحميل
    const container = document.getElementById('tools-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading-spinner" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"></i>
            <p style="color: #cbd5e1; font-size: 1.2rem;">جاري تحميل الأدوات...</p>
        </div>
    `;
    
    try {
        // جلب الأدوات من API
        const tools = await dataAPI.getToolsByCategoryAndSubcategory(category.name, subcategory);
        
        // عرض الأدوات
        displayTools(tools, container);
        
    } catch (error) {
        console.error('Error loading tools:', error);
        
        container.innerHTML = `
            <div class="error-message" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ef4444; margin-bottom: 20px;"></i>
                <h3 style="font-size: 1.8rem; margin-bottom: 15px;">حدث خطأ في تحميل الأدوات</h3>
                <p style="color: #cbd5e1;">يرجى المحاولة مرة أخرى لاحقاً</p>
                <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background-color: var(--primary-color); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                    إعادة المحاولة
                </button>
            </div>
        `;
    }
}

// عرض الأدوات في الصفحة
function displayTools(tools, container) {
    container.innerHTML = '';
    
    if (tools.length === 0) {
        container.innerHTML = `
            <div class="no-tools">
                <i class="fas fa-tools"></i>
                <h3>لا توجد أدوات متاحة حالياً</h3>
                <p>سيتم إضافة أدوات لهذا القسم قريباً</p>
            </div>
        `;
        return;
    }
    
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        
        // تحديد نوع التاج (مجاني/مدفوع)
        const tagsHtml = tool.tags.map(tag => {
            if (tag === 'مجاني') {
                return `<span class="tool-tag free">${tag}</span>`;
            } else if (tag === 'مدفوع') {
                return `<span class="tool-tag paid">${tag}</span>`;
            } else if (tag === 'مفتوح المصدر') {
                return `<span class="tool-tag open-source">${tag}</span>`;
            } else {
                return `<span class="tool-tag">${tag}</span>`;
            }
        }).join('');
        
        // إضافة النجوم للتقييم إذا كان موجوداً
        let ratingHtml = '';
        if (tool.rating) {
            ratingHtml = `
                <div class="tool-rating" style="display: flex; align-items: center; gap: 5px; margin-top: 10px;">
                    <span style="color: #fbbf24;">
                        ${getStarRating(tool.rating)}
                    </span>
                    <span style="color: #cbd5e1; font-size: 0.9rem;">(${tool.rating})</span>
                </div>
            `;
        }
        
        // إضافة السعر إذا كان موجوداً
        let priceHtml = '';
        if (tool.price) {
            let priceText = '';
            let priceClass = '';
            
            switch(tool.price) {
                case 'free':
                    priceText = 'مجاني تماماً';
                    priceClass = 'free-price';
                    break;
                case 'freemium':
                    priceText = 'نسخة مجانية ومميزات إضافية مدفوعة';
                    priceClass = 'freemium-price';
                    break;
                case 'paid':
                    priceText = 'مدفوع';
                    priceClass = 'paid-price';
                    break;
            }
            
            priceHtml = `
                <div class="tool-price ${priceClass}" style="margin-top: 10px; padding: 5px 10px; border-radius: 6px; font-size: 0.9rem; display: inline-block;">
                    ${priceText}
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div>
                    <h3 class="tool-title">${tool.name}</h3>
                    <div class="tool-details">
                        ${tagsHtml}
                    </div>
                    ${ratingHtml}
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            ${priceHtml}
            <a href="redirect.html?url=${encodeURIComponent(tool.url)}" target="_blank" class="tool-link">
                <i class="fas fa-external-link-alt"></i> زيارة الموقع
            </a>
        `;
        
        container.appendChild(card);
    });
}

// دالة لتحويل التقييم إلى نجوم
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // نجوم كاملة
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    // نصف نجمة
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // نجوم فارغة
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

// إعداد قائمة الفوتر
function setupFooterCategories() {
    const container = document.getElementById('footer-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    categoriesData.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="subcategory.html" data-category-id="${category.id}" class="footer-category-link">${category.name}</a>`;
        container.appendChild(li);
    });
    
    // إضافة مستمعي الأحداث لروابط الفوتر
    document.querySelectorAll('.footer-category-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = this.dataset.categoryId;
            localStorage.setItem('selectedCategory', categoryId);
            window.location.href = 'subcategory.html';
        });
    });
}
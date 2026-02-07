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

// تحميل الأدوات
function loadTools(categoryId, subcategory) {
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
    
    // تحميل الأدوات
    const container = document.getElementById('tools-container');
    if (!container) return;
    
    const tools = getToolsByCategoryAndSubcategory(category.name, subcategory);
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
            } else {
                return `<span class="tool-tag">${tag}</span>`;
            }
        }).join('');
        
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
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <a href="${tool.url}" target="_blank" class="tool-link">
                <i class="fas fa-external-link-alt"></i> زيارة الموقع
            </a>
        `;
        
        container.appendChild(card);
    });
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
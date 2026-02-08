// بيانات الأقسام الرئيسية والفرعية فقط
const categoriesData = [
    {
        id: 1,
        name: "النصوص والكتابة",
        enName: "Text & Writing",
        icon: "fas fa-pen-nib",
        color: "#6d28d9",
        description: "أدوات الذكاء الاصطناعي للكتابة بمختلف أنواعها وأغراضها - من التسويق إلى التدقيق اللغوي",
        subcategories: [
            "كتابة المحتوى التسويقي (Copywriting)",
            "تحسين محركات البحث (SEO Tools)",
            "التلخيص وإعادة الصياغة",
            "التدقيق اللغوي والترجمة",
            "الدردشة والبحث (Chatbots)"
        ]
    },
    {
        id: 2,
        name: "الصور والتصميم",
        enName: "Image & Design",
        icon: "fas fa-palette",
        color: "#10b981",
        description: "توليد وتحرير الصور والتصميمات باستخدام الذكاء الاصطناعي لمختلف الأغراض",
        subcategories: [
            "توليد الصور من النص (Art Generation)",
            "تحرير الصور وتعديلها",
            "تصميم واجهات المستخدم (UI/UX)",
            "تصميم الشعارات والهوية البصرية"
        ]
    },
    {
        id: 3,
        name: "الفيديو والأنيميشن",
        enName: "Video & Animation",
        icon: "fas fa-video",
        color: "#f59e0b",
        description: "تقنيات الذكاء الاصطناعي لإنشاء وتحرير الفيديو والرسوم المتحركة",
        subcategories: [
            "تحويل النص إلى فيديو",
            "المذيع الافتراضي (Avatars)",
            "تحرير الفيديو الآلي",
            "تحسين جودة الفيديو وتلوينه"
        ]
    },
    {
        id: 4,
        name: "الصوت والموسيقى",
        enName: "Audio & Music",
        icon: "fas fa-music",
        color: "#ef4444",
        description: "أدوات توليد وتحرير الصوت والموسيقى باستخدام الذكاء الاصطناعي",
        subcategories: [
            "تحويل النص إلى صوت (TTS)",
            "توليد الموسيقى والأغاني",
            "إزالة الضجيج وتنقية الصوت",
            "الاستنساخ الصوتي (Voice Cloning)"
        ]
    },
    {
        id: 5,
        name: "البرمجة والتقنية",
        enName: "Coding & Tech",
        icon: "fas fa-code",
        color: "#3b82f6",
        description: "مساعدي الذكاء الاصطناعي للبرمجة، بناء التطبيقات، وتحليل البيانات",
        subcategories: [
            "مساعد البرمجة (Coding Assistants)",
            "بناء التطبيقات والمواقع (No-Code)",
            "تحليل البيانات"
        ]
    },
    {
        id: 6,
        name: "الأتمتة والذكاء الخارق",
        enName: "Automation & Agents",
        icon: "fas fa-cogs",
        color: "#8b5cf6",
        description: "روبوتات وأدوات الأتمتة الذكية التي تعمل كوكلاء افتراضيين أذكياء",
        subcategories: [
            "وكلاء الذكاء الاصطناعي (AI Agents)",
            "ربط التطبيقات",
            "استخراج البيانات (Scraping)"
        ]
    },
    {
        id: 7,
        name: "الحياة والإنتاجية",
        enName: "Life & Productivity",
        icon: "fas fa-chart-line",
        color: "#06b6d4",
        description: "تطبيقات الذكاء الاصطناعي لتعزيز الإنتاجية وتحسين جودة الحياة",
        subcategories: [
            "إدارة الاجتماعات",
            "تنظيم الوقت والملاحظات",
            "البحث العلمي والأكاديمي",
            "البريد الإلكتروني الذكي"
        ]
    },
    {
        id: 8,
        name: "مهندس الأوامر",
        enName: "Prompt Engineering",
        icon: "fas fa-terminal",
        color: "#84cc16",
        description: "تقنيات وأدوات صياغة الأوامر الفعالة للذكاء الاصطناعي",
        subcategories: [
            "سوق الأوامر (Prompt Marketplaces)",
            "أدوات تحسين الأوامر",
            "مكتبات الأوامر الجاهزة"
        ]
    }
];

// دالة للبحث عن قسم بواسطة الـ ID
function getCategoryById(id) {
    return categoriesData.find(category => category.id == id);
}

// جعل البيانات متاحة عالمياً
if (typeof window !== 'undefined') {
    window.categoriesData = categoriesData;
    window.getCategoryById = getCategoryById;
}

// تصدير البيانات إذا كنا في بيئة تدعم ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categoriesData, getCategoryById };
}
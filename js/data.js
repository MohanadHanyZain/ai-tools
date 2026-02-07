// بيانات الأقسام الرئيسية والفرعية
const categoriesData = [
    {
        id: 1,
        name: "النصوص والكتابة",
        enName: "Writing & Content",
        icon: "fas fa-pen-nib",
        color: "#6d28d9",
        description: "أدوات الذكاء الاصطناعي للمساعدة في كتابة المحتوى، التدقيق اللغوي، الترجمة، وإنشاء النصوص الإبداعية.",
        subcategories: [
            "كتابة المقالات والمنشورات",
            "المساعد الدراسي والتلخيص",
            "التصحيح والتدقيق اللغوي",
            "إعادة الصياغة والترجمة",
            "الإعلانات والتسويق (SEO)"
        ]
    },
    {
        id: 2,
        name: "الصور والتصميم",
        enName: "Images & Design",
        icon: "fas fa-palette",
        color: "#10b981",
        description: "منصات توليد الصور وتحريرها باستخدام الذكاء الاصطناعي، وإنشاء التصاميم الجرافيكية المذهلة.",
        subcategories: [
            "صناعة الصور من الخيال",
            "تحسين وترميم الصور",
            "حذف وتغيير الخلفيات",
            "تصميم الشعارات والهويات",
            "التصميم الداخلي والمعماري"
        ]
    },
    {
        id: 3,
        name: "الفيديو والأنيميشن",
        enName: "Video & Animation",
        icon: "fas fa-video",
        color: "#f59e0b",
        description: "تقنيات الذكاء الاصطناعي لإنشاء وتحرير الفيديو، إنتاج الأنيميشن، وتوليد الأفكار الإبداعية.",
        subcategories: [
            "توليد فيديو من نص",
            "المتحدث الافتراضي (Avatars)",
            "المونتاج الذكي والترجمة",
            "تحسين جودة الفيديو"
        ]
    },
    {
        id: 4,
        name: "الصوت والموسيقى",
        enName: "Audio & Music",
        icon: "fas fa-music",
        color: "#ef4444",
        description: "أدوات توليد وتحرير الصوت باستخدام الذكاء الاصطناعي، وإنشاء الموسيقى وتعديل المؤثرات الصوتية.",
        subcategories: [
            "تحويل النص إلى صوت",
            "استنساخ وتغيير الأصوات",
            "صناعة الموسيقى والألحان",
            "تنقية وعزل الصوت"
        ]
    },
    {
        id: 5,
        name: "الأتمتة والذكاء الخارق",
        enName: "Automation & Agents",
        icon: "fas fa-cogs",
        color: "#8b5cf6",
        description: "روبوتات وأدوات الأتمتة الذكية التي تنفذ المهام المتكررة وتعمل كمساعدين افتراضيين أذكياء.",
        subcategories: [
            "المساعد الذكي (AI Agents)",
            "ربط التطبيقات (Workflow)",
            "جمع البيانات تلقائياً",
            "الرد الآلي الذكي"
        ]
    },
    {
        id: 6,
        name: "البرمجة والتقنية",
        enName: "Coding & Dev",
        icon: "fas fa-code",
        color: "#3b82f6",
        description: "مساعدي الذكاء الاصطناعي للبرمجة، توليد الشفرات، تصحيح الأخطاء، وشرح المفاهيم التقنية المعقدة.",
        subcategories: [
            "كتابة وشرح الكود",
            "بناء المواقع والتطبيقات",
            "تحليل البيانات والملفات"
        ]
    },
    {
        id: 7,
        name: "الحياة والإنتاجية",
        enName: "Life & Productivity",
        icon: "fas fa-chart-line",
        color: "#06b6d4",
        description: "تطبيقات الذكاء الاصطناعي لتعزيز الإنتاجية، إدارة الوقت، التخطيط، وتحسين جودة الحياة اليومية.",
        subcategories: [
            "مساعد الاجتماعات والملاحظات",
            "البحث العلمي الموثق",
            "السيرة الذاتية والوظائف",
            "تعلم اللغات والمهارات"
        ]
    },
    {
        id: 8,
        name: "مهندس الأوامر",
        enName: "Prompt Engineering",
        icon: "fas fa-terminal",
        color: "#84cc16",
        description: "تقنيات وأدوات صياغة الأوامر الفعالة للذكاء الاصطناعي لتحقيق أفضل النتائج من النماذج اللغوية.",
        subcategories: [
            "مكتبة الأوامر الجاهزة",
            "صناعة الأوامر الخاصة"
        ]
    }
];

// بيانات الأدوات (يمكن استبدالها بملف JSON منفصل)
const toolsData = [
    {
        id: 1,
        name: "ChatGPT",
        description: "نموذج لغوي متقدم يمكنه كتابة النصوص بجودة عالية، الإجابة على الأسئلة، المساعدة في البرمجة وغيرها.",
        category: "النصوص والكتابة",
        subcategory: "كتابة المقالات والمنشورات",
        url: "https://chat.openai.com",
        tags: ["مجاني", "مدفوع", "كتابة", "برمجة"],
        icon: "fas fa-comment-alt"
    },
    {
        id: 2,
        name: "Jasper AI",
        description: "أداة متخصصة في كتابة محتوى التسويق، الإعلانات، المدونات والمقالات بشكل احترافي.",
        category: "النصوص والكتابة",
        subcategory: "الإعلانات والتسويق (SEO)",
        url: "https://www.jasper.ai",
        tags: ["مدفوع", "تسويق", "SEO"],
        icon: "fas fa-shopping-cart"
    },
    {
        id: 3,
        name: "Grammarly",
        description: "أداة ذكية للتدقيق اللغوي والتحسين الأسلوبي للنصوص الإنجليزية.",
        category: "النصوص والكتابة",
        subcategory: "التصحيح والتدقيق اللغوي",
        url: "https://www.grammarly.com",
        tags: ["مجاني", "مدفوع", "تدقيق", "لغة"],
        icon: "fas fa-spell-check"
    },
    {
        id: 4,
        name: "Midjourney",
        description: "نموذج توليد صور من النصوص بأسلوب فني عالي الجودة ومتنوع.",
        category: "الصور والتصميم",
        subcategory: "صناعة الصور من الخيال",
        url: "https://www.midjourney.com",
        tags: ["مدفوع", "صور", "فن", "توليد"],
        icon: "fas fa-paint-brush"
    },
    {
        id: 5,
        name: "DALL-E",
        description: "نموذج ذكاء اصطناعي من OpenAI لتوليد الصور من الوصف النصي.",
        category: "الصور والتصميم",
        subcategory: "صناعة الصور من الخيال",
        url: "https://labs.openai.com",
        tags: ["مدفوع", "صور", "OpenAI"],
        icon: "fas fa-image"
    },
    {
        id: 6,
        name: "Remove.bg",
        description: "أداة ذكية لإزالة خلفيات الصور تلقائياً بدقة عالية.",
        category: "الصور والتصميم",
        subcategory: "حذف وتغيير الخلفيات",
        url: "https://www.remove.bg",
        tags: ["مجاني", "مدفوع", "خلفيات", "تحرير"],
        icon: "fas fa-object-ungroup"
    },
    {
        id: 7,
        name: "Runway ML",
        description: "منصة متكاملة لإنشاء وتحرير الفيديو باستخدام الذكاء الاصطناعي.",
        category: "الفيديو والأنيميشن",
        subcategory: "المونتاج الذكي والترجمة",
        url: "https://runwayml.com",
        tags: ["مدفوع", "فيديو", "مونتاج", "أنيميشن"],
        icon: "fas fa-film"
    },
    {
        id: 8,
        name: "Synthesia",
        description: "منصة لإنشاء فيديوهات بمتحدثين افتراضيين من النصوص.",
        category: "الفيديو والأنيميشن",
        subcategory: "المتحدث الافتراضي (Avatars)",
        url: "https://www.synthesia.io",
        tags: ["مدفوع", "أفاتار", "فيديو", "نص إلى فيديو"],
        icon: "fas fa-user-tie"
    },
    {
        id: 9,
        name: "Murf AI",
        description: "تحويل النص إلى كلام طبيعي بأصوات واقعية ومتنوعة.",
        category: "الصوت والموسيقى",
        subcategory: "تحويل النص إلى صوت",
        url: "https://murf.ai",
        tags: ["مجاني", "مدفوع", "نص إلى كلام", "أصوات"],
        icon: "fas fa-microphone-alt"
    },
    {
        id: 10,
        name: "AIVA",
        description: "ذكاء اصطناعي لإنشاء موسيقى أصلية لمقاطع الفيديو والألعاب وغيرها.",
        category: "الصوت والموسيقى",
        subcategory: "صناعة الموسيقى والألحان",
        url: "https://www.aiva.ai",
        tags: ["مجاني", "مدفوع", "موسيقى", "تأليف"],
        icon: "fas fa-music"
    },
    {
        id: 11,
        name: "GitHub Copilot",
        description: "مساعد برمجي ذكي يقترح أكواد كاملة وسطور برمجية أثناء الكتابة.",
        category: "البرمجة والتقنية",
        subcategory: "كتابة وشرح الكود",
        url: "https://github.com/features/copilot",
        tags: ["مدفوع", "برمجة", "مساعد", "أكواد"],
        icon: "fas fa-code"
    },
    {
        id: 12,
        name: "Zapier",
        description: "منصة أتمتة تربط بين التطبيقات وتنفذ سير العمل تلقائياً.",
        category: "الأتمتة والذكاء الخارق",
        subcategory: "ربط التطبيقات (Workflow)",
        url: "https://zapier.com",
        tags: ["مجاني", "مدفوع", "أتمتة", "ربط"],
        icon: "fas fa-random"
    },
    {
        id: 13,
        name: "Notion AI",
        description: "مساعد ذكي داخل منصة Notion للمساعدة في الكتابة والتلخيص والتنظيم.",
        category: "الحياة والإنتاجية",
        subcategory: "مساعد الاجتماعات والملاحظات",
        url: "https://www.notion.so/product/ai",
        tags: ["مدفوع", "إنتاجية", "تنظيم", "ملاحظات"],
        icon: "fas fa-sticky-note"
    },
    {
        id: 14,
        name: "PromptBase",
        description: "سوق لشراء وبيع أوامر الذكاء الاصطناعي الجاهزة والمحسنة.",
        category: "مهندس الأوامر",
        subcategory: "مكتبة الأوامر الجاهزة",
        url: "https://promptbase.com",
        tags: ["مدفوع", "أوامر", "تسويق", "جاهزة"],
        icon: "fas fa-terminal"
    }
];

// دالة للبحث عن قسم بواسطة الـ ID
function getCategoryById(id) {
    return categoriesData.find(category => category.id == id);
}

// دالة للبحث عن أدوات بواسطة القسم والقسم الفرعي
function getToolsByCategoryAndSubcategory(categoryName, subcategoryName) {
    return toolsData.filter(tool => 
        tool.category === categoryName && tool.subcategory === subcategoryName
    );
}

// دالة للحصول على جميع الأدوات في قسم معين
function getToolsByCategory(categoryName) {
    return toolsData.filter(tool => tool.category === categoryName);
}
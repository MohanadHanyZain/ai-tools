import json
import random

# بيانات الأقسام والتصنيفات
categories = {
    "النصوص والكتابة": [
        "كتابة المحتوى التسويقي (Copywriting)",
        "تحسين محركات البحث (SEO Tools)", 
        "التلخيص وإعادة الصياغة",
        "التدقيق اللغوي والترجمة",
        "الدردشة والبحث (Chatbots)"
    ],
    "الصور والتصميم": [
        "توليد الصور من النص (Art Generation)",
        "تحرير الصور وتعديلها",
        "تصميم واجهات المستخدم (UI/UX)",
        "تصميم الشعارات والهوية البصرية"
    ],
    "الفيديو والأنيميشن": [
        "تحويل النص إلى فيديو",
        "المذيع الافتراضي (Avatars)",
        "تحرير الفيديو الآلي", 
        "تحسين جودة الفيديو وتلوينه"
    ],
    "الصوت والموسيقى": [
        "تحويل النص إلى صوت (TTS)",
        "توليد الموسيقى والأغاني",
        "إزالة الضجيج وتنقية الصوت",
        "الاستنساخ الصوتي (Voice Cloning)"
    ],
    "البرمجة والتقنية": [
        "مساعد البرمجة (Coding Assistants)",
        "بناء التطبيقات والمواقع (No-Code)",
        "تحليل البيانات"
    ],
    "الأتمتة والذكاء الخارق": [
        "وكلاء الذكاء الاصطناعي (AI Agents)",
        "ربط التطبيقات",
        "استخراج البيانات (Scraping)"
    ],
    "الحياة والإنتاجية": [
        "إدارة الاجتماعات",
        "تنظيم الوقت والملاحظات", 
        "البحث العلمي والأكاديمي",
        "البريد الإلكتروني الذكي"
    ],
    "مهندس الأوامر": [
        "سوق الأوامر (Prompt Marketplaces)",
        "أدوات تحسين الأوامر",
        "مكتبات الأوامر الجاهزة"
    ]
}

# قوالب للأسماء والأوصاف
name_templates = {
    "النصوص والكتابة": ["{prefix}Writer", "{prefix}Copy", "{prefix}Text", "AI {suffix} Writer", "Smart {suffix}"],
    "الصور والتصميم": ["{prefix}Art", "{prefix}Design", "{prefix}Image", "AI {suffix} Studio", "Smart {suffix}"],
    "الفيديو والأنيميشن": ["{prefix}Video", "{prefix}Film", "{prefix}Animate", "AI {suffix} Studio", "Video {suffix}"],
    "الصوت والموسيقى": ["{prefix}Audio", "{prefix}Sound", "{prefix}Music", "AI {suffix} Studio", "Sound {suffix}"],
    "البرمجة والتقنية": ["{prefix}Code", "{prefix}Dev", "{prefix}Tech", "AI {suffix} Assistant", "Code {suffix}"],
    "الأتمتة والذكاء الخارق": ["{prefix}Auto", "{prefix}Bot", "{prefix}Agent", "AI {suffix} Agent", "Smart {suffix}"],
    "الحياة والإنتاجivity": ["{prefix}Productivity", "{prefix}Life", "{prefix}Manage", "AI {suffix} Assistant", "Smart {suffix}"],
    "مهندس الأوامر": ["{prefix}Prompt", "{prefix}Command", "{prefix}Engine", "AI {suffix} Prompter", "Prompt {suffix}"]
}

descriptions = {
    "النصوص والكتابة": "أداة ذكية ل{task} باستخدام الذكاء الاصطناعي لتحسين {aspect}",
    "الصور والتصميم": "منصة متقدمة ل{task} تعمل بالذكاء الاصطناعي لإنشاء {output}",
    "الفيديو والأنيميشن": "حل متكامل ل{task} باستخدام تقنيات الذكاء الاصطناعي لإنتاج {output}",
    "الصوت والموسيقى": "أداة متطورة ل{task} تعتمد على الذكاء الاصطناعي لتحسين {aspect}",
    "البرمجة والتقنية": "مساعد ذكي ل{task} يعمل بالذكاء الاصطناعي لتحسين {aspect}",
    "الأتمتة والذكاء الخارق": "نظام أتمتة ذكي ل{task} باستخدام الذكاء الاصطناعي لأتمتة {process}",
    "الحياة والإنتاجivity": "أداة إنتاجية ذكية ل{task} باستخدام الذكاء الاصطناعي لتحسين {aspect}",
    "مهندس الأوامر": "منصة متخصصة ل{task} باستخدام الذكاء الاصطناعي لتحسين {aspect}"
}

# قوالب المهام
tasks = {
    "كتابة المحتوى التسويقي (Copywriting)": ["كتابة المحتوى التسويقي", "إنشاء الإعلانات", "صياغة نصوص المبيعات"],
    "تحسين محركات البحث (SEO Tools)": ["تحسين محركات البحث", "تحليل الكلمات المفتاحية", "تحسين المحتوى لـ SEO"],
    "التلخيص وإعادة الصياغة": ["تلخيص النصوص", "إعادة صياغة المحتوى", "اختصار المقالات"],
    "التدقيق اللغوي والترجمة": ["التدقيق اللغوي", "الترجمة الآلية", "تصحيح الأخطاء اللغوية"],
    "الدردشة والبحث (Chatbots)": ["الدردشة الذكية", "البحث المتقدم", "الإجابة على الأسئلة"],
    "توليد الصور من النص (Art Generation)": ["توليد الصور", "الرسم الرقمي", "إنشاء الفن الإبداعي"],
    "تحرير الصور وتعديلها": ["تحرير الصور", "تحسين الجودة", "تعديل الصور"],
    "تصميم واجهات المستخدم (UI/UX)": ["تصميم الواجهات", "تحسين تجربة المستخدم", "إنشاء النماذج الأولية"],
    "تصميم الشعارات والهوية البصرية": ["تصميم الشعارات", "إنشاء الهوية البصرية", "تصميم العلامات التجارية"],
    "تحويل النص إلى فيديو": ["تحويل النص إلى فيديو", "إنشاء مقاطع الفيديو", "إنتاج المحتوى المرئي"],
    "المذيع الافتراضي (Avatars)": ["إنشاء المذيعين الافتراضيين", "توليد الفيديوهات بالأفاتار", "الإنتاج الصوتي المرئي"],
    "تحرير الفيديو الآلي": ["تحرير الفيديو الآلي", "مونتاج الفيديو", "معالجة المقاطع المرئية"],
    "تحسين جودة الفيديو وتلوينه": ["تحسين جودة الفيديو", "تلوين الفيديو", "ترميم المقاطع القديمة"],
    "تحويل النص إلى صوت (TTS)": ["تحويل النص إلى صوت", "التعليق الصوتي", "إنتاج الصوت"],
    "توليد الموسيقى والأغاني": ["توليد الموسيقى", "إنشاء الألحان", "تأليف الأغاني"],
    "إزالة الضجيج وتنقية الصوت": ["تنقية الصوت", "إزالة الضجيج", "تحسين الجودة الصوتية"],
    "الاستنساخ الصوتي (Voice Cloning)": ["استنساخ الأصوات", "تقليد الأصوات", "توليد الأصوات المماثلة"],
    "مساعد البرمجة (Coding Assistants)": ["المساعدة في البرمجة", "كتابة الأكواد", "تصحيح الأخطاء البرمجية"],
    "بناء التطبيقات والمواقع (No-Code)": ["بناء التطبيقات", "إنشاء المواقع", "التطوير بدون كود"],
    "تحليل البيانات": ["تحليل البيانات", "معالجة المعلومات", "استخراج الرؤى"],
    "وكلاء الذكاء الاصطناعي (AI Agents)": ["إدارة الوكلاء الذكيين", "أتمتة المهام", "التنفيذ الذاتي"],
    "ربط التطبيقات": ["ربط التطبيقات", "أتمتة سير العمل", "التكامل بين الأنظمة"],
    "استخراج البيانات (Scraping)": ["استخراج البيانات", "جمع المعلومات", "التنقيب عن البيانات"],
    "إدارة الاجتماعات": ["إدارة الاجتماعات", "تنظيم اللقاءات", "تسجيل وتلخيص النقاشات"],
    "تنظيم الوقت والملاحظات": ["تنظيم الوقت", "إدارة المهام", "تنظيم الملاحظات"],
    "البحث العلمي والأكاديمي": ["البحث العلمي", "الدراسة الأكاديمية", "تحليل الأبحاث"],
    "البريد الإلكتروني الذكي": ["إدارة البريد الإلكتروني", "تصنيف الرسائل", "الرد التلقائي"],
    "سوق الأوامر (Prompt Marketplaces)": ["بيع وشراء الأوامر", "تداول النماذج", "تبادل القوالب"],
    "أدوات تحسين الأوامر": ["تحسين الأوامر", "تطوير النماذج", "تحليل فعالية الأوامر"],
    "مكتبات الأوامر الجاهزة": ["تخزين الأوامر", "تنظيم القوالب", "إدارة المكتبات"]
}

# أيقونات
icons = [
    "fas fa-robot", "fas fa-brain", "fas fa-magic", "fas fa-cogs", "fas fa-code",
    "fas fa-paint-brush", "fas fa-image", "fas fa-film", "fas fa-music",
    "fas fa-microphone-alt", "fas fa-headphones", "fas fa-video", "fas fa-camera",
    "fas fa-chart-line", "fas fa-search", "fas fa-pen", "fas fa-book",
    "fas fa-graduation-cap", "fas fa-briefcase", "fas fa-users", "fas fa-comments",
    "fas fa-envelope", "fas fa-calendar", "fas fa-tasks", "fas fa-clock",
    "fas fa-lightbulb", "fas fa-rocket", "fas fa-bolt", "fas fa-star",
    "fas fa-trophy", "fas fa-medal", "fas fa-crown", "fas fa-gem"
]

# كلمات للبادئات واللواحق
prefixes = ["AI", "Smart", "Deep", "Neural", "Quantum", "Hyper", "Mega", "Ultra", "Super", "Next", "Future", "Tech", "Digital", "Virtual", "Cyber"]
suffixes = ["Pro", "Plus", "Max", "Ultimate", "Advanced", "Expert", "Master", "Professional", "Enterprise", "Business", "Studio", "Labs", "Tools", "Suite", "Platform"]

# أسعار
prices = ["free", "freemium", "paid"]
price_distribution = {"free": 30, "freemium": 50, "paid": 20}  # نسب مئوية

# تقييمات
def generate_rating(category):
    base = random.uniform(3.8, 4.9)
    return round(base, 1)

# توليد أداة
def generate_tool(tool_id, category, subcategory):
    # توليد الاسم
    template = random.choice(name_templates[category])
    prefix = random.choice(prefixes)
    suffix = random.choice(suffixes)
    name = template.format(prefix=prefix, suffix=suffix)
    
    # توليد الوصف
    task = random.choice(tasks[subcategory])
    aspects = ["الكفاءة", "الجودة", "السرعة", "الدقة", "الإبداع", "الإنتاجية", "التوافق", "المرونة"]
    aspect = random.choice(aspects)
    outputs = ["تصاميم مذهلة", "نتائج دقيقة", "محتوى إبداعي", "حلول فعالة", "منتجات مبتكرة"]
    output = random.choice(outputs)
    
    if category in ["الصور والتصميم", "الفيديو والأنيميشن"]:
        description = descriptions[category].format(task=task, output=output)
    else:
        description = descriptions[category].format(task=task, aspect=aspect)
    
    # توليد الرابط
    name_lower = name.lower().replace(" ", "-").replace(".", "")
    url = f"https://{name_lower}.ai"
    
    # توليد الوسوم
    tags = []
    price_type = random.choices(list(price_distribution.keys()), 
                               weights=list(price_distribution.values()))[0]
    
    if price_type == "free":
        tags.append("مجاني")
    elif price_type == "paid":
        tags.append("مدفوع")
    else:
        tags.append("مجاني")
        tags.append("مدفوع")
    
    # إضافة وسوم إضافية
    additional_tags = ["ذكاء اصطناعي", "سحابي", "سهل الاستخدام", "متعدد اللغات", "متكامل"]
    num_additional = random.randint(1, 3)
    tags.extend(random.sample(additional_tags, num_additional))
    
    # إضافة وسوم حسب التصنيف
    if "SEO" in subcategory:
        tags.append("SEO")
    if "تسويق" in subcategory:
        tags.append("تسويق")
    if "برمجة" in subcategory:
        tags.append("برمجة")
    if "تصميم" in subcategory:
        tags.append("تصميم")
    if "فيديو" in subcategory:
        tags.append("فيديو")
    if "صوت" in subcategory:
        tags.append("صوت")
    
    # إنشاء الأداة
    tool = {
        "id": tool_id,
        "name": name,
        "description": description,
        "category": category,
        "subcategory": subcategory,
        "url": url,
        "tags": tags,
        "icon": random.choice(icons),
        "rating": generate_rating(category),
        "price": price_type
    }
    
    return tool

# توليد جميع الأدوات
def generate_all_tools():
    tools = []
    tool_id = 1
    
    # توزيع الأدوات على الأقسام
    distribution = {
        "النصوص والكتابة": 125,
        "الصور والتصميم": 100,
        "الفيديو والأنيميشن": 100,
        "الصوت والموسيقى": 100,
        "البرمجة والتقنية": 125,
        "الأتمتة والذكاء الخارق": 125,
        "الحياة والإنتاجivity": 125,
        "مهندس الأوامر": 130
    }
    
    for category, count in distribution.items():
        subcategories = categories[category]
        # توزيع الأدوات بالتساوي على التصنيفات الفرعية
        tools_per_subcategory = count // len(subcategories)
        remainder = count % len(subcategories)
        
        for i, subcategory in enumerate(subcategories):
            num_tools = tools_per_subcategory + (1 if i < remainder else 0)
            
            for _ in range(num_tools):
                tool = generate_tool(tool_id, category, subcategory)
                tools.append(tool)
                tool_id += 1
    
    return tools

# توليد البيانات وحفظها
all_tools = generate_all_tools()

# حفظ في ملف JSON
with open('tools_930.json', 'w', encoding='utf-8') as f:
    json.dump({"tools": all_tools}, f, ensure_ascii=False, indent=2)

print(f"تم توليد {len(all_tools)} أداة وحفظها في tools_930.json")
print(f"الأدوات موزعة كالتالي:")
for category in categories.keys():
    category_tools = [t for t in all_tools if t["category"] == category]
    print(f"{category}: {len(category_tools)} أداة")
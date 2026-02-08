// ملف API لجلب البيانات من ملفات JSON
class DataAPI {
    constructor() {
        this.baseURL = 'data/'; // المسار إلى مجلد البيانات
        this.cache = {}; // تخزين مؤقت للبيانات
    }

    // جلب جميع الأدوات من ملف JSON
    async getAllTools() {
        try {
            // إذا كانت البيانات في الكاش، استخدمها
            if (this.cache.tools) {
                return this.cache.tools;
            }

            // جلب البيانات من ملف JSON
            const response = await fetch(`${this.baseURL}tools.json`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // تخزين في الكاش
            this.cache.tools = data.tools;
            
            return data.tools;
            
        } catch (error) {
            console.error('Error fetching tools:', error);
            
            // في حالة الخطأ، نعود بمصفوفة فارغة
            // أو يمكنك إظهار رسالة خطأ للمستخدم
            return [];
        }
    }

    // جلب أدوات محددة حسب القسم والقسم الفرعي
    async getToolsByCategoryAndSubcategory(categoryName, subcategoryName) {
        try {
            // جلب جميع الأدوات
            const allTools = await this.getAllTools();
            
            // تصفية الأدوات حسب القسم والقسم الفرعي
            const filteredTools = allTools.filter(tool => 
                tool.category === categoryName && 
                tool.subcategory === subcategoryName
            );
            
            return filteredTools;
            
        } catch (error) {
            console.error('Error filtering tools:', error);
            return [];
        }
    }

    // جلب أدوات حسب القسم فقط
    async getToolsByCategory(categoryName) {
        try {
            const allTools = await this.getAllTools();
            
            const filteredTools = allTools.filter(tool => 
                tool.category === categoryName
            );
            
            return filteredTools;
            
        } catch (error) {
            console.error('Error filtering tools by category:', error);
            return [];
        }
    }

    // جلب أداة محددة بواسطة الـ ID
    async getToolById(toolId) {
        try {
            const allTools = await this.getAllTools();
            
            const tool = allTools.find(tool => 
                tool.id == toolId
            );
            
            return tool;
            
        } catch (error) {
            console.error('Error finding tool by ID:', error);
            return null;
        }
    }

    // جلب الأدوات حسب الوسم
    async getToolsByTag(tag) {
        try {
            const allTools = await this.getAllTools();
            
            const filteredTools = allTools.filter(tool => 
                tool.tags.includes(tag)
            );
            
            return filteredTools;
            
        } catch (error) {
            console.error('Error filtering tools by tag:', error);
            return [];
        }
    }

    // جلب الأدوات المجانية فقط
    async getFreeTools() {
        try {
            const allTools = await this.getAllTools();
            
            const freeTools = allTools.filter(tool => 
                tool.tags.includes('مجاني') || tool.price === 'free'
            );
            
            return freeTools;
            
        } catch (error) {
            console.error('Error getting free tools:', error);
            return [];
        }
    }

    // جلب الأدوات حسب التقييم
    async getToolsByMinRating(minRating) {
        try {
            const allTools = await this.getAllTools();
            
            const ratedTools = allTools.filter(tool => 
                tool.rating >= minRating
            );
            
            return ratedTools;
            
        } catch (error) {
            console.error('Error filtering tools by rating:', error);
            return [];
        }
    }

    // بحث في الأدوات
    async searchTools(searchTerm) {
        try {
            const allTools = await this.getAllTools();
            
            const searchResults = allTools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            
            return searchResults;
            
        } catch (error) {
            console.error('Error searching tools:', error);
            return [];
        }
    }

    // إضافة أداة جديدة (محاكاة - في تطبيق حقيقي سيكون هذا API على الخادم)
    async addTool(newTool) {
        try {
            // في تطبيق حقيقي، هنا ستكون طلب POST إلى API الخادم
            console.log('Adding new tool:', newTool);
            
            // إضافة ID جديد (في الواقع سيعطيه الخادم)
            const allTools = await this.getAllTools();
            const maxId = Math.max(...allTools.map(tool => tool.id));
            newTool.id = maxId + 1;
            
            // إضافة إلى الكاش (مؤقتاً)
            if (this.cache.tools) {
                this.cache.tools.push(newTool);
            }
            
            // في تطبيق حقيقي، هنا ستكون رسالة نجاح من الخادم
            return { success: true, tool: newTool };
            
        } catch (error) {
            console.error('Error adding tool:', error);
            return { success: false, error: error.message };
        }
    }

    // تحديث أداة موجودة (محاكاة)
    async updateTool(toolId, updatedData) {
        try {
            console.log('Updating tool:', toolId, updatedData);
            
            // تحديث في الكاش (مؤقتاً)
            if (this.cache.tools) {
                const index = this.cache.tools.findIndex(tool => tool.id == toolId);
                if (index !== -1) {
                    this.cache.tools[index] = { ...this.cache.tools[index], ...updatedData };
                }
            }
            
            return { success: true };
            
        } catch (error) {
            console.error('Error updating tool:', error);
            return { success: false, error: error.message };
        }
    }

    // حذف أداة (محاكاة)
    async deleteTool(toolId) {
        try {
            console.log('Deleting tool:', toolId);
            
            // حذف من الكاش (مؤقتاً)
            if (this.cache.tools) {
                this.cache.tools = this.cache.tools.filter(tool => tool.id != toolId);
            }
            
            return { success: true };
            
        } catch (error) {
            console.error('Error deleting tool:', error);
            return { success: false, error: error.message };
        }
    }
}

// إنشاء نسخة واحدة من API لاستخدامها في جميع الملفات
const dataAPI = new DataAPI();

// جعل API متاحاً عالمياً (يمكن استخدامه من الملفات الأخرى)
if (typeof window !== 'undefined') {
    window.dataAPI = dataAPI;
}

// تصدير الـ API إذا كنا في بيئة تدعم ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { dataAPI, DataAPI };
}
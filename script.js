// Массив с данными о продуктах
const products = [
    {
        id: 1,
        title: "AI Аналитика",
        icon: "fas fa-chart-line",
        price: "от 15 000 ₽/мес",
        description: "Мощная система анализа данных с использованием машинного обучения для прогнозирования трендов и выявления скрытых возможностей.",
        features: [
            "Прогнозное моделирование",
            "Визуализация данных в реальном времени",
            "Автоматические отчеты",
            "Интеграция с популярными CRM"
        ]
    },
    {
        id: 2,
        title: "AI Ассистент",
        icon: "fas fa-robot",
        price: "от 8 000 ₽/мес",
        description: "Виртуальный помощник с естественным языком общения для автоматизации рутинных задач и улучшения клиентского сервиса.",
        features: [
            "24/7 поддержка клиентов",
            "Мультиязычность",
            "Интеграция с мессенджерами",
            "Анализ тональности диалогов"
        ]
    },
    {
        id: 3,
        title: "AI Безопасность",
        icon: "fas fa-shield-alt",
        price: "от 25 000 ₽/мес",
        description: "Система кибербезопасности на основе ИИ для обнаружения и предотвращения угроз в реальном времени.",
        features: [
            "Обнаружение аномалий",
            "Защита от DDoS-атак",
            "Мониторинг в реальном времени",
            "Автоматическое устранение угроз"
        ]
    },
    {
        id: 4,
        title: "AI Контент",
        icon: "fas fa-pen-nib",
        price: "от 5 000 ₽/мес",
        description: "Генерация качественного текстового контента для сайтов, блогов и социальных сетей с учетом SEO-оптимизации.",
        features: [
            "Генерация статей и постов",
            "SEO-оптимизация",
            "Копирайтинг на разные темы",
            "Адаптация стиля под бренд"
        ]
    },
    {
        id: 5,
        title: "AI Оптимизация",
        icon: "fas fa-cogs",
        price: "от 12 000 ₽/мес",
        description: "Оптимизация бизнес-процессов с использованием искусственного интеллекта для повышения эффективности.",
        features: [
            "Анализ рабочих процессов",
            "Автоматизация рутинных задач",
            "Рекомендации по оптимизации",
            "Отслеживание KPI"
        ]
    },
    {
        id: 6,
        title: "AI Видение",
        icon: "fas fa-eye",
        price: "от 18 000 ₽/мес",
        description: "Система компьютерного зрения для анализа изображений и видео в реальном времени.",
        features: [
            "Распознавание объектов",
            "Анализ видеопотоков",
            "Контроль качества продукции",
            "Безопасность на производстве"
        ]
    }
];

// Текущий активный продукт
let activeProductId = null;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

// Функция для отрисовки продуктов
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${activeProductId === product.id ? 'active' : ''}`;
        productCard.dataset.id = product.id;
        
        productCard.innerHTML = `
            <div class="product-icon">
                <i class="${product.icon}"></i>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${product.price}</div>
            <div class="product-description">
                <p>${product.description}</p>
                <ul class="product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button class="buy-button" onclick="handleBuyClick(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Заказать
                </button>
            </div>
        `;
        
        // Добавляем обработчик клика на карточку
        productCard.addEventListener('click', function(e) {
            // Если клик по кнопке "Заказать", не переключаем состояние
            if (e.target.classList.contains('buy-button') || 
                e.target.closest('.buy-button')) {
                return;
            }
            
            toggleProduct(product.id);
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Функция переключения состояния продукта
function toggleProduct(productId) {
    // Если кликаем на уже активный продукт - закрываем его
    if (activeProductId === productId) {
        activeProductId = null;
    } else {
        activeProductId = productId;
    }
    
    // Обновляем отображение
    renderProducts();
    
    // Плавная прокрутка к активному элементу, если он открыт
    if (activeProductId) {
        setTimeout(() => {
            const activeCard = document.querySelector(`.product-card[data-id="${activeProductId}"]`);
            if (activeCard) {
                activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    }
}

// Обработчик клика на кнопку "Заказать"
function handleBuyClick(productId) {
    const product = products.find(p => p.id === productId);
    
    // Предотвращаем всплытие события, чтобы карточка не закрывалась
    event.stopPropagation();
    
    // Показываем сообщение о заказе
    alert(`Спасибо за заказ "${product.title}"!\nНаш менеджер свяжется с вами в ближайшее время для уточнения деталей.`);
    
    // В реальном приложении здесь был бы запрос на сервер
    console.log(`Заказ продукта: ${product.title}`);
}

// Добавляем интерактивность для логотипа
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

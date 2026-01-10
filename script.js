// Массив с данными о нейросетях
const neuralNetworks = [
    {
        id: "grok41",
        title: "Grok",
        version: "4.1 Fat",
        icon: "fas fa-brain",
        badge: "premium",
        description: "Мощнейшая нейросеть от xAI с расширенным контекстом и улучшенными возможностями анализа данных. Поддерживает сложные логические операции и глубокий анализ текста.",
        features: [
            "Контекст: 128K токенов",
            "Поддержка 50+ языков",
            "Расширенная математическая логика",
            "Генерация кода",
            "Анализ документов и таблиц",
            "Понимание сложных запросов"
        ]
    },
    {
        id: "gemma",
        title: "Gemma",
        version: "2.0",
        icon: "fas fa-gem",
        badge: "free",
        description: "Легковесная, но мощная модель от Google, оптимизированная для эффективной работы на различных устройствах с сохранением высокой точности.",
        features: [
            "Оптимизирована для мобильных устройств",
            "Быстрое время ответа",
            "Поддержка 40+ языков",
            "Точное следование инструкциям",
            "Низкое потребление ресурсов",
            "Бесплатный доступ"
        ]
    },
    {
        id: "claude3",
        title: "Claude",
        version: "3.5 Sonnet",
        icon: "fas fa-robot",
        badge: "premium",
        description: "Продвинутая модель от Anthropic с улучшенными креативными способностями и глубоким пониманием контекста. Идеальна для сложных творческих задач.",
        features: [
            "Улучшенная креативность",
            "Глубокий анализ контекста",
            "Работа с длинными документами",
            "Этичное использование ИИ",
            "Высокая точность ответов",
            "Безопасный диалог"
        ]
    },
    {
        id: "mistral",
        title: "Mistral",
        version: "Large",
        icon: "fas fa-wind",
        badge: "free",
        description: "Эффективная европейская модель с открытым исходным кодом. Отличается высокой скоростью работы и качественной обработкой текста.",
        features: [
            "Открытый исходный код",
            "Высокая скорость обработки",
            "Оптимизация для европейских языков",
            "Качественный перевод",
            "Гибкая настройка",
            "Локальное развертывание"
        ]
    },
    {
        id: "llama3",
        title: "Llama",
        version: "3.1 70B",
        icon: "fas fa-horse-head",
        badge: "premium",
        description: "Масштабируемая модель от Meta с улучшенными возможностями диалога и поддержкой многозадачности. Подходит для коммерческого использования.",
        features: [
            "Многозадачность",
            "Коммерческая лицензия",
            "Поддержка плагинов",
            "Интеграция с API",
            "Регулярные обновления",
            "Корпоративная поддержка"
        ]
    },
    {
        id: "dalle3",
        title: "DALL·E",
        version: "3.0",
        icon: "fas fa-palette",
        badge: "new",
        description: "Передовая модель генерации изображений от OpenAI. Создает высококачественные изображения по текстовым описаниям с пониманием контекста.",
        features: [
            "Генерация изображений 4K",
            "Понимание сложных запросов",
            "Разные стили искусства",
            "Редактирование существующих изображений",
            "Безопасный контент",
            "Высокое разрешение"
        ]
    }
];

// Текущая активная нейросеть
let activeNeuralId = null;
const BOT_USERNAME = "FernieXBot";

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderNeuralNetworks();
    
    // Добавляем обработчик для логотипа
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        this.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
    
    // Анимация для карточек при загрузке
    setTimeout(() => {
        document.querySelectorAll('.neural-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }, 300);
    
    // Закрываем активную карточку при клике вне её
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.neural-card') && activeNeuralId) {
            toggleNeural(activeNeuralId);
        }
    });
});

// Функция для отрисовки нейросетей
function renderNeuralNetworks() {
    const neuralGrid = document.getElementById('neuralGrid');
    neuralGrid.innerHTML = '';
    
    neuralNetworks.forEach(neural => {
        const neuralCard = document.createElement('div');
        neuralCard.className = `neural-card ${activeNeuralId === neural.id ? 'active' : ''}`;
        neuralCard.dataset.id = neural.id;
        
        // Получаем текст для бейджа
        let badgeText = '';
        let badgeClass = '';
        switch(neural.badge) {
            case 'free': 
                badgeText = 'Бесплатно';
                badgeClass = 'badge-free';
                break;
            case 'premium': 
                badgeText = 'Премиум';
                badgeClass = 'badge-premium';
                break;
            case 'new': 
                badgeText = 'Новинка';
                badgeClass = 'badge-new';
                break;
        }
        
        neuralCard.innerHTML = `
            <div class="${badgeClass} neural-badge">${badgeText}</div>
            <div class="neural-card-header">
                <div class="neural-icon">
                    <i class="${neural.icon}"></i>
                </div>
                <div class="neural-title-container">
                    <h3 class="neural-title">
                        ${neural.title}
                        <span class="neural-version">${neural.version}</span>
                    </h3>
                </div>
            </div>
            <div class="neural-description">
                <p>${neural.description}</p>
                <ul class="neural-features">
                    ${neural.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <a href="https://t.me/${BOT_USERNAME}?start=${neural.id}" 
                   class="install-button" 
                   target="_blank"
                   onclick="handleInstallClick('${neural.id}', event)">
                    <i class="fab fa-telegram"></i> Установить ${neural.title} ${neural.version}
                </a>
            </div>
        `;
        
        // Добавляем обработчик клика на карточку (кроме кнопки)
        neuralCard.addEventListener('click', function(e) {
            // Если клик по кнопке или ссылке, не переключаем состояние
            if (e.target.closest('.install-button') || 
                e.target.closest('.neural-badge') ||
                e.target.tagName === 'A') {
                return;
            }
            
            toggleNeural(neural.id);
        });
        
        neuralGrid.appendChild(neuralCard);
    });
}

// Функция переключения состояния нейросети
function toggleNeural(neuralId) {
    // Если кликаем на уже активную нейросеть - закрываем её
    if (activeNeuralId === neuralId) {
        activeNeuralId = null;
    } else {
        // Закрываем предыдущую, если была открыта
        if (activeNeuralId) {
            const prevCard = document.querySelector(`.neural-card[data-id="${activeNeuralId}"]`);
            if (prevCard) {
                prevCard.classList.remove('active');
            }
        }
        activeNeuralId = neuralId;
    }
    
    // Обновляем отображение
    renderNeuralNetworks();
    
    // Плавная прокрутка к активному элементу, если он открыт
    if (activeNeuralId) {
        setTimeout(() => {
            const activeCard = document.querySelector(`.neural-card[data-id="${activeNeuralId}"]`);
            if (activeCard) {
                activeCard.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center'
                });
            }
        }, 150);
    }
}

// Обработчик клика на кнопку "Установить"
function handleInstallClick(neuralId, event) {
    const neural = neuralNetworks.find(n => n.id === neuralId);
    
    // Записываем в localStorage выбранную нейросеть
    localStorage.setItem('selectedNeural', neuralId);
    localStorage.setItem('lastSelection', new Date().toISOString());
    
    // Можно добавить аналитику здесь
    console.log(`Пользователь выбрал нейросеть: ${neural.title} ${neural.version}`);
    
    // Открывается Telegram с параметром start
    // Telegram автоматически передаст параметр боту
    
    // Показываем уведомление
    showInstallNotification(neural);
}

// Показать уведомление об установке
function showInstallNotification(neural) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = 'install-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fab fa-telegram"></i>
            <div>
                <h4>Открывается Telegram...</h4>
                <p>Вы будете перенаправлены в бота для установки ${neural.title} ${neural.version}</p>
            </div>
        </div>
    `;
    
    // Стили для уведомления
    const style = document.createElement('style');
    style.textContent = `
        .install-notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(to right, #0088cc, #00c9ff);
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
            max-width: 350px;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .notification-content i {
            font-size: 2rem;
        }
        
        .notification-content h4 {
            margin: 0 0 5px 0;
            font-size: 1.1rem;
        }
        
        .notification-content p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-out forwards';
        
        // Добавляем анимацию исчезновения
        const slideOutStyle = document.createElement('style');
        slideOutStyle.textContent = `
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(slideOutStyle);
        
        setTimeout(() => {
            notification.remove();
            slideOutStyle.remove();
            style.remove();
        }, 500);
    }, 3000);
}

// Анимация для плавного появления
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

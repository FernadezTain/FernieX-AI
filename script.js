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
    // Создаем частицы для фона
    createParticles();
    
    // Рендерим нейросети
    renderNeuralNetworks();
    
    // Добавляем обработчик для логотипа
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        this.style.animation = 'logoClick 0.5s';
        setTimeout(() => {
            this.style.animation = 'logoGlow 4s ease-in-out infinite';
        }, 500);
    });
    
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Анимация для инструкций
    animateInstructions();
});

// Создаем частицы для фона
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные размеры и позиции
        const size = Math.random() * 100 + 50;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 10 + 15;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Анимация для инструкций
function animateInstructions() {
    const listItems = document.querySelectorAll('.instructions li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--list-index', index);
        item.style.animationDelay = `${index * 0.1 + 1.2}s`;
    });
}

// Функция для отрисовки нейросетей
function renderNeuralNetworks() {
    const neuralGrid = document.getElementById('neuralGrid');
    neuralGrid.innerHTML = '';
    
    neuralNetworks.forEach((neural, index) => {
        const neuralCard = document.createElement('div');
        neuralCard.className = `neural-card ${activeNeuralId === neural.id ? 'active' : ''}`;
        neuralCard.dataset.id = neural.id;
        neuralCard.style.setProperty('--card-index', index);
        
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
                    ${neural.features.map((feature, idx) => 
                        `<li style="--feature-index: ${idx}">${feature}</li>`
                    ).join('')}
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
        
        // Анимация при наведении на иконку
        const icon = neuralCard.querySelector('.neural-icon');
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'iconSpin 0.6s ease-out, iconFloat 4s ease-in-out infinite';
        });
        
        neuralGrid.appendChild(neuralCard);
    });
}

// Функция переключения состояния нейросети
function toggleNeural(neuralId) {
    // Если кликаем на уже активную нейросеть - закрываем её
    if (activeNeuralId === neuralId) {
        // Анимация закрытия
        const currentCard = document.querySelector(`.neural-card[data-id="${neuralId}"]`);
        if (currentCard) {
            currentCard.style.animation = 'cardClose 0.4s ease-out';
            setTimeout(() => {
                currentCard.style.animation = '';
            }, 400);
        }
        
        activeNeuralId = null;
    } else {
        // Закрываем предыдущую, если была открыта
        if (activeNeuralId) {
            const prevCard = document.querySelector(`.neural-card[data-id="${activeNeuralId}"]`);
            if (prevCard) {
                prevCard.style.animation = 'cardClose 0.4s ease-out';
                setTimeout(() => {
                    prevCard.style.animation = '';
                }, 400);
            }
        }
        
        // Открываем новую
        activeNeuralId = neuralId;
        const newCard = document.querySelector(`.neural-card[data-id="${neuralId}"]`);
        if (newCard) {
            newCard.style.animation = 'cardOpen 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            setTimeout(() => {
                newCard.style.animation = 'cardFloat 6s ease-in-out infinite';
            }, 500);
        }
    }
    
    // Обновляем отображение
    setTimeout(() => {
        renderNeuralNetworks();
    }, 50);
    
    // Плавная прокрутка к активному элементу, если он открыт
    if (activeNeuralId) {
        setTimeout(() => {
            const activeCard = document.querySelector(`.neural-card[data-id="${activeNeuralId}"]`);
            if (activeCard) {
                activeCard.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'nearest'
                });
            }
        }, 300);
    }
}

// Обработчик клика на кнопку "Установить"
function handleInstallClick(neuralId, event) {
    event.preventDefault();
    const neural = neuralNetworks.find(n => n.id === neuralId);
    
    // Записываем в localStorage выбранную нейросеть
    localStorage.setItem('selectedNeural', neuralId);
    localStorage.setItem('lastSelection', new Date().toISOString());
    
    // Анимация нажатия кнопки
    const button = event.target.closest('.install-button');
    if (button) {
        button.style.animation = 'buttonClick 0.3s ease-out';
        setTimeout(() => {
            button.style.animation = 'buttonShimmer 3s infinite';
        }, 300);
    }
    
    // Показываем уведомление
    showInstallNotification(neural);
    
    // Открываем ссылку через 500мс для завершения анимации
    setTimeout(() => {
        window.open(`https://t.me/${BOT_USERNAME}?start=${neural.id}`, '_blank');
    }, 500);
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
            <div class="notification-progress"></div>
        </div>
    `;
    
    // Добавляем стили для уведомления и прогресс-бара
    const style = document.createElement('style');
    style.textContent = `
        .install-notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #0088cc, #00c9ff);
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
            z-index: 1000;
            animation: notificationSlideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            max-width: 350px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 15px;
            position: relative;
        }
        
        .notification-content i {
            font-size: 2.2rem;
            animation: notificationIcon 1s ease-in-out infinite;
        }
        
        @keyframes notificationIcon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .notification-content h4 {
            margin: 0 0 5px 0;
            font-size: 1.2rem;
            font-weight: 600;
        }
        
        .notification-content p {
            margin: 0;
            font-size: 0.95rem;
            opacity: 0.9;
        }
        
        .notification-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(255, 255, 255, 0.3);
            overflow: hidden;
        }
        
        .notification-progress::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #92fe9d;
            animation: progressBar 3s linear forwards;
        }
        
        @keyframes progressBar {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes notificationSlideIn {
            from {
                transform: translateX(100%) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
        }
        
        @keyframes notificationSlideOut {
            from {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            to {
                transform: translateX(100%) scale(0.8);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.5s ease-out forwards';
        
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 500);
    }, 3000);
}

// Добавляем стили для анимаций
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes logoClick {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes buttonClick {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
    
    @keyframes cardOpen {
        0% {
            transform: translateY(0) scale(1);
            box-shadow: 0 5px 15px rgba(0, 201, 255, 0.1);
        }
        50% {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 201, 255, 0.3);
        }
        100% {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 20px 40px rgba(0, 201, 255, 0.25);
        }
    }
    
    @keyframes cardClose {
        0% {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 20px 40px rgba(0, 201, 255, 0.25);
        }
        100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 5px 15px rgba(0, 201, 255, 0.1);
        }
    }
    
    .neural-card {
        opacity: 0;
        transform: translateY(30px);
        animation: cardAppear 0.6s ease-out forwards;
        animation-delay: calc(var(--card-index) * 0.1s + 0.5s);
    }
    
    @keyframes cardAppear {
        from {
            opacity: 0;
            transform: translateY(30px) rotateX(10deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
        }
    }
`;
document.head.appendChild(animationStyles);

// Анимация при скролле
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.neural-card');
    const scrollPosition = window.scrollY;
    
    cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;
        
        if (cardPosition < scrollPosition + windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
    });
});

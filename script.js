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
            "Анализ документов и таблиц"
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
            "Низкое потребление ресурсов"
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
            "Высокая точность ответов"
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
            "Гибкая настройка"
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
            "Регулярные обновления"
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
            "Безопасный контент"
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
            <div class="neural-icon">
                <i class="${neural.icon}"></i>
            </div>
            <h3 class="neural-title">${neural.title}</h3>
            <div class="neural-version">${neural.version}</div>
            <div class="neural-description">
                <p>${neural.description}</p>
                <ul class="neural-features">
                    ${neural.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <a href="https://t.me/${BOT_USERNAME}?start=${neural.id}" 
                   class="install-button" 
                   target="_blank"
                   onclick="handleInstallClick('${neural.id}', event)">
                    <i class="fab fa-telegram"></i> Установить ${neural.title}
                </a>
            </div>
        `;
        
        // Добавляем обработчик клика на карточку (кроме кнопки)
        neuralCard.addEventListener('click', function(e) {
            // Если клик по кнопке или ссылке, не переключаем состояние
            if (e.target.closest('.install-button') || e.target.tagName === 'A') {
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
                    block: 'center',
                    inline: 'nearest' 
                });
            }
        }, 100);
    }
}

// Обработчик клика на кнопку "Установить"
function handleInstallClick(neuralId, event) {
    const neural = neuralNetworks.find(n => n.id === neuralId);
    
    // Записываем в localStorage выбранную нейросеть
    localStorage.setItem('selectedNeural', neuralId);
    
    // Можно добавить аналитику здесь
    console.log(`Пользователь выбрал нейросеть: ${neural.title} ${neural.version}`);
    
    // Открывается Telegram с параметром start
    // Telegram автоматически передаст параметр боту
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

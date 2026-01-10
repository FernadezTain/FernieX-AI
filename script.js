// ===== ДАННЫЕ =====
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


const BOT_USERNAME = "FernieXBot";
let activeNeuralId = null;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    createParticles();
    renderNeuralNetworks();
});

// ===== РЕНДЕР ОДИН РАЗ =====
function renderNeuralNetworks() {
    const grid = document.getElementById("neuralGrid");

    neuralNetworks.forEach((neural, index) => {
        const card = document.createElement("div");
        card.className = "neural-card";
        card.dataset.id = neural.id;
        card.style.setProperty("--i", index);

        card.innerHTML = `
            <div class="neural-badge badge-${neural.badge}">
                ${neural.badge === "free" ? "Бесплатно" : "Премиум"}
            </div>

            <div class="neural-card-header">
                <div class="neural-icon">
                    <i class="${neural.icon}"></i>
                </div>
                <div>
                    <h3 class="neural-title">
                        ${neural.title}
                        <span>${neural.version}</span>
                    </h3>
                </div>
            </div>

            <div class="neural-description">
                <p>${neural.description}</p>
                <ul class="neural-features">
                    ${neural.features.map(f => `<li>${f}</li>`).join("")}
                </ul>

                <a class="install-button"
                   href="https://t.me/${BOT_USERNAME}?start=${neural.id}"
                   target="_blank">
                   <i class="fab fa-telegram"></i> Установить
                </a>
            </div>
        `;

        card.addEventListener("click", e => {
            if (e.target.closest("a")) return;
            toggleNeural(neural.id);
        });

        grid.appendChild(card);
    });
}

// ===== ПЕРЕКЛЮЧЕНИЕ БЕЗ РЕРЕНДЕРА =====
function toggleNeural(id) {
    document.querySelectorAll(".neural-card").forEach(card => {
        if (card.dataset.id === id) {
            card.classList.toggle("active");
            activeNeuralId = card.classList.contains("active") ? id : null;
        } else {
            card.classList.remove("active");
        }
    });
}

// ===== ЧАСТИЦЫ =====
function createParticles() {
    const wrap = document.createElement("div");
    wrap.className = "particles";

    for (let i = 0; i < 12; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 20 + Math.random() * 20 + "s";
        wrap.appendChild(p);
    }
    document.body.appendChild(wrap);
}

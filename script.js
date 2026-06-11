const neuralNetworks = [
    {
        id: "Aurin-pro",
        title: "Aurin",
        version: "Pro",
        icon: "fas fa-brain",
        badge: "premium",
        description: "Флагманская модель FernieX-AI для сложных задач, глубокого анализа и развёрнутых ответов.",
        features: [
            "Контекст до 128 000 токенов",
            "Поддержка множества языков, включая русский",
            "Отлично справляется с аналитикой, кодом и сложными рассуждениями",
            "Высокая точность и детализированность ответов"
        ]
    },
    {
        id: "Aurin-lite",
        title: "Aurin",
        version: "Lite",
        icon: "fas fa-bolt",
        badge: "free",
        description: "Быстрая и эффективная модель для повседневных задач и быстрых ответов.",
        features: [
            "Контекст до 32 000 токенов",
            "Оптимизирована для скорости и низкой задержки",
            "Подходит для чата, подсказок и простых запросов",
            "Поддержка множества языков"
        ]
    },
    {
        id: "Aurin-medium",
        title: "Aurin",
        version: "Medium",
        icon: "fas fa-fish",
        badge: "free",
        description: "Компактная модель от FernieX-AI, более точная в сравнении с Lite.",
        features: [
            "Контекст до 128 000 токенов",
            "Хороший баланс между скоростью и качеством",
            "Подходит для повседневного общения и задач"
        ]
    },
    {
        id: "Aurin",
        title: "Aurin",
        version: "Fine-Tune v.1",
        icon: "fas fa-code",
        badge: "free",
        description: "Fine-Tune модель на базе Mistral Large с кастомными настройками и доработками.",
        features: [
            "Контекст до 128 000 токенов",
            "Поддержка 80+ языков программирования",
            "Оптимизирована для генерации и объяснения кода",
            "Подходит для отладки, рефакторинга и code review"
        ]
    },
];
const grid = document.getElementById("neuralGrid");

neuralNetworks.forEach((n, i) => {
    const card = document.createElement("div");
    card.className = "neural-card";
    card.style.setProperty("--i", i);

    card.innerHTML = `
        <div class="neural-badge badge-${n.badge}">
            ${n.badge === "free" ? "Стандартная" : "Продвинутый"}
        </div>

        <div class="neural-card-header">
            <div class="neural-icon">
                <i class="${n.icon}"></i>
            </div>
            <h3 class="neural-title">
                ${n.title} <span>${n.version}</span>
            </h3>
        </div>

        <div class="neural-description">
            <div>
                <p>${n.description}</p>
                <ul class="neural-features">
                    ${n.features.map(f => `<li>${f}</li>`).join("")}
                </ul>

<a href="https://t.me/FernieXBot?start=select_AI_${n.id}" target="_blank" class="install-button">
    <i class="fab fa-telegram"></i> Установить
</a>

            </div>
        </div>
    `;

    card.addEventListener("click", e => {
        if (e.target.closest("a")) return;

        document.querySelectorAll(".neural-card").forEach(c => {
            c.classList.toggle("active", c === card);
        });
    });

    grid.appendChild(card);
});

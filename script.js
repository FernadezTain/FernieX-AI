const neuralNetworks = [
        {
    id: "step35_flash",
    title: "Step",
    version: "3.5 Flash",
    icon: "fas fa-bolt",
    badge: "free",
    description: "Быстрая и лёгкая модель для стабильной генерации текстов и повседневных задач.",
    features: [
        "Контекст ~8–10 тыс. токенов",
        "Поддержка множества языков",
        "Простая и быстрая генерация без сложных системных инструкций",
        "Подходит для чата и быстрых подсказок"
    ]
    },
    {
        id: "grok41fast",
        title: "Grok",
        version: "4.1 fast",
        icon: "fas fa-brain",
        badge: "premium",
        description: "Мощная аналитическая нейросеть с минимальным количеством ограничений.",
        features: [
            "2 млн. токенов контекст",
            "Сверхбыстрый отклик",
            "Глубокий анализ текста и кода",
            "Генерация и выполнение кода",
            "Снижение ошибок/галлюцинаций",
            "Подходит для дружеского общения на фразах нецензурной лексики и обсуждению 18+ контента",
        ]
    },
    {
        id: "ClaudeOpus_45",
        title: "Claude Opus",
        version: "4.5",
        icon: "fas fa-cloud",
        badge: "premium",
        description: "Мощная аналитическая нейросеть.",
        features: [
            "≈200 тыс. токенов контекст (до ~1 млн. с особыми режимами)",
            "Очень сильный reasoning и сложный анализ",
            "Лучшие в мире результаты по кодингу (SWE‑Bench)",
            "Генерация, ревью и сложный рефакторинг кода",
            "Работа с большими документами/процессами",
        ]
    }
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

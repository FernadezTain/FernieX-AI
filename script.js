const neuralNetworks = [
    {
        id: "grok41fast",
        title: "Grok",
        version: "4.1 fast",
        icon: "fas fa-brain",
        badge: "premium",
        description: "Мощная аналитическая нейросеть нового поколения.",
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
        id: "gemma3n_4B",
        title: "Gemma",
        version: "3n 4B",
        icon: "fas fa-gem",
        badge: "free",
        description: "Быстрая и экономичная модель для повседневных задач.",
        features: [
    "Контекст ~32 тыс. токенов",
    "Поддержка ~140 языков",
    "Без поддержки конструктивных диалогов. Постоянный напоминания и множество ограничений",
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
            ${n.badge === "free" ? "Бесплатно" : "Премиум"}
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

                <a href="https://t.me/FernieXBot" target="_blank" class="install-button">
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

const neuralNetworks = [
    {
        id: "grok",
        title: "Grok",
        version: "4.1",
        icon: "fas fa-brain",
        badge: "premium",
        description: "Мощная аналитическая нейросеть.",
        features: [
            "128K контекст",
            "Глубокий анализ",
            "Генерация кода"
        ]
    },
    {
        id: "gemma",
        title: "Gemma",
        version: "2.0",
        icon: "fas fa-gem",
        badge: "free",
        description: "Лёгкая и быстрая модель.",
        features: [
            "Быстрая",
            "Экономичная",
            "40+ языков"
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

                <a href="#" class="install-button">
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

// particles
const particles = document.querySelector(".particles");
for (let i = 0; i < 12; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    particles.appendChild(p);
}

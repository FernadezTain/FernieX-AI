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
    title: "Solar Pro 3",
    version: "Free",
    icon: "fas fa-sun",
    badge: "free", 
    description: "Мощная языковая модель с поддержкой огромного контекста, разработанная для эффективной генерации текста и глубокого анализа.",
    features: [
        "Mixture-of-Experts (MoE) архитектура для лучшей производительности при низкой нагрузке", 
        "Размер ~102 B параметров, из которых ~12 B активны за проход", 
        "Поддержка до ~128 000 токенов контекста — подходит для длинных документов", 
        "Оптимизирована для корейского языка с поддержкой английского и японского", 
        "Быстрая генерация текста, пригодна для черновиков, суммаризации и анализа", 
        "Бесплатная и доступная модель для экспериментов и интеграций", 
    ]
},
        {
    id: "ClaudeOpus_45",
    title: "Pony",
    version: "Alpha",
    icon: "fas fa-horse-head",
    badge: "free",
    description: "Экспериментальная нейросеть, ориентированная на креативное общение.",
    features: [
        "Хорошо подходит для ролевых диалогов",
        "Креативные и нестандартные ответы",
        "Гибкая интерпретация пользовательских инструкций"
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

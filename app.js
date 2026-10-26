const projects = [
  {
  "id": "01",
  "name": "无人机飞控平台",
  "en": "MODULAR FLIGHT PLATFORM",
  "category": "无人系统 · 硬件平台",
  "year": "—",
  "type": "Hardware Platform",
  "color": "blue",
  "mark": "飞",
  "title": "从零开始，\n搭建飞行平台。",
  "summary": "从飞控与动力组件选型、250 mm 机架建模，到手工焊接与整机集成，完成一台可飞行的无人机 MVP，并为后续功能扩展打下硬件基础。",
  "tags": [
    "SolidWorks 结构设计",
    "飞控系统集成",
    "硬件焊接",
    "MVP 验证"
  ],
  "role": "结构设计 · 硬件选型 · 焊接组装 · 系统集成",
  "duration": "从零到一 · MVP 阶段",
  "result": "完成可飞行的基础无人机平台",
  "image": "drone-keyshot.png",
  "imageAlt": "无人机飞控平台的 KeyShot 渲染图",
  "overview": "这不是一架一次性的无人机，而是一个可以持续迭代的飞控平台。项目从电池、PIX4 飞控、PM07 电源模块、遥控器、电调与电机等组件选型开始；随后使用 SolidWorks 自主设计 250 mm 轴距机架，并完成手工焊接、整机组装与基础飞行验证，最终形成可飞行的 MVP。当前平台提供了可工作的飞行基座。后续可接入新的核心板与传感器，逐步扩展平台能力。",
  "highlights": [
    "使用 SolidWorks 完成 250 mm 轴距机架的结构设计。",
    "完成飞控、电源与动力组件的选型、焊接和整机集成。",
    "实现基础飞行验证，并规划以核心板和传感器为基础的后续扩展方向。"
  ]
},
  {
    id: "02", name: "流动城市", en: "CITY IN MOTION", category: "城市出行 · 服务设计", year: "2024", type: "Service Design", color: "blue", mark: "流", title: "城市很大，\n出发很简单。", summary: "重新想象城市里的最后一公里。用更清晰的服务流程和更友好的移动体验，让低碳出行自然融入每一天。", tags: ["用户研究", "服务设计", "移动应用", "设计系统"], role: "研究 · 服务 · UI/UX", duration: "16 周", result: "日活增长 2.4 倍", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85", imageAlt: "蓝色时刻的城市天际线", overview: "面对复杂的城市交通网络，我们从真实通勤场景出发，把信息、路线和服务收拢到一个简单易懂的体验里。让人少一点计划，多一点自在。", highlights: ["围绕真实通勤任务重组信息架构", "将多种交通方式整合进单一行程", "以开放组件库支持跨城市快速部署"]
  },
  {
    id: "03", name: "未完待续", en: "GOOD THINGS AHEAD", category: "文化内容 · 品牌设计", year: "2024", type: "Culture & Identity", color: "peach", mark: "未", title: "好故事，\n值得慢慢讲。", summary: "为独立出版与文化内容平台创造新的阅读入口。以温暖的编辑视角，连接创作者、好内容和愿意停留的人。", tags: ["品牌设计", "内容策略", "网页设计", "动效语言"], role: "品牌 · 创意指导 · 网页", duration: "10 周", result: "内容阅读时长 +52%", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1800&q=85", imageAlt: "阳光下摊开的书与纸张", overview: "信息越快，认真阅读越显珍贵。我们让平台回到书页般的阅读节奏，以清晰的内容层级和轻巧的交互，让发现好故事本身成为一种乐趣。", highlights: ["为长短内容建立统一但灵活的版式", "让编辑精选与个性推荐自然共存", "通过轻动效增强阅读节奏与反馈"]
  },
  {
    id: "04", name: "微光计划", en: "A LITTLE LIGHT", category: "公益倡议 · 数字产品", year: "2023", type: "Digital for Good", color: "lilac", mark: "光", title: "一点点光，\n也能照很远。", summary: "把社区公益行动变得更容易参与。打造连接志愿者与在地组织的轻量工具，让每一次小小行动都能被看见。", tags: ["服务设计", "公益品牌", "数字体验", "社区共创"], role: "共创工作坊 · 产品设计", duration: "8 周", result: "1,200+ 志愿者参与", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=85", imageAlt: "社区伙伴聚在一起交流", overview: "微光计划从一个简单的问题开始：如果参与社区公益像约朋友见面一样容易，会发生什么？我们与本地组织和居民共同设计了一套轻量的发现、报名与反馈流程。", highlights: ["与社区组织共同梳理真实服务需求", "将志愿活动信息设计成清晰可行动的卡片", "建立行动反馈机制，形成持续参与的循环"]
  }
];

const nav = document.querySelector("#project-nav");
const detail = document.querySelector("#project-detail");
let activeIndex = 0;

function renderNav() {
  nav.innerHTML = projects.map((project, index) => `<button class="project-link ${index === activeIndex ? "active" : ""}" data-index="${index}" aria-current="${index === activeIndex ? "page" : "false"}"><span class="project-number mono">${project.id}</span><span class="project-link-copy"><strong>${project.name}</strong><small>${project.category}</small></span><span class="nav-arrow">↗</span></button>`).join("");
  document.querySelector("#project-count").textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  document.querySelectorAll(".project-link").forEach(button => button.addEventListener("click", () => selectProject(Number(button.dataset.index))));
}

function renderProject(project) {
  detail.innerHTML = `<div class="project-heading"><div class="project-heading-left"><span class="project-index mono">PROJECT ${project.id} <b>•</b> ${project.year}</span><h2>${project.name}<span class="heading-en">${project.en}</span></h2></div><span class="project-category">${project.category}</span></div>
    <div class="hero-art ${project.color}" style="--hero-image:url('${project.image}')"><img class="hero-image" src="${project.image}" alt="${project.imageAlt}" /><div class="hero-shade"></div><div class="hero-label"><span class="hero-label-top mono">${project.type} <span>—</span> ${project.year}</span><span class="hero-title">${project.title.replace("\n", "<br>")}</span><span class="hero-caption">${project.summary}</span></div><div class="hero-stamp" aria-hidden="true">${project.mark}<span>STUDIO<br />ARCHIVE</span></div><span class="hero-counter mono">${project.id} <i>/</i> ${String(projects.length).padStart(2,"0")}</span></div>
    <div class="project-meta"><div><span class="meta-label">我的角色</span><span>${project.role}</span></div><div><span class="meta-label">项目周期</span><span>${project.duration}</span></div><div><span class="meta-label">项目成果</span><span>${project.result}</span></div></div>
    <section class="story-grid"><div><p class="section-label mono">01 — THE STORY</p><h3>从一个好问题<br />开始。</h3></div><div class="story-copy"><p>${project.overview}</p><div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div></div></section>
    <section class="highlights"><div class="highlights-head"><p class="section-label mono">02 — WHAT WE DID</p><span>关键工作</span></div><div class="highlight-list">${project.highlights.map((item, i) => `<div class="highlight-row"><span class="mono">0${i + 1}</span><p>${item}</p><span class="highlight-plus">↗</span></div>`).join("")}</div></section>
    <div class="next-project"><span class="section-label mono">继续浏览</span><button id="next-project">下一个项目 <span>→</span></button></div>`;
  document.querySelector("#next-project").addEventListener("click", () => selectProject((activeIndex + 1) % projects.length));
}

function selectProject(index) {
  activeIndex = index;
  const project = projects[index];
  renderNav();
  renderProject(project);
  document.querySelector(".kicker").textContent = `SELECTED WORK — ${project.id} / ${String(projects.length).padStart(2, "0")}`;
  history.replaceState(null, "", `#${project.id}`);
}

function updateClock() {
  document.querySelector("#clock").textContent = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#footer-year").textContent = new Date().getFullYear();
const initialId = location.hash.slice(1);
const initialIndex = projects.findIndex(project => project.id === initialId);
renderNav();
renderProject(projects[initialIndex < 0 ? 0 : initialIndex]);
if (initialIndex >= 0) { activeIndex = initialIndex; renderNav(); document.querySelector(".kicker").textContent = `SELECTED WORK — ${projects[activeIndex].id} / ${String(projects.length).padStart(2, "0")}`; }
updateClock();
setInterval(updateClock, 30000);

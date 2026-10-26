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
    id: "02", name: "水下工业产品全流程", en: "UNDERWATER PRODUCT DEVELOPMENT", category: "产品设计 · 生产 · 测试", year: "持续迭代", type: "Design · Production · Test", color: "blue", mark: "水", title: "设计、生产、测试，\n全流程。", summary: "围绕水下成像、照明与激光组件，独立负责产品设计、生产实现与测试验证；使用 SolidWorks 设计仿真、KeyShot 渲染，特定加工商加工，并基于现有产品持续迭代。", tags: ["水下工业相机", "水下照明组件", "水下激光组件", "设计 · 生产 · 测试"], role: "全程负责 · 设计、生产与测试", duration: "现有产品持续迭代", result: "已完成产品：6 类", image: "", imageAlt: "", productSeries: true,
    overview: "本系列展示本人负责的水下工业产品从设计、生产到测试的实际工作，按产品类别呈现成果。使用 SolidWorks 完成结构设计，并通过 KeyShot 输出外观渲染；生产与测试资料按实际可公开范围补充。页面不公开关键结构、内部布局、尺寸图纸及其他设计机密。",
    products: [
      { name: "水下双目工业相机", en: "UNDERWATER STEREO CAMERA", family: "成像系统", image: "", description: "", specs: [{ label: "工作水深", value: "600 米级" }, { label: "工作温度", value: "−5 至 65 °C" }, { label: "成像规格", value: "XXX" }, { label: "接口类别", value: "PoE" }] },
      { name: "水下单目工业相机", en: "UNDERWATER MONO CAMERA", family: "成像系统", image: "./image/单目相机.jpg", description: "", specs: ["防护/工作深度", "工作温度范围", "成像规格", "接口类别"] },
      { name: "水下 USB 相机", en: "UNDERWATER USB CAMERA", family: "成像系统", image: "", description: "", specs: ["防护/工作深度", "工作温度范围", "成像规格", "USB 接口规格"] },
      { name: "水下灯筒", en: "UNDERWATER LIGHT CYLINDER", family: "照明组件", image: "./image/无标题.png", description: "", specs: ["防护/工作深度", "工作温度范围", "照明参数", "供电类别"] },
      { name: "水下激光筒", en: "UNDERWATER LASER CYLINDER", family: "激光组件", image: "", description: "", specs: ["防护/工作深度", "工作温度范围", "激光类别与参数", "供电类别"] },
      { name: "水下灯板", en: "UNDERWATER LIGHT BOARD", family: "照明组件", image: "", description: "", specs: ["防护/工作深度", "工作温度范围", "照明参数", "供电类别"] }
    ],
    documentGroups: [
      { title: "设计输入与设计控制", en: "DESIGN CONTROL", docs: ["产品需求/产品规格书", "需求—验证追踪矩阵", "设计评审记录", "设计风险分析（如 DFMEA）", "设计验证计划与报告（DVP&R）", "工程变更申请与变更记录"] },
      { title: "生产准备与过程控制", en: "PRODUCTION CONTROL", docs: ["产品工艺流程图", "作业指导书（SOP）", "装配与检验作业指导书", "来料检验规范与记录", "首件检验报告", "过程检验记录", "不合格品报告与纠正措施记录"] },
      { title: "测试、检验与交付", en: "TEST & RELEASE", docs: ["测试计划与测试报告", "防水/水压验证方案与记录", "功能与电气检查记录", "检验设备校准记录", "最终检验与放行清单", "产品版本与追溯记录", "包装、安装及维护说明"] }
    ]
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

function renderProductSpecs(product) {
  return product.specs.map(spec => {
    const label = typeof spec === "string" ? spec : spec.label;
    const value = typeof spec === "string" ? "待补充" : (spec.value || "待补充");
    return `<div><dt>${label}</dt><dd>${value}</dd></div>`;
  }).join("");
}

function renderProject(project) {
  if (project.productSeries) {
    detail.innerHTML = `<div class="project-heading"><div class="project-heading-left"><span class="project-index mono">PROJECT ${project.id} <b>•</b> PRODUCT SERIES</span><h2>${project.name}<span class="heading-en">${project.en}</span></h2></div><span class="project-category">${project.category}</span></div>
      <div class="hero-art blue no-image"><div class="engineering-grid" aria-hidden="true"></div><div class="hero-label"><span class="hero-label-top mono">${project.type} <span>—</span> ${project.products.length} PRODUCT TYPES</span><span class="hero-title">${project.title.replace("\n", "<br>")}</span><span class="hero-caption">${project.summary}</span></div><div class="hero-stamp" aria-hidden="true">水<span>PRODUCT<br />DESIGN</span></div><span class="hero-counter mono">${project.id} <i>/</i> ${String(projects.length).padStart(2,"0")}</span></div>
      <div class="project-meta"><div><span class="meta-label">项目职责</span><span>${project.role}</span></div><div><span class="meta-label">工作方式</span><span>${project.duration}</span></div><div><span class="meta-label">设计工具</span><span>SolidWorks · KeyShot</span></div></div>
      <section class="story-grid"><div><p class="section-label mono">01 — PRODUCT SERIES</p><h3>设计、生产、测试<br />由我全程负责。</h3></div><div class="story-copy"><p>${project.overview}</p><div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div></div></section>
      <section class="product-showcase"><div class="highlights-head"><p class="section-label mono">02 — PRODUCT SERIES</p><span>产品系列</span></div><div class="product-grid">${project.products.map((product, i) => `<article class="product-card"><div class="product-visual ${product.image ? "has-image" : ""}" ${product.image ? "" : `role="img" aria-label="${product.name}图片待补充"`}>${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />` : ""}</div><div class="product-card-body"><span class="product-family mono">0${i + 1} · ${product.family}</span><h3>${product.name}</h3><span class="product-en">${product.en}</span>${product.description ? `<p class="product-description">${product.description}</p>` : ""}<dl class="product-specs">${renderProductSpecs(product)}</dl></div></article>`).join("")}</div></section>
      <section class="document-system"><div class="highlights-head"><p class="section-label mono">03 — ENGINEERING DOCUMENTS</p><span>工程资料框架</span></div><p class="document-intro">以下为可按项目实际情况建立和维护的工程文件类别。此处展示文件类型，不展示文件内容、客户信息、结构细节或内部参数。</p>${project.documentGroups.map((group, i) => `<details class="capability-card" ${i === 0 ? "open" : ""}><summary><span class="mono">0${i + 1}</span><strong>${group.title}</strong><small>${group.en}</small><b aria-hidden="true">＋</b></summary><div class="capability-copy"><ul>${group.docs.map(doc => `<li>${doc}</li>`).join("")}</ul></div></details>`).join("")}</section>
      <div class="next-project"><span class="section-label mono">继续浏览</span><button id="next-project">下一个项目 <span>→</span></button></div>`;
    document.querySelector("#next-project").addEventListener("click", () => selectProject((activeIndex + 1) % projects.length));
    return;
  }
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

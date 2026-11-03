const projects = [
  {
    id: "01",
    name: "无人机飞控平台",
    en: "模块化飞行平台",
    category: "无人系统 · 硬件平台",
    year: "—",
    type: "Hardware Platform",
    color: "blue",
    mark: "飞",
    title: "250 mm 机架\n飞控与动力集成",
    summary: "从飞控与动力组件选型、250 mm 机架建模，到手工焊接与整机集成，完成一台可飞行的无人机 MVP，并为后续功能扩展打下硬件基础。",
    tags: ["SolidWorks 结构设计", "飞控系统集成", "硬件焊接", "MVP 验证"],
    role: "结构设计 · 硬件选型 · 焊接组装 · 系统集成",
    duration: "从零到一 · MVP 阶段",
    result: "完成可飞行的基础无人机平台",
    image: "drone-keyshot.png",
    imageAlt: "无人机飞控平台的 KeyShot 渲染图",
    overview: "这不是一架一次性的无人机，而是一个可以持续迭代的飞控平台。项目从电池、PIX4 飞控、PM07 电源模块、遥控器、电调与电机等组件选型开始；随后使用 SolidWorks 自主设计 250 mm 轴距机架，并完成手工焊接、整机组装与基础飞行验证，最终形成可飞行的 MVP。当前平台提供了可工作的飞行基座。后续可接入新的核心板与传感器，逐步扩展平台能力。",
    highlights: [
      "使用 SolidWorks 完成 250 mm 轴距机架的结构设计。",
      "完成飞控、电源与动力组件的选型、焊接和整机集成。",
      "实现基础飞行验证，并规划以核心板和传感器为基础的后续扩展方向。"
    ]
  },
  {
    id: "02",
    name: "水下工业产品全流程",
    category: "产品设计 · 生产 · 测试",
    year: "持续迭代",
    type: "Design · Production · Test",
    color: "blue",
    mark: "水",
    title: "水下成像、照明\n与激光组件",
    summary: "围绕水下成像、照明与激光组件，独立负责产品设计、生产实现与测试验证；使用 SolidWorks 设计仿真、KeyShot 渲染，特定加工商加工，并基于现有产品持续迭代。",
    tags: ["水下工业相机", "水下照明组件", "水下激光组件", "设计 · 生产 · 测试"],
    role: "全程负责 · 设计、生产与测试",
    duration: "现有产品持续迭代",
    result: "已完成产品：6 类",
    image: "./image/双目相机渲染.png",
    imageAlt: "水下双目相机 KeyShot 渲染图",
    productSeries: true,
    overview: "本系列展示水下工业产品从设计、生产到测试的实际工作，按产品类别呈现成果。使用 SolidWorks 完成结构设计，并通过 KeyShot 输出外观渲染；生产与测试资料按实际可公开范围补充。页面不公开关键结构、内部布局、尺寸图纸及其他设计机密。",
    products: [
      {
        name: "水下双目工业相机", en: "UNDERWATER STEREO CAMERA", family: "成像系统", image: "./image/双目相机渲染.png",
        specs: [
          { label: "工作水深", value: "600 m" },
          { label: "工作温度", value: "0～45 °C" },
          { label: "单路分辨率（参考）", value: "3072 × 2048 / 4024 × 3036 / 5120 × 3840" },
          { label: "单路帧率（对应上述档位，参考）", value: "19.1 / 10 / 5.9 fps" },
          { label: "传感器（参考）", value: "IMX178 / IMX226 / AR2020" },
          { label: "像素深度（参考）", value: "8 / 12 bit" },
          { label: "供电方式", value: "PoE" }
        ]
      },
      {
        name: "水下单目工业相机", en: "UNDERWATER MONO CAMERA", family: "成像系统", image: "./image/单目相机.png",
        description: "LTCM-060 / 120 / 200 系列，以下三档参数按型号顺序对应。",
        specs: [
          { label: "工作水深", value: "600 m" },
          { label: "工作温度", value: "0～45 °C" },
          { label: "分辨率", value: "3072 × 2048 / 4024 × 3036 / 5120 × 3840" },
          { label: "帧率（对应上述档位）", value: "19.1 / 10 / 5.9 fps" },
          { label: "传感器", value: "IMX178 / IMX226 / AR2020" },
          { label: "像素深度", value: "8 / 12 bit" },
          { label: "镜头焦距", value: "6 / 8 / 16 mm" },
          { label: "水下视场", value: "39° × 32° / 32° × 29° / 16° × 12°" },
          { label: "数据接口", value: "GigE" },
          { label: "供电方式", value: "12～24 VDC / PoEIEEE 802.3af" }
        ]
      },
      {
        name: "水下微型 USB 相机", en: "UNDERWATER MINI USB CAMERA", family: "成像系统", image: "./image/USB相机.png",
        specs: [
          { label: "工作水深", value: "100 m" },
          { label: "工作温度", value: "0～45 °C" },
          { label: "数据接口", value: "USB" }
        ]
      },
      {
        name: "水下灯筒", en: "UNDERWATER LIGHT CYLINDER", family: "照明组件", image: "./image/LED手电筒.png",
        description: "LTC-HD600 系列，单颗 COB 光源，四种标称功率可选。",
        specs: [
          { label: "工作水深", value: "600 m" },
          { label: "工作温度", value: "−20～60 °C" },
          { label: "防护等级", value: "IP68" },
          { label: "COB 标称功率（可选）", value: "15 / 30 / 40 / 50 W" },
          { label: "色温（可选）", value: "3000 / 4000 / 6000 K" },
          { label: "输入电压", value: "12 V" }
        ]
      },
      {
        name: "水下激光筒", en: "UNDERWATER LASER CYLINDER", family: "激光组件", image: "./image/激光器.png",
        description: "光学及电气参数待激光模块型号确认。",
        specs: [
          { label: "工作水深", value: "600 m" },
          { label: "工作温度（设计目标）", value: "0～40 °C" },
          { label: "波长 / 输出光功率", value: "450 nm" },
          { label: "激光安全等级", value: "Class lllb" },
          { label: "输入电压", value: "12VDC" }
        ]
      },
      {
        name: "水下灯板", en: "UNDERWATER LIGHT BOARD", family: "照明组件", image: "./image/LED光源.png",
        description: "LTC-CLB16-3002，16 颗 COB，8 串 2 并；典型功率按 288 V × 2 A 计算。",
        specs: [
          { label: "工作水深", value: "300 m" },
          { label: "工作温度", value: "−20～60 °C" },
          { label: "防护等级", value: "IP68" },
          { label: "光源 / 色温", value: "16 颗 COB / 6000 K 白光" },
          { label: "典型驱动功率", value: "约 576 W" },
          { label: "驱动功率范围", value: "518.4～729.6 W" },
          { label: "驱动电压 / 电流", value: "288～304 VDC / 1.8～2.4 A" },
          { label: "配套电源", value: "300 V / 2 A 恒流电源" }
        ]
      }
    ],
    documentGroups: [
      { title: "设计输入与设计控制", en: "DESIGN CONTROL", docs: ["产品需求/产品规格书", "需求—验证追踪矩阵", "设计评审记录", "设计风险分析（如 DFMEA）", "设计验证计划与报告（DVP&R）", "工程变更申请与变更记录"] },
      { title: "生产准备与过程控制", en: "PRODUCTION CONTROL", docs: ["产品工艺流程图", "作业指导书（SOP）", "装配与检验作业指导书", "来料检验规范与记录", "首件检验报告", "过程检验记录", "不合格品报告与纠正措施记录"] },
      { title: "测试、检验与交付", en: "TEST & RELEASE", docs: ["测试计划与测试报告", "防水/水压验证方案与记录", "功能与电气检查记录", "检验设备校准记录", "最终检验与放行清单", "产品版本与追溯记录", "包装、安装及维护说明"] }
    ]
  }
];

const nav = document.querySelector("#project-nav");
const detail = document.querySelector("#project-detail");
let activeIndex = 0;

const pad2 = n => String(n).padStart(2, "0");

/* ---------- 侧栏导航 ---------- */
function renderNav() {
  nav.innerHTML = projects.map((project, index) => `
    <button class="project-link ${index === activeIndex ? "active" : ""}"
            data-index="${index}"
            aria-current="${index === activeIndex ? "page" : "false"}">
      <span class="project-number mono">${project.id}</span>
      <span class="project-link-copy">
        <strong>${project.name}</strong>
        <small>${project.category}</small>
      </span>
    </button>`).join("");

  document.querySelector("#project-count").textContent =
    `${pad2(activeIndex + 1)} / ${pad2(projects.length)}`;

  document.querySelectorAll(".project-link").forEach(button =>
    button.addEventListener("click", () => selectProject(Number(button.dataset.index))));
}

/* ---------- 产品规格 ---------- */
function renderProductSpecs(product) {
  return product.specs.map(spec => {
    const label = typeof spec === "string" ? spec : spec.label;
    const value = typeof spec === "string" ? "待补充" : (spec.value || "待补充");
    return `<div><dt>${label}</dt><dd>${value}</dd></div>`;
  }).join("");
}

/* ---------- 下一个项目 ---------- */
function renderNextProject() {
  const next = projects[(activeIndex + 1) % projects.length];
  return `<div class="next-project">
    <span class="section-label mono">下一个</span>
    <button id="next-project">${next.name} <span>→</span></button>
  </div>`;
}

function bindNextProject() {
  document.querySelector("#next-project")
    .addEventListener("click", () => selectProject((activeIndex + 1) % projects.length));
}

/* ---------- 详情渲染 ---------- */
function renderProject(project) {
  const heroMeta = [project.type, project.year]
    .filter(v => v && v !== "—")
    .join(" · ");

  const indexLabel = [`PROJECT ${project.id}`,
    project.year && project.year !== "—" ? project.year : ""
  ].filter(Boolean).join(" · ");

  /* ---- 产品系列分支 ---- */
  if (project.productSeries) {
    detail.innerHTML = `
      <div class="project-heading">
        <div class="project-heading-left">
          <span class="project-index mono">PROJECT ${project.id} <b>·</b> PRODUCT SERIES</span>
          <h1>${project.name}<span class="heading-en">${project.en}</span></h1>
        </div>
        <span class="project-category">${project.category}</span>
      </div>

      <div class="hero-art blue no-image">
        <div class="engineering-grid" aria-hidden="true"></div>
        <div class="hero-label">
          <span class="hero-label-top mono">${project.type} · ${project.products.length} 类产品</span>
          <span class="hero-title">${project.title.replace(/\n/g, "<br>")}</span>
          <span class="hero-caption">${project.summary}</span>
        </div>
        <div class="hero-stamp" aria-hidden="true">${project.mark}</div>
        <span class="hero-counter mono">${project.id} <i>/</i> ${pad2(projects.length)}</span>
      </div>

      <div class="project-meta">
        <div><span class="meta-label">项目职责</span><span>${project.role}</span></div>
        <div><span class="meta-label">工作方式</span><span>${project.duration}</span></div>
        <div><span class="meta-label">设计工具</span><span>SolidWorks · KeyShot</span></div>
      </div>

      <section class="story-grid">
        <div>
          <h3>工作范围</h3>
        </div>
        <div class="story-copy">
          <p>${project.overview}</p>
          <div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        </div>
      </section>

      <section class="product-showcase">
        <div class="highlights-head">
          <span>产品系列</span>
        </div>
        <div class="product-grid">
          ${project.products.map((product, i) => `
            <article class="product-card">
              <div class="product-visual ${product.image ? "has-image" : ""}" ${product.image ? "" : `role="img" aria-label="${product.name}图片待补充"`}>
                ${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />` : ""}
              </div>
              <div class="product-card-body">
                <span class="product-family mono">${pad2(i + 1)} · ${product.family}</span>
                <h3>${product.name}</h3>
                <span class="product-en">${product.en}</span>
                ${product.description ? `<p class="product-description">${product.description}</p>` : ""}
                <dl class="product-specs">${renderProductSpecs(product)}</dl>
              </div>
            </article>`).join("")}
        </div>
      </section>

      <section class="document-system">
        <div class="highlights-head">
          <span>工程资料框架</span>
        </div>
        <p class="document-intro">以下为可按项目实际情况建立和维护的工程文件类别。此处展示文件类型，不展示文件内容、客户信息、结构细节或内部参数。</p>
        ${project.documentGroups.map((group, i) => `
          <details class="capability-card" ${i === 0 ? "open" : ""}>
            <summary>
              <span class="mono">${pad2(i + 1)}</span>
              <strong>${group.title}</strong>
              <small>${group.en}</small>
              <b aria-hidden="true">＋</b>
            </summary>
            <div class="capability-copy">
              <ul>${group.docs.map(doc => `<li>${doc}</li>`).join("")}</ul>
            </div>
          </details>`).join("")}
      </section>

      ${renderNextProject()}`;
    bindNextProject();
    return;
  }

  /* ---- 普通项目分支 ---- */
  detail.innerHTML = `
    <div class="project-heading">
      <div class="project-heading-left">
        <span class="project-index mono">${indexLabel}</span>
        <h1>${project.name}<span class="heading-en">${project.en}</span></h1>
      </div>
      <span class="project-category">${project.category}</span>
    </div>

    <div class="hero-art ${project.color}" style="--hero-image:url('${project.image}')">
      <img class="hero-image" src="${project.image}" alt="${project.imageAlt}" />
      <div class="hero-shade"></div>
      <div class="hero-label">
        <span class="hero-label-top mono">${heroMeta}</span>
        <span class="hero-title">${project.title.replace(/\n/g, "<br>")}</span>
        <span class="hero-caption">${project.summary}</span>
      </div>
      <div class="hero-stamp" aria-hidden="true">${project.mark}</div>
      <span class="hero-counter mono">${project.id} <i>/</i> ${pad2(projects.length)}</span>
    </div>

    <div class="project-meta">
      <div><span class="meta-label">我的角色</span><span>${project.role}</span></div>
      <div><span class="meta-label">项目周期</span><span>${project.duration}</span></div>
      <div><span class="meta-label">项目成果</span><span>${project.result}</span></div>
    </div>

    <section class="story-grid">
      <div>
        <h3>项目概述</h3>
      </div>
      <div class="story-copy">
        <p>${project.overview}</p>
        <div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
    </section>

    <section class="highlights">
      <div class="highlights-head">
        <span>关键工作</span>
      </div>
      <div class="highlight-list">
        ${project.highlights.map((item, i) => `
          <div class="highlight-row">
            <span class="mono">${pad2(i + 1)}</span>
            <p>${item}</p>
          </div>`).join("")}
      </div>
    </section>

    ${renderNextProject()}`;
  bindNextProject();
}

/* ---------- 选中 ---------- */
function selectProject(index) {
  activeIndex = index;
  const project = projects[index];
  renderNav();
  renderProject(project);
  history.replaceState(null, "", `#${project.id}`);
}

/* ---------- 时钟与初始化 ---------- */
function updateClock() {
  document.querySelector("#clock").textContent =
    new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(new Date());
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#footer-year").textContent = new Date().getFullYear();

const initialId = location.hash.slice(1);
const initialIndex = projects.findIndex(project => project.id === initialId);
selectProject(initialIndex < 0 ? 0 : initialIndex);

updateClock();
setInterval(updateClock, 30000);
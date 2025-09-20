import React, { useEffect, useMemo, useState } from "react";

// --- Helper: simple i18n strings ------------------------------------------------
const COPY = {
  en: {
    navIntro: "Introduction",
    navBio: "Biography",
    navPortfolio: "Portfolio",
    navCV: "CV",
    navContact: "Contact",
    tagline: "AI Product Manager · Venture Analyst/Investor · Quant Researcher · CFA Learner",
    introHeading: "Hi, I’m Zikang (Khan) Zheng",
    introBody:
      "Hi, my name is Zikang Zheng, also known as Khan. I’m an AI product manager, venture analyst/investor, and quant researcher for US Stock passionate about the intersection of innovation, technology, and finance—especially within the Web3 and AI+Finance space. My career goal is to build a better future society through responsible tech and strategic investment.\n\nMy journey has taken me across Zhejiang, Beijing， Darmstadt, Hawaii, Vancouver, and now Singapore, shaping my global perspective and multidisciplinary approach to product strategy and design. With a BSc in Mathematical Sciences from the University of British Columbia (UBC 16Fall) and an MSc in Engineering Design & Innovation from the National University of Singapore (NUS 24Spring), I specialize in transforming ideas into scalable, human-centric digital solutions. Practice Kyudo(Japanese Archery) for 5 years.\n\nProfessionally, I’ve worked in Canada, China, Germany, and Singapore, leading product teams, building AI-driven platforms, managing VC deal flow, and optimizing go-to-market strategies. I thrive in fast-paced environments where I can bridge technology, business, and user needs.\n\n\n Let’s connect and create something meaningful! 🚀\n\n**Keywords**: Product Management, Investment, Finance Model, Design, AI/ML, CFA Learning",
    bioHeading: "Biography",
    bioP1: "Currently in accelerating my career",
    bioP2:
      "My leadership style is democratic. Leadership, to me, is about fostering an environment of trust, support, empathy, and empowerment. I am committed to promoting diversity and inclusion within my teams, believing that the convergence of different ideas and perspectives is where true innovation begins. My aim is to not just solve technical problems but to enhance the emotional and social fabric of our communities through thoughtful design and strategic innovation!",
    portfolioHeading: "Portfolio Showcase",
    portfolioNote:
      "Click any project to view details (pop-up). Replace images and copy with your own when ready.",
    cvHeading: "Curriculum Vitae",
    cvFull: "Resume — Full Experience (PDF)",
    cvOnePager: "One-Pager CV — Experience (PDF)",
    cvTip: "Put your files at /resume.pdf and /onepager.pdf in your public folder.",
    contactHeading: "Contact",
    chatCTA: "Chat with my GPT",
    langEN: "EN",
    langZH: "中文",
    view: "Open",
    download: "Download",
    close: "Close",
  },
  zh: {
    navIntro: "经历",
    navBio: "简介",
    navPortfolio: "作品集",
    navCV: "简历",
    navContact: "联系",
    tagline: "AI 产品经理 · 创投分析师 · 早期投资人 · CFA进修中",
    introHeading: "你好，我是郑子康（Khan）",
    introBody:
      "嗨，我叫郑子康，也叫 Khan。我是一名 AI 产品经理、创投投资分析师与美股量化分析师，专注于创新、技术与金融的交叉，尤其是 Web3 与 AI+Finance 领域。我的职业目标是通过负责任的科技与战略投资，构建更美好的未来社会。\n\n我的足迹遍布浙江、北京、达姆施塔特、夏威夷、温哥华，如今在新加坡，这些经历塑造了我的全球视野与跨学科产品策略与设计方法。我毕业于英属哥伦比亚大学（UBC 2016秋）数理科学学士，以及新加坡国立大学（NUS 2024春）工程设计与创新硕士；我擅长将想法转化为可规模化、以人为本的数字化解决方案。\n\n职业上，我曾在加拿大、中国、德国与新加坡工作，带领产品团队、搭建 AI 平台、管理 VC 项目流并优化 GTM 策略。我热爱在快节奏环境中连接技术、商业与用户需求。修行日式弓道5年时间。\n\n期待与你合作，共创有意义的事！🚀\n\n关键词：产品管理、投资、财务建模、设计、AI/机器学习、CFA进修中",
    bioHeading: "简介",
    bioP1: "目前正加速推进我的职业发展",
    bioP2:
      "我的领导风格偏向民主型。对我而言，领导力意味着营造信任、支持、共情与赋能的团队环境。我致力于推动多元与包容，相信不同观点的汇聚孕育真正的创新。我的目标不仅是解决技术问题，更希望通过周到的设计与战略创新，提升社区的情感与社会联结！",
    portfolioHeading: "作品与产品展示",
    portfolioNote: "点击任意项目以查看详情（弹窗）。上线前可替换图片与文案。",
    cvHeading: "个人简历",
    cvFull: "完整简历（PDF）",
    cvOnePager: "一页版简历（PDF）",
    cvTip: "请将文件放在 public 目录下的 /resume.pdf 与 /onepager.pdf。",
    contactHeading: "联系我",
    chatCTA: "与我的GPT聊一下",
    langEN: "EN",
    langZH: "中文",
    view: "查看",
    download: "下载",
    close: "关闭",
  },
};

// --- Demo portfolio data (replace with your real content/images) ---------------
const PROJECTS = [
  {
    id: "clear-cane",
    title: {
      en: "Clear Cane with Night Mobility",
      zh: "夜行可视智能手杖（Clear Cane）",
    },
    thumb:
      "Cane/1.png",
    images: [
      "Cane/2.png",
      "Cane/3.png",
    ],
    desc: {
      en: "Assistive walking cane featuring modular design, optimized rubber tip geometry for stability, and integrated lighting for safe night mobility. Led user research, materials testing, rapid prototyping, and product development.",
      zh: "模块化手杖产品，优化底部橡胶几何以提升稳定性，并集成照明以提升夜间出行安全。负责领导用户研究、材料测试、快速原型与产品开发。",
    },
    tags: ["Product Design", "Assistive Tech", "Prototyping", "IoT"],
  },
  {
    id: "xr-f1",
    title: { en: "XR/VR F1 Race Experience Platform", 
             zh: "XR F1 观赛平台" },
    thumb: "VR-XR/1.png",
    images: [
      "VR-XR/2.png",
      "VR-XR/3.png",
    ],
    desc: {
      en: "Immersive social viewing with analytics overlays, real‑time telemetry, and creator tooling. Defined subscription tiers and instrumented engagement funnels.",
      zh: "沉浸式社交观赛，叠加数据分析、实时遥测与创作者工具。设计A/B测试订阅分层并搭建用户参与度漏斗。",
    },
    tags: ["XR/VR", "Growth", "SEO", "Monetization"],
  },
  {
    id: "dealflow-dash",
    title: { en: "VC Dealflow Dashboard", 
             zh: "VC 投资项目数据看板" },
    thumb: "VC/1.png",
    images: [
    ],
    desc: {
      en: "Pipeline triage with scoring models, market heatmaps, and partner notes. Improved diligence throughput and reduced time‑to‑decision.",
      zh: "利用Agentic AI搭建评分模型、市场热力图与合伙人批注进行项目流分拣，提升尽调效率并缩短决策周期。",
    },
    tags: ["VC", "Analytics", "Agentic AI"],
  },
  {
    id: "maritime-drone",
    title: {
      en: "Maritime Oil Spill Drone Analytics",
      zh: "船只原油泄漏无人机成像联动分析系统",
    },
    thumb: "Martime/1.png",
    images: [
      "Martime/2.png",
      "Martime/3.png",
    ],
    desc: {
      en: "Edge‑deployed Computer Vision models for oil spill detection and response planning. Coordinated system requirements and simulation testing in Singapore waters context.",
      zh: "在边缘端部署视觉模型用于溢油检测与响应规划；主导系统需求并进行仿真测试，面向新加坡水域场景。",
    },
    tags: ["Matlab", "Edge AI", "Systems Engineer"],
  },
  {
    id: "ring-design",
    title: {
      en: "Jewelry Ring design -「Qi」",
      zh: "从线稿到成品:珠宝设计 -「启」",
    },
    thumb:
      "Jewelry/1.jpeg",
    images: [
      "Jewelry/1.jpeg",
      "Jewelry/2.jpeg",
      "Jewelry/3.jpeg",
      "Jewelry/6.jpeg",
    ],
    desc: {
      en: "A Swan metal ring symbolizing resilience and transformation, featuring a swan rising against waves, was developed from sketch to 3D model and finalized with the manufacturer.",
      zh: "一款象征坚韧与蜕变的天鹅戒指，设计呈现天鹅逆浪飞翔的意象，从手绘草图到 3D 建模，再经制造商多次打磨最终完成。",
    },
    tags: ["Product Design", "Jewelry Design", "Prototyping", "Fusion"],
  },
  {
    id: "independent-game",
    title: {
      en: "【Unity】Independent Game - Covid Omega",
      zh: "Unity独立游戏 - Covid Omega",
    },
    thumb:
      "Unity/1.jpg",
    images: [
    ],
    desc: {
      en: "BC Game Jam 2022 - Covid Omega. Unreal and Unity Group Project. Link: https://vent0s.itch.io/covid-omega",
      zh: "加拿大英属哥伦比亚省游戏创作大赛2022作品Covid Omega。网址: https://vent0s.itch.io/covid-omega",
    },
    tags: ["Global Game Jam", "Jewelry Design", "Prototyping", "Fusion"],
  },
  {
    id: "computer-vision",
    title: {
      en: "【YOLO V5】Android App - Calories Diary",
      zh: "【YOLO V5】安卓小程序 - 卡路里日记本",
    },
    thumb:
      "YOLO/1.png",
    images: [
    ],
    desc: {
      en: "A calorie tracking app that integrates front-end design with Google Cloud services, enabling users to log food data, generate reports, and visualize health insights for smarter diet and fitness planning. Link: https://github.com/khan123451/calories-cal",
      zh: "旨在帮助用户记录和计算每日卡路里摄入与消耗。项目结合了前端交互设计与谷歌云服务支持，用户可以方便地输入食材数据，获取报告。通过清晰的数据可视化，用户能够更直观地了解自身饮食与健康状况，从而制定更科学的健身与生活方式规划。网址: https://github.com/khan123451/calories-cal",
    },
    tags: ["YOLO V5", "Android", "Computer Vision", "Mobile APP"],
  },
  {
    id: "logo-side",
    title: {
      en: "LOGO Related Design",
      zh: "LOGO相关设计",
    },
    thumb:
      "logo.png",
    images: [
      "logo.png",
      "Logo/1.jpeg",
      "Logo/2.jpeg",
      "Logo/3.jpeg",
    ],
    desc: {
      en: "Khan Zheng LOGO stands for Kyudo. Learning Samurai Culture and Japanese martial arts.",
      zh: "LOGO即日本弓道文化即真 · 善 · 美唯一体并融入了佛教色彩的武士道文化。",
    },
    tags: ["Logo Design", "Brand Design", "Samurai", "Kyudo"],
  },
  {
    id: "photos",
    title: {
      en: "Khan's Art Journey",
      zh: "Khan的艺术记录",
    },
    thumb:
      "Photo/1.jpg",
    images: [
      "Photo/1.jpg",
      "Photo/2.jpg",
    ],
    desc: {
      en: "Share some photos took by Khan. Updating slowly...Coming soon...",
      zh: "分享一些Khan的艺术小作品（包含不同艺术类别）,逐步在更新...",
    },
    tags: ["Photography", "Travel", "Drawing"],
  }
];

// --- Icons (inline SVG to avoid external deps) ----------------------------------
const Icon = {
  Github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.82 1.3 3.51.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.85.12 3.15.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.23v3.31c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  ),
  Linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4 0 4.75 2.63 4.75 6V24h-4v-5.8c0-1.38 0-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.05V24h-4V8.5z" />
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  ),
  HuggingFace: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a8 8 0 00-8 8 8 8 0 006 7.75V22l2-1 2 1v-4.25A8 8 0 0012 2zm-3 9a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2zM7 14a5 5 0 0010 0H7z" />
    </svg>
  ),
  Bili: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 6h5L7.5 4 9 3l3 3 3-3 1.5 1L15 6h5a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm1 3v7h14V9H5zm3 2h2v3H8v-3zm6 0h2v3h-2v-3z" />
    </svg>
  ),
  WhatsApp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.6 5.88L0 24l6.27-1.64A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.9 9.9 0 01-5.05-1.4l-.36-.21-3.73.98.99-3.64-.23-.37A10 10 0 1122 12c0 5.52-4.48 10-10 10zm5.16-7.48c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.27-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.17-.27-.02-.42.13-.56.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.27-1 1-1 2.44 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.91 4.34 2.88 1.23 2.88.82 3.4.77.52-.05 1.66-.68 1.9-1.34.23-.66.23-1.23.16-1.34-.07-.11-.26-.18-.54-.32z" />
    </svg>
  ),
  External: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3z" />
      <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
    </svg>
  ),
  ArrowUp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 19V7.83l-4.59 4.58L5 11l7-7 7 7-1.41 1.41L13 7.83V19h-2z" />
    </svg>
  ),
};

// --- Utility: classnames -------------------------------------------------------
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// --- Main component ------------------------------------------------------------
export default function PersonalWebsite() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("zz-lang") || "en";
    }
    return "en";
  });
  const t = useMemo(() => COPY[lang], [lang]);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState(null); // project modal

  // Head setup: title + favicon + meta
  useEffect(() => {
    document.title = "Khan Zheng’s Space";
    const linkId = "dynamic-favicon";
    let link = document.querySelector(`#${linkId}`);
    if (!link) {
      link = document.createElement("link");
      link.id = linkId;
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/favicon.ico"; // place your favicon.ico at public root

    // Meta description (SEO)
    const metaId = "dynamic-desc";
    let meta = document.querySelector(`#${metaId}`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.id = metaId;
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Zikang (Khan) Zheng — AI Product Manager, Venture Analyst, Early‑Stage Investor. Portfolio, bio, CV, and contact.";

    // Document language + smooth scroll
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.documentElement.classList.add("scroll-smooth");
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("zz-lang", lang);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    { id: "intro", label: t.navIntro },
    { id: "bio", label: t.navBio },
    { id: "portfolio", label: t.navPortfolio },
    { id: "cv", label: t.navCV },
    { id: "contact", label: t.navContact },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Skip to content */}
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-white text-slate-900 rounded px-3 py-2 shadow"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/*<div className="size-8 rounded bg-gradient-to-br from-indigo-400 to-cyan-400" aria-hidden />*/}
            <img
                src="/logo.png"
                alt="logo headshot"
                className="size-8 rounded bg-gradient-to-br from-indigo-400 to-cyan-400"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            <span className="font-semibold tracking-tight">Zikang (Khan) Zheng</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-slate-300 hover:text-white">
                {s.label}
              </a>
            ))}
          </nav>
          {/* Lang switch */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setLang("en");
                if (typeof window !== 'undefined' && window.dataLayer) {
                  window.dataLayer.push({
                    event: 'language_change',
                    event_category: 'navigation',
                    event_label: 'english',
                    language: 'en'
                  });
                }
              }}
              className={cx(
                "px-3 py-1 rounded-full text-xs border",
                lang === "en"
                  ? "bg-white text-slate-900 border-white/10"
                  : "bg-transparent text-slate-200 border-white/20"
              )}
              aria-pressed={lang === "en"}
            >
              {t.langEN}
            </button>
            <button
              onClick={() => {
                setLang("zh");
                if (typeof window !== 'undefined' && window.dataLayer) {
                  window.dataLayer.push({
                    event: 'language_change',
                    event_category: 'navigation',
                    event_label: 'chinese',
                    language: 'zh'
                  });
                }
              }}
              className={cx(
                "px-3 py-1 rounded-full text-xs border",
                lang === "zh"
                  ? "bg-white text-slate-900 border-white/10"
                  : "bg-transparent text-slate-200 border-white/20"
              )}
              aria-pressed={lang === "zh"}
            >
              {t.langZH}
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Intro */}
      <section id="intro" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[720px] bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t.introHeading}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-indigo-300">
            {t.tagline}
          </p>
          <article className="prose prose-invert max-w-none mt-6 leading-relaxed">
            {t.introBody.split("\n\n").map((para, idx) => (
              <p key={idx} className="text-slate-200/90">
                {para.includes('**Keywords**:') ? (
                  <>
                    {para.split('**Keywords**:')[0]}
                    <strong>Keywords:</strong>
                    {para.split('**Keywords**:')[1]}
                  </>
                ) : para}
              </p>
            ))}
          </article>
        </div>
      </section>

      {/* Biography */}
      <section id="bio" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="aspect-square w-full max-w-xs rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-400 p-1 shadow-lg">
              {/* Replace src with your real headshot at /my-photo.jpg */}
              <img
                src="/my-photo.jpg"
                alt="Zikang Zheng headshot"
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold">{t.bioHeading}</h2>
            <div className="mt-4 space-y-4 text-slate-200/90">
              <p>{t.bioP1}</p>
              <p>{t.bioP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl sm:text-3xl font-semibold">{t.portfolioHeading}</h2>
            <p className="text-sm text-slate-300">{t.portfolioNote}</p>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => {
                    setActive(p);
                    if (typeof window !== 'undefined' && window.dataLayer) {
                      window.dataLayer.push({
                        event: 'portfolio_click',
                        event_category: 'portfolio',
                        event_label: p.id,
                        project_name: p.title[lang]
                      });
                    }
                  }}
                  className="group block text-left bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.thumb}
                      alt={p.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{p.title[lang]}</h3>
                    <p className="mt-1 text-sm text-slate-300 line-clamp-2">{p.desc[lang]}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">{t.cvHeading}</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            {/* Full resume */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-medium">{t.cvFull}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-slate-900 hover:bg-white/90"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                          event: 'cv_view',
                          event_category: 'cv',
                          event_label: 'resume_full',
                          file_name: 'resume.pdf'
                        });
                      }
                    }}
                  >
                    <Icon.External className="size-4" /> {t.view}
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                          event: 'cv_download',
                          event_category: 'cv',
                          event_label: 'resume_full',
                          file_name: 'resume.pdf'
                        });
                      }
                    }}
                  >
                    {t.download}
                  </a>
                </div>
              </div>
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="w-full h-[60vh]"
              >
                <div className="p-6 text-sm text-slate-300">
                  PDF preview unavailable. {t.view} →
                  <a className="underline ml-1" href="/resume.pdf" target="_blank" rel="noreferrer">
                    /resume.pdf
                  </a>
                </div>
              </object>
            </div>

            {/* One pager */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-medium">{t.cvOnePager}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href="/onepager.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-slate-900 hover:bg-white/90"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                          event: 'cv_view',
                          event_category: 'cv',
                          event_label: 'onepager',
                          file_name: 'onepager.pdf'
                        });
                      }
                    }}
                  >
                    <Icon.External className="size-4" /> {t.view}
                  </a>
                  <a
                    href="/onepager.pdf"
                    download
                    className="text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                          event: 'cv_download',
                          event_category: 'cv',
                          event_label: 'onepager',
                          file_name: 'onepager.pdf'
                        });
                      }
                    }}
                  >
                    {t.download}
                  </a>
                </div>
              </div>
              <object data="/onepager.pdf" type="application/pdf" className="w-full h-[60vh]">
                <div className="p-6 text-sm text-slate-300">
                  PDF preview unavailable. {t.view} →
                  <a className="underline ml-1" href="/onepager.pdf" target="_blank" rel="noreferrer">
                    /onepager.pdf
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">{t.contactHeading}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ContactItem
              href="https://www.linkedin.com/in/zikang-z-b5a19b127/"
              label="LinkedIn"
              Icon={Icon.Linkedin}
            />
            <ContactItem href="https://github.com/khan123451" label="GitHub" Icon={Icon.Github} />
            <ContactItem href="https://space.bilibili.com/4128839" label="Bilibili" Icon={Icon.Bili} />
            <ContactItem href="https://huggingface.co/zikangzheng" label="Hugging Face" Icon={Icon.HuggingFace} />
            <ContactItem href="https://www.instagram.com/zucchinianqiu/" label="Instagram" Icon={Icon.Instagram} />
            <ContactItem href="https://wa.me/6593761147" label="WhatsApp" Icon={Icon.WhatsApp} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-400 flex flex-wrap items-center gap-3 justify-between">
          <p>© {new Date().getFullYear()} Zikang (Khan) Zheng. All rights reserved.</p>
          <p>
            Built with ❤ <span className="opacity-75">Khan Zheng</span>
          </p>
        </div>
      </footer>

      {/* Floating: Chat with GPT */}
      <a
        href="https://chatgpt.com/g/g-Nc9gA1C7i-zikang-zheng?model=gpt-4o"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 group"
        aria-label={t.chatCTA}
        data-gtm-event="chat_button_click"
        data-gtm-category="engagement"
        data-gtm-label="zikang_zheng_gpt"
        onClick={(e) => {
          // GTM dataLayer push
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'chat_button_click', {
              event_category: 'engagement',
              event_label: 'zikang_zheng_gpt',
              value: 1
            });
          }
          
          // Alternative: dataLayer push (if using GTM container)
          if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
              event: 'chat_button_click',
              event_category: 'engagement',
              event_label: 'zikang_zheng_gpt',
              click_text: 'Zikang Zheng GPT',
              destination_url: 'https://chatgpt.com/g/g-Nc9gA1C7i-zikang-zheng?model=gpt-4o'
            });
          }
        }}
      >
        <div className="relative flex items-center gap-3 bg-white text-slate-900 rounded-full pl-2 group-hover:pr-3 py-1.5 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-700 ease-in-out">
          <div className="relative">
            <img
              src="/my-photo.jpg"
              alt="Zikang Zheng avatar"
              className="size-8 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out max-w-0 group-hover:max-w-xs overflow-hidden transform translate-x-[-10px] group-hover:translate-x-0">
            Zikang Zheng GPT
          </span>
        </div>
      </a>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-20 z-40 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur"
          aria-label="Scroll to top"
        >
          <Icon.ArrowUp className="size-5" />
        </button>
      )}

      {/* Modal for portfolio items */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title[lang]}
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-4xl bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-semibold">{active.title[lang]}</h3>
                <p className="mt-1 text-slate-300">{active.desc[lang]}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="text-sm px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40"
              >
                {t.close}
              </button>
            </div>
            <div className="p-4 grid sm:grid-cols-2 gap-4">
              {active.images.map((src, i) => (
                <img key={i} src={src} alt={`${active.title[lang]} ${i + 1}`} className="w-full h-64 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tiny inline JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Zikang (Khan) Zheng",
            jobTitle: "AI Product Manager / Venture Analyst / Quant Researcher",
            url: typeof window !== "undefined" ? window.location.href : "",
            sameAs: [
              "https://www.linkedin.com/in/zikang-z-b5a19b127/",
              "https://github.com/khan123451",
              "https://space.bilibili.com/4128839",
              "https://huggingface.co/zikangzheng",
              "https://www.instagram.com/zucchinianqiu/",
              "https://wa.me/6593761147",
            ],
          }),
        }}
      />
    </div>
  );
}

function ContactItem({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20"
      onClick={() => {
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'contact_click',
            event_category: 'contact',
            event_label: label.toLowerCase(),
            destination_url: href
          });
        }
      }}
    >
      <Icon className="size-5" />
      <span className="font-medium">{label}</span>
      <IconExternalLink className="ml-auto size-4 opacity-60" />
    </a>
  );
}

function IconExternalLink(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3z" />
      <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
    </svg>
  );
}
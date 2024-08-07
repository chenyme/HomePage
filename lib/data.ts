import React from "react";
import { AiFillApi } from "react-icons/ai";
import { GiDatabase } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import { SiThealgorithms } from "react-icons/si";
import rubicGameImage from "@/public/2048-game.png";
import WIKIImage from "@/public/WIKI.png";
import OaiTImage from "@/public/OaiT.png";
import AAVTImage from "@/public/AAVT.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Experiences",
        hash: "#experience",
    }
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        "title": "Graduate School Exam Candidate",
        "location": "Nanjing",
        "description": "Dedicated preparation for graduate school exams, enhancing skills in politics, English, mathematics, and computer science, aiming to succeed in December 2024!",
        icon: React.createElement(FaGraduationCap),
        "date": "March 2024 - December 2024"
    },
    {
        "title": "Algorithm Intern",
        "location": "Hangzhou Yuansun Technology Company",
        "description": "Tested, identified, and resolved data-related issues in both front-end and back-end. Assisted the team with algorithm testing and performance optimization. Designed backend interfaces using gRPC, Flask, and Redis to alleviate high concurrency interface issues, and built a service testing platform using the Streamlit framework.",
        icon: React.createElement(SiThealgorithms),
        "date": "January 2024 - August 2024"
    },
    {
        "title": "Algorithm Developer",
        "location": "Hong Kong Artificial Intelligence Association",
        "description": "Assisted in building a writing therapy platform in collaboration with Queen's University, Canada, by drafting requirement analysis documents. Designed backend API interfaces using Flask and WebSocket, and utilized LLMs, Stable Diffusion, ComfyUI, and other technologies to aid in developing platform generation algorithms.",
        "icon": React.createElement(AiFillApi),
        "date": "July 2023 - September 2023"
    },
    {
        "title": "Intern",
        "location": "QianDa Educational Technology Co., Ltd. (Nanjing, China)",
        "description": "Collected, refined, and analyzed customer data using SPSS and Python, assisting the team in identifying target customers. Established and managed a SQL database for maintaining student data.",
        "icon": React.createElement(GiDatabase),
        "date": "July 2022 - August 2022"
    },
    {
        "title": "Bachelor of Mathematics and Applied Mathematics",
        "location": "Nanjing Audit University",
        "description": "Major courses: Mathematical Analysis, Advanced Algebra and Analytic Geometry, Operations Research, Probability Theory and Mathematical Statistics, Ordinary Differential Equations, Applied Stochastic Processes, Real Variable Functions, Numerical Algebra, Numerical Computation, Python Programming, Mathematical Modeling and Mathematical Experiments, Database Technology, Applied Stochastic Sequences, Financial Data and Machine Learning, Deep Learning.",
        "icon": React.createElement(FaGraduationCap),
        "date": "September 2021 - June 2025"
    }
]

export const experiencesDataZn = [
     {
        "title": "备考生",
        "location": "南京",
        "description": "全力备考研究生，提升自己的政治、英语、数学、计算机能力，期待2024年12月上岸！",
        icon: React.createElement(FaGraduationCap),
        "date": "2024年3月 - 2024年12月"
    },
    {
        "title": "算法实习生",
        "location": "杭州元狲科技公司",
        "description": "测试、定位和解决前后端的数据相关问题，协助团队完成算法测试、性能优化等工作。使用 gRPC、Flask、Redis 设计后端接口、缓解高并发接口问题，利用 Streamlit 框架搭建服务测试平台。",
        icon: React.createElement(SiThealgorithms),
        "date": "2024年1月 - 2024年8月"
    },
    {
        "title": "算法开发",
        "location": "香港人工智能协会 ",
        "description": "协助建设香港人工智能协会与加拿大女王大学合作的写作疗愈平台，撰写平台需求分析文档。使用 Flask 和 WebSocket 设计后端 API 接口，运用 LLMs、Stable Diffusion、ComfyUI 等技术辅助开发平台生成算法。",
        "icon": React.createElement(AiFillApi),
        "date": "2023年7月 - 2023年9月"
    },
    {
        "title": "实习生",
        "location": "谦达教育科技有限公司（中国南京）",
        "description": "使用 Spss、Python 收集、完善、汇总分析客户资料，协助团队寻找目标客户；建立 SQL数据库 对学员数据进行维护管理。",
        "icon": React.createElement(GiDatabase),
        "date": "2022年7月 - 2022年8月"
    },
    {
        "title": "数学与应用数学学士",
        "location": "南京审计大学",
        "description": "主修课程：数学分析、高等代数与解析几何、运筹学、概率论与数理统计、常微分方程、应用随机过程、实变函数、数值代数、数值计算、Python程序设计、数学模型与数学实验、数据库技术、应用随机序列、金融数据与机器学习、深度学习。",
        "icon": React.createElement(FaGraduationCap),
        "date": "2021年9月 - 2025年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "AI Auto Video Translation",
        title_zh: 'AI 全自动视频翻译',
        description: "This tool uses Whisper for voice recognition and AI models for subtitle translation, combining subtitles with videos to create translated content. It offers an easy-to-use solution for automatically recognizing, translating, and generating subtitles for videos.",
        desc_zh: "利用Whisper识别声音，AI大模型翻译字幕，最后合并字幕视频，生成翻译后的视频。旨在提供一个简单易用的自动识别、翻译工具和视频辅助工具，帮助快速识别视频字幕、翻译字幕、生成图文。",
        tags: ["Python", "Whisper", "Streamlit", 'Cuda', 'LLMs'],
        imageUrl: AAVTImage,
        projectUrl: 'https://github.com/Chenyme/Chenyme-AAVT'
    },
    {
        title: "OaiT",
        title_zh: 'Oaifree 镜像工具',
        description: "A one-stop backend management system integrating Pandora, Oaifree and Fuclaude. It includes a login system, user / token / account pool /shared services , Linux.do Oauth2... simplifying and streamlining image service management.",
        desc_zh: "一站式打通 Oaifree、Pandora、Fuclaude 的后台管理项目，具备登录系统、用户管理、Token管理、号池管理、共享服务、Linux.do认证 等多功能集成项目，帮助更快捷的管理镜像服务！",
        tags: ["Python", "Streamlit", "Oauth2", "Html", "CSS"],
        imageUrl: OaiTImage,
        projectUrl: 'https://github.com/Chenyme/oaifree-tools',
        demoUrl: 'https://oait.chenyme.top',


    },
    {
        title: "Linux Do Wiki",
        title_zh: "Linux Do 社区文档",
        description:"A Wiki project built on the Next.js-based Nextra framework. It offers an easy-to-use community Wiki to help new users quickly find documentation and solve problems. Features include OAuth2 login, custom cards, post previews, a personal center, and other personalized services from Linux Do.",
        desc_zh: "一个基于 Next.js 的 Nextra 框架构建的 Wiki 项目。提供一个简单易用的社区 Wiki，帮助新用户更快捷的查找文档、解决问题，并加入 Oauth2 登录、自定义卡片、帖子预览、个人中心等 Linux Do 个性化服务！",
        tags: ["React", "Next.js", "Nextra", "JavaScript", "Oauth2"],
        imageUrl: WIKIImage,
        projectUrl: 'https://github.com/Chenyme/linux-do-wiki',
        demoUrl: 'https://wiki.linux.do',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "Prisma",
    "MongoDB",
    "Framer Motion",
    "d3",
    "UI/UX"
]

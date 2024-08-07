"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div></div>
          <div>
            你好👋，我是一名来自中国的学生，目前就读于南京一所大学🏫的数学与应用数学专业。我对数学的思维和逻辑💭深感兴趣，并多次在国内外的各类数学建模竞赛中获奖🏅。
          </div>
          <div>
          </div>
          <div>
            虽然是数学专业，但我对编程和项目开发🖥️有着浓厚的兴趣！我擅长 Python、Matlab、C++、React 等语言，并且在人工智能🤖领域积累了一定的项目经验。我曾参与并开发多个 AI 项目，提升了自己的技术水平和应用能力🙆‍♂️！同时，我也是一名摄影爱好者📸，喜欢用镜头记录生活中的美好瞬间~
          </div>
          <div>
          </div>
          <div>
            目前，我正在为考取研究生做准备，期待今年12月上岸✌️！
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            Hi! 👋 I’m a student from China, currently studying
            <span className="font-medium italic"> Mathematics and Applied Mathematics </span>
            at a university in Nanjing🏫. I’m fascinated by the logic and
            reasoning of mathematics💭, and have won awards in various math
            modeling competitions both at home and abroad🏅.
          </p>

          <p className="mb-3">
            I have a keen interest in programming and project
            development. I’m proficient in languages like
            <span className="font-medium italic"> Python, Matlab, C++ and React </span>🖥️,
            and have accumulated some project experience in the field of
            <span className="font-medium italic"> Artificial Intelligence </span>🤖.
            I’ve participated in and developed multiple AI projects, which have
            helped me improve my technical skills and application abilities！
            I’m an amateur photographer 📸 too, using my lens to capture the beautiful moments in life.
          </p>

          <p className="mb-3">
            Currently, I’m preparing for postgraduate entrance exams and hope to
            get into grad school by December this year✌️!
          </p>

        </>
      )}
    </motion.section>
  )
}

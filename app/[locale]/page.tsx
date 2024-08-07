import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import { isMobileDevice } from "@/lib/utils"
// import Contact from "@/components/Contact"

export const metadata = {
  title: "Chenyme | Home",
  description: "Chenyme 的个人主页，包含自我介绍、个人项目和相关个人经历。",
}

export default function Home() {
  const isMobile = isMobileDevice()

  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience isMobile={isMobile} />
      {/* <Contact /> */}
    </main>
  )
}

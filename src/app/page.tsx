import MainSection from "./components/layout/main-section";
import NexGenSection from "./components/layout/nex-gen-section";
import WhyYouShouldChooseSection from "./components/layout/manage-section";

import GreenVector from './assets/GreenVector.png';
import DarkGreenVector from './assets/DarkGreenVector.png';
import Image from "next/image";
import GetStartedSection from "./components/layout/get-started-section";
import FirstBanner from "./components/ui/first-banner";
import QuestionsSection from "./components/layout/questions-section";
import NewsSection from "./components/layout/news-section";
import SecondBanner from "./components/ui/second-banner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainSection/>
      <NexGenSection/>
      <Image src={DarkGreenVector} alt="DarkGreenVector" className=" max-h-[2800px] absolute top-0 left-0 right-0 -z-10 ml-auto mr-auto"/>
      <WhyYouShouldChooseSection/>
      <GetStartedSection/>
      <Image src={GreenVector} alt="GreenVector" className=" max-h-[3500px] absolute top-[3700px] left-0 right-0 -z-10 ml-auto mr-auto"/>
      <FirstBanner/>
      <QuestionsSection/>
      <NewsSection/>
      <SecondBanner/>
    </main>
  );
}

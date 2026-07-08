import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Circle } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const experiencePage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Briefcase className="h-4 w-4" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Work Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col gap-2">
        {portfolioConfig.experience.map((job, index) => (
          <div className="w-full h-fit flex" key={index}>
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35 + index * 0.1}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
            >
              {job.period}
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                {job.role}, <br /> {job.company}
              </div>
              <ul className="flex flex-col gap-1 mt-2">
                {job.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex gap-2 items-start font-poppins text-base text-primary max-sm:text-xs"
                  >
                    <Circle className="h-2 w-2 mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default experiencePage;

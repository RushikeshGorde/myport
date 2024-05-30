"use client";
import CountUp from "react-countup";

const state = [
  {
    num: 1,
    text: "Year Of Expreance"
  },
  {
    num: 10 ,
    text: "Project And Template"
  },
  {
    num: 5,
    text: "Technologies Mster"
  },
  {
    num: 60,
    text: "Code commits"
  },
]
const Stats = () => {
  return   <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {state.map((item, index) => {
                return (
                     <div
                     className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                      kay={index}>
                    <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-medium"
                    />
                    <p className={`${
                        item.text.length < 20 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80`}
                    >

                    {item.text}</p>
                     </div>
                );
            })}
        </div>
    </div>
  </section>;
  
}

export default Stats
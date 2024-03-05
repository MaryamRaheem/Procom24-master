import React from 'react'
import Image from 'next/image'
import { TypewriterEffectSmooth } from '@/components/ui/aceternity/type-writer-effect'
import { mainSponsor, sponsorsData } from './data'
import { MotionDiv, MotionH1, MotionSpan } from '@/components/animation/Transitions'

const Sponsors = () => {
  return (
    <div>
      
        
        {/* <div className="flex flex-col items-center justify-center h-[20rem]">
            <TypewriterEffectSmooth className="text-7xl" words={[
              {
                text: "Main",
              },
              {
                text: "Sponsor",
              },
              {
                text: "of",
              },
          
              {
                text: "PROCOM'24",
                className: "text-purple-500 dark:text-white",
              },
            ]} />
        </div> */}
        <span
        className="absolute round-blur-effect-2"
        style={{ top: "20%", right: "10%" }}
      ></span>
      <span
        className="absolute round-blur-effect-1"
        style={{ top: "30%", left: "10%" }}
      ></span>
      <span className="absolute round-blur-effect-3 text-center"></span>
        <div className='w-full mt-[20vh] text-center'>
        <MotionH1
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2 }}
                className="font-bold text-pretty"
              >
                <MotionSpan
                  initial={{ opacity: 0, y: -20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  whileInView={{opacity: 1, y:0}}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="text-4xl md:text-6xl"
                >
                  {" "}
                  Sponsors
                </MotionSpan>
                <br />
                <span className="uppercase text-6xl md:text-8xl highlight-text">
                  <MotionSpan
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  >
                    Pro
                  </MotionSpan>
                  <MotionSpan
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  >
                    com
                  </MotionSpan>
                  <MotionSpan
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    &apos;{new Date().getFullYear().toString().slice(-2)}
                  </MotionSpan>
                </span>
              </MotionH1>
          </div>
    
      <div className="sponsor-section px-10 my-10">
      <MotionH1
        initial={{ x: -100, opacity: 0}}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: .8 }}
        className="font-bold text-3xl lg:text-5xl xl:text-7xl mt-10"
      >
        Main Sponsor

        </MotionH1>

        <div className="flex flex-col items-center justify-center min-h-[20rem]">
          <div className="border-2 border-purple-700 rounded-2xl">
            <Image src={mainSponsor.src} alt="Main Sponsor" width={600} height={200} />
          </div>
        </div>
        { 
        // map on object
        Object.keys(sponsorsData).map((sponsorType, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              
              <MotionH1
                initial={{ x: -100, opacity: 0}}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .8 }}
                className="font-bold text-3xl bg-gradient-to-r from-purple-800 to-purple-200 bg-clip-text text-transparent lg:text-5xl xl:text-6xl my-10 text-left block w-full"
               
              >
                {sponsorsData[sponsorType].title}
              </MotionH1>
              <div className="flex items-center flex-wrap justify-center min-h-[10rem]">
                {
                  sponsorsData[sponsorType].sponsors.map((sponsor, i) => {
                    let width = 200
                    if(sponsorType === 'coSponsors') 
                      width = 400
                    return (
                      
                      <MotionDiv className='px-5' 
                      // fade in animation
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      
                      key={i}>
                        <Image src={sponsor.src} style={sponsor?.style} alt={sponsor.name} width={width} height={200} />
                        </MotionDiv>
                    
                  )
                  })
                }
              </div>
            </div>
          )
        })
        }
        
      </div>
        

      

      
    </div>
  )
}

export default Sponsors
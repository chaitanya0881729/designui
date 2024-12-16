"use client"; 
import Image from 'next/image'
import Link from 'next/link'
 import hero1 from './images/hero1.svg'
 import hero2 from './images/hero2.svg'
 import hr1 from './images/hr1.svg'
 import hr2 from './images/hr2.svg'
 import hr3 from './images/hr3.svg'
 import hr4 from './images/hr4.svg'
 import hr5 from './images/hr5.svg'
 import hr6 from './images/hr6.svg'
 import hr7 from './images/hr7.svg'
import Button from './Button';


import dot from './images/dot.svg'



import { ScrollContainer, ScrollPage, Animator, batch, Fade, Move, Sticky } from "react-scroll-motion";



import './index.css';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
const DesignAgencyHero = () => {




  const scrollAnimation = batch(Fade(), Move(0, 200), Sticky());


  const companies = [
    { name: 'nectar', logo: hr1 },
    { name: 'beehiiv', logo: hr2 },
    { name: 'Memberstack', logo: hr3 },
    { name: 'cometchat', logo: hr4 },
    { name: 'Buy me a coffee', logo: hr5, },
    { name: 'Buy me a coffee', logo: hr6, },
    { name: 'Buy me a coffee', logo: hr7, },
  ]

  return (
    <div className="min-h-screen ">
      <main className="relative overflow-hidden">
      
        <div className="absolute left-0 top-20 ">
          <Image
            src={hero2}
            alt="Decorative shape"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
  


        
        <div className="absolute right-0 top-[30%]">
          <Image
            src={hero1}
            alt="Decorative shape"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>




        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center relative z-10">
          <motion.h1 className="text-[100px] leading-[80px] max-w-3xl mx-auto font-semibold mb-4">
            A design agency
            <br />
            with a twist
          </motion.h1>
          
          <p className="mt-6 text-[24px] text-gray-600 max-w-2xl mx-auto">
            Design subscriptions for everyone. Pause or cancel anytime.
          </p>

          <div className="mt-10">
            <Button
              href="#plans"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              See plans
            </Button>
          </div>

      


<div className="mt-4 flex items-center justify-center space-x-2">
  <div className="relative flex items-center justify-center">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea552b] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ea552b]"></span>
    </span>
  </div>
  <span className="text-sm text-gray-600">Available now</span>
</div>




        </div>

{/* <ScrollContainer>
      <ScrollPage>
        <Animator animation={scrollAnimation}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center relative z-10">
            <h1 className="text-[100px] leading-[80px] max-w-3xl mx-auto font-semibold mb-4">
              A design agency
              <br />
              with a twist
            </h1>

            <p className="mt-6 text-[24px] text-gray-600 max-w-2xl mx-auto">
              Design subscriptions for everyone. Pause or cancel anytime.
            </p>

            <div className="mt-10">
              <Button
                href="#plans"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
              >
                See plans
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="relative flex items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea552b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ea552b]"></span>
                </span>
              </div>
              <span className="text-sm text-gray-600">Available now</span>
            </div>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer> */}








        



         {/* <div className= " w-[90%]  outline-offset-0 perspective-origin-[50%] transform-origin-[0%] bg-black bg-gradient-to-b from-black to-[#292929] rounded-[1000px] outline outline-1 outline-black max-w-[1300px] mx-auto py-6 overflow-hidden shadow-[1px_9px_12px_rgba(0,0,0,0.31),_0_20px_13px_rgba(0,0,0,0.14),_inset_0_2px_1px_rgba(255,255,255,0.5)]  "> */}

          

         <div className="w-[90%]  mb-10 outline-offset-0 perspective-origin-[50%] transform-origin-[0%]   bg-black bg-gradient-to-b from-black to-[#292929] rounded-[1000px] outline outline-1 outline-black max-w-[1300px] mx-auto py-4 overflow-hidden"
           style={{
            outline: '1px solid #000',
            boxShadow: '1px 9px 12px #0000004f, 0 20px 13px #00000024, inset 0 2px 1px #ffffff80',
          }}
         >





    
           <div className="flex  items-center justify-between space-x-4">
           {/* <Marquee>
                {companies.map((company, index) => (
                <div key={index} className=" items-center flex ">
                  <div className='font-bold text-[#3E89FF] block  mb-2'>.</div>

                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={10}
                    className="object-contain"
                  />
                </div>
              ))}

</Marquee> */}
    <Marquee pauseOnHover={true} gradient={false} speed={50}>
      {companies.map((company, index) => (
        <div key={index} className="flex items-center mx-4">
          <div className="font-bold  block  mr-2">
             <Image
             src={dot}
                  className="w-3 h-3 object-contain"
             />
          </div>
          <Image
            src={company.logo}
            alt={company.name}
            // width={140}
            // height={10}
            // className="object-contain"
               className="w-32 h-16 object-contain"
          />
        </div>
      ))}
    </Marquee>
           </div>


       


           




           


           

        </div> 
      </main>
    </div>
  )
}

export default DesignAgencyHero
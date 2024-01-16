import React from "react";
import CatIcon from "../component/Icon";
import ImageDisplay from "../component/ImageDisplay";
const Home : React.FC= () =>{
    return(<>
      <div className='bg-[#faebd7] flex flex-col items-center w-full border-b-2 border-black'>
        <div className='flex justify-between max-w-[1200px] w-full mt-24 mb-20'>
          {/* Text Content */}
          <div className='flex-grow text-start pr-12 pt-12'>
            <p className="text-6xl font-bold mb-8"  style={{fontFamily:"headerFont"}}>Become a better frontend developer.</p>
            <p className='text-2xl mb-8'  style={{fontFamily:"bodyFont"}}>
              Take your frontend skills to the next level by recreating <strong>real websites</strong> from <strong>real companies.</strong>
            </p>
            <p className='text-2xl mb-8'>
              The perfect type of practice for developers of all skill levels. Are you up for the challenge?
            </p>
            <div className='flex items-center justify-start space-x-4'>
              <div className='border-2 border-black bg-white hover:bg-black hover:text-white cursor-pointer h-12 item-center w-32 py-2 text-center font-bold'>View Projects</div>
              <div className='border-2 border-black hover:bg-black hover:text-white cursor-pointer h-12 item-center w-28 py-2 text-center font-bold'>Learn More</div>
            </div>
          </div>

          {/* Image Display */}
          <div className="max-w-[600px] max-h-[480.75px]">
            <ImageDisplay/>
          </div>
        </div>
      </div>
      <div className=' flex flex-col items-center w-full'>
      <div className='max-w-[1200px] w-full text-center p-8'>
          <h2 className="text-4xl font-bold mb-8" style={{fontFamily:"headerFont"}}>
            <div style={{ maxWidth: '90%' }} className="inline-block text-left">Frontend Practice provides you with</div>
  <div style={{ maxWidth: '80%' }} className="inline-block text-left">the inspiration and resources to</div>
  <div></div>
  <div style={{ maxWidth: '70%' }} className="inline-block text-left">create beautiful websites.</div>
  </h2>
          <p className="mb-20 text-2xl" style={{fontFamily:"bodyFont"}}>Here are some ways you can benefit 
          <p>from using our platform:</p>
          </p>
          <div className='grid grid-cols-2 gap-4 mb-20' style={{fontFamily:"bodyFont"}}>
  {/* First row */}
  <div className='border-2 border-black p-4 flex mr-1 text-center item-center'>
    <div className='mb-2'> <CatIcon /> </div>
    <p className=' text-xl'>Enhance your skills by building real <p>websites selected for their</p> educational value.</p>
  </div>
  <div className='border-2 border-black p-4 flex mr-1 text-center items-center'>
    <div className='mb-2'> <CatIcon /> </div>
    <p className=' text-xl'>Test and improve your frontend <p>knowledge through various</p> challenges.</p>
  </div>

  {/* Second row */}
  <div className='border-2 border-black p-4 flex mr-1 text-center items-center'>
    <div className='mb-2'> <CatIcon /> </div>
    <p className=' text-xl'>Use the provided color palettes for <p>each project to save time.</p></p>
  </div>
  <div className='border-2 border-black p-4 flex mr-1 text-center items-center'>
    <div className='mb-2'> <CatIcon /> </div>
    <p className=' text-xl'>Find helpful, curated resources to <p>tackle challenging elements.</p></p>
  </div>
</div>

          <div className="mb-8" >
<h3 className="text-3xl font-bold" style={{fontFamily:"headerFont"}}>Ready to become a better <p>frontend developer?</p></h3>
<button className="mt-4 px-6 py-2 bg-white text-black font-bold hover:bg-gray-800 border-2 border-black" style={{fontFamily:"bodyFont"}}>Get Started</button>
</div>
</div>
</div>
</>
    );
};
export default Home;
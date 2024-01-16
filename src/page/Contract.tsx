import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#faebd7]"> {/* Adjust the background color accordingly */}
      <div className="w-full max-w-md p-4">
        <h1 className="text-6xl font-bold mb-12 mt-14" style={{fontFamily:"headerFont"}}>Contact us.</h1>
        <p className="mb-8" style={{fontFamily:"bodyFont"}}>
          You may find that our <a href="/faq" className="text-black underline"><strong>FAQ page</strong></a> has the answers that you are looking for. If not, feel free to reach out!
        </p>
        <form className="flex flex-col space-y-4">
          <label htmlFor="name" className="font-semibold">Name</label>
          <input type="text" id="name" placeholder="Jane Code" className="px-4 py-2 border-2 border-black"/>

          <label htmlFor="email" className="font-semibold">Email Address</label>
          <input type="email" id="email" placeholder="email@website.com" className="px-4 py-2 border-2 border-black"/>

          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea id="message" rows={10} placeholder="What would you like to say?"className="px-4 py-2 border-2 border-black"></textarea>



      <button type="submit" className="w-40 h-12 bg-white text-black py-2 mt-4 border-2 border-black font-bold" style={{marginBottom:"15%"}}>Submit</button>
    </form>
  </div>
</div>

);
};

export default Contact;
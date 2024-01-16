import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white text-black flex items-center px-4 justify-center border-b-2 border-black z-50" style={{ height: '63px'}}>
      <div className="flex justify-between items-center w-full max-w-[1200px] font-bold">
        <div className="flex text-3xl" style={{fontFamily:"headerFont"}}>
          <a href='/'>Frontend Practice</a>
        </div>
        <div className="flex justify-evenly w-2/5 text-lg" style={{fontFamily:"bodyFont"}}>
          <a className="mx-3" href='/'>Home</a>
          <a className="mx-3" href='/'>Project</a>
          <a className="mx-3" href='/'>Blog</a>
          <a className="mx-3" href='/'>FAQ</a>
          <a className="mx-3" href='/contact'>Contact</a>
          <a className="mx-3" href='/'>Newsletter↗</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
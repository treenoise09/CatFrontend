import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white flex items-center justify-center border-t-2 border-white z-50 h-36">
      <div className="flex flex-col items-center w-full max-w-[1200px] px-4">
        <div className="flex-col flex " style={{fontFamily:"headerFont"}}>
          <a href='/'>Frontend Practice - © 2024</a>
        </div>
        <div className="flex items-center justify-center w-full text-lg" style={{fontFamily:"bodyFont"}}>
          <a className="mx-3" href='/'>Home</a>
          <a className="mx-3" href='/'>Project</a>
          <a className="mx-3" href='/'>Blog</a>
          <a className="mx-3" href='/'>FAQ</a>
          <a className="mx-3" href='/contact'>Contact</a>
          <a className="mx-3" href='/'>Newsletter↗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

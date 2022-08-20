import React from "react";
import { useNavigate } from "react-router-dom";

const Device = ({ group, link}) => {
  const navigate = useNavigate();
  const devicesinselectedgroup = (e) => {
    e.preventDefault();
    navigate(`/devices/${group.group}`, {state:{id:group.group}});
  };

  const accordion = (e) => {
    e.preventDefault();
    navigate(`/devices/${group.group}`, {state:{id:group.group}});
  };


  if (!group) return <div />;
  return (
    <div className="z-10"
    onClick={(group) => accordion(group)}
    // onClick={() => navigate("/devices/accordion")}
    >
      <div className="mt-5 flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13l6 9H6l6-9zm-1.06-2.44a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12zM5.281 2.783l1.415 1.415a7.5 7.5 0 0 0 0 10.606l-1.415 1.415a9.5 9.5 0 0 1 0-13.436zm13.436 0a9.5 9.5 0 0 1 0 13.436l-1.415-1.415a7.5 7.5 0 0 0 0-10.606l1.415-1.415zM8.11 5.611l1.414 1.414a3.5 3.5 0 0 0 0 4.95l-1.414 1.414a5.5 5.5 0 0 1 0-7.778zm7.778 0a5.5 5.5 0 0 1 0 7.778l-1.414-1.414a3.5 3.5 0 0 0 0-4.95l1.414-1.414z" />
        </svg>
      </div>
      <h6 className="pl-2 pr-2 mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
        {group.group}
      </h6>
      <div className="relative top-8">

        <img  
      onClick={(group) => devicesinselectedgroup(group)}
      
      src={group.link} onError={() => (this.img.src = { link })} alt="element" />
      </div>
      
    </div>
  );
};

export default Device;
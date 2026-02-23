import React from "react";
import Logo from "../../icons/Logo";
import RightSide from "./RightSide";

const Header = () => {
  return (
    <div>
      <div className="py-3 px-5 relative grid justify-between items-center bg-neutral-900">
        <div className="col-span-3 col-start-1 row-start-1 ">Profile Test</div>
        <div className="col-span-4 col-start-4 row-start-1 justify-self-center">
          <Logo white />
        </div>
        <div className="col-span-3 col-start-8">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Header;

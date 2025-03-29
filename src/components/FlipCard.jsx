import React, { FC, useEffect, useState } from "react";
 

 
export const FlipCard = ({
  item,
  index,
  height = 48,
  width = 48,
  children,
  autoFlip,
  flip = false,
  timeInterval = 2000,
  onFlipChange,
}) => {
  // const [flip, setFlip] = useState(false);

  const onFlipChangeHandler = (flip) => {
    if (onFlipChange) {
       
        if (flip) {
           onFlipChange(item, index);
        } else {
         onFlipChange({
          index,
          id: item.id,
          value: item.value,
          face: "front",
         });
        }
    }
  };

  const handleFlip = () => {
    if(item?.selected) return
    // setFlip((prev) => !prev);
    onFlipChangeHandler(!flip);
  };

  return (
    <div className="py-1 cursor-pointer" onClick={handleFlip}>
      <div className="group [perspective:1000px]  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]">
        <div
          className={` relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] ${
            flip ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

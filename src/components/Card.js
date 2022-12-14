import React from 'react';
// logo
import LogoImg from '../img/logo.svg';
// nike img
import NikeImg from '../img/nike.png';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [{ value: '#b6a179' }, { value: '#272425' }, { value: '#6389cb' }, { value: '#f2c758' }, { value: '#ffffff' }];

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className=" w-[90%] mr-auto ml-5 md:w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px]  relative"
      >
        {/* card logo */}
        <div className="mb-6">
          <img src={LogoImg} alt="" />
        </div>
        {/* card title */}
        <h1 className=" text-2xl lg:text-5xl mb-6 font-extrabold">Nike Air Max Pre-Day</h1>
        {/* card subtitle */}
        <p className=" max-w-[250px] md:max-w-[300px] text-[#000000] mb-6">
          Taking the classic look of heritage Nike Running into new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.
        </p>
        {/* btn & price wrapper */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-x-[20px] mb-12 gap-y-2">
          <button className="bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg">Add to Bag</button>
          <div className="text-[24px] font-bold text-[#000000] pl-2">$495.00</div>
        </div>
        {/* colors */}
        <ul className="flex flex-wrap gap-x-[10px] w-3/4 gap-y-2">
          {colors.map((color, index) => {
            return <li key={index} style={{ backgroundColor: color.value }} className="w-8 h-8 rounded-full cursor-pointer"></li>;
          })}
        </ul>
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className="absolute top-[10%] overflow-hidden lg:top-12 -right-[57%] lg:-right-64 w-[500px] lg:w-[620px]"
        >
          <motion.img
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1, type: 'spring' } }}
            src={NikeImg}
            alt=""
            draggable="false"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;

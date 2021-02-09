import React from 'react';
import './Top.scss';
import {motion} from 'framer-motion';
const containerVariants = {
  visible: {
    scale: [1,1.5],
    transition:{
      darution: .5,
      yoyo: Infinity
    }
  },
}
const Top = () => {
    return (
        <div className="top col-12">
            <motion.div className="page-image"
              variants={containerVariants}
              animate="visible"
            >
              <img src={process.env.PUBLIC_URL + 'images/pageImage.png'}
                  alt="title"/>
            </motion.div>
        </div>
    );
}

export default Top;

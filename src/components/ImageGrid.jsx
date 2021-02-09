import React from 'react';
import useFireStore from '../hooks/useFireStore';
import './ImageGrid.scss';
import {motion} from 'framer-motion';

const variants = {
    hoverImage:{
        scale: 1.3,
        rotateY: 180,
        transition: {
            darution: 0.3
        }
    }
}
const ImageGrid = ({setselectImg}) => {
    const  {docs} = useFireStore('images');
    return (
        <div className="image-grid row m-0 p-1">
            {
               docs && docs.map(doc=>
                <motion.div 
                    className="image-wrap col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0" 
                    onClick={()=>setselectImg(doc.url)}
                    key={doc.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1.5}}
                >
                    <motion.img 
                        className="image"
                        src={doc.url} 
                        key={doc.id} 
                        alt="opp..!"
                        variants={variants}
                        whileHover="hoverImage"
                        transition={{transition: .2}}
                    />
                </motion.div>
               )
            }
        </div>
    );
};
export default ImageGrid;
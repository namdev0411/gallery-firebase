import React, { useEffect, useState } from 'react';
import './Model.scss';
import {motion} from 'framer-motion';

const Model = ({selectImg,setselectImg}) => {
    const [show, setshow] = useState(false);
    const handleClick = (e)=>{
        setshow(true);
        if(e.target.classList.contains('img-wrap')){
            setshow(false);
            setTimeout(()=>{
                setselectImg(null);
            },300)
        }
    }
    useEffect(() => {
        if(selectImg){
            setshow(true)
        }
    }, [selectImg,])
    return (
        <div className={show? "model active":"model"} onClick={handleClick}>
            <div className="img-wrap">
                <img className="left-img d-none d-sm-block" src={process.env.PUBLIC_URL + 'images/love.gif'} alt="Opp...!"/>
                <motion.div className="main-img"
                    animate={{
                        rotateZ: [-2,2],
                        scale:[1.3,1],
                    }}
                    transition={{yoyo: Infinity,duration: 1}}
                >
                    <img src={selectImg} alt="...Opp!"/>
                </motion.div>
                <img className="right-img d-none d-sm-block" src={process.env.PUBLIC_URL + 'images/right3.gif'} alt="Opp...!"/>
            </div>
        </div>
    );
};

export default Model;
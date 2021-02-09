import React, { useEffect, useState } from 'react';
import './Intro.scss';
const Intro = () => {
    const [close, setclose] = useState(false);
    useEffect(() => {
       const sto = setTimeout(()=>{
            setclose(crr=>!crr);
       },100);
       return()=>clearTimeout(sto);
    }, [])
    return (
        <div className={'intro row ' + (close ? "close": "")}>
            <div className={"left "+(close ? "close": "")}></div>
            <div className={"right "+(close ? "close": "")}></div>
        </div>
    );
}

export default Intro;

import React from 'react';
import heart1 from '../image/love.png';
import heart2 from '../image/love2.png';
import heart3 from '../image/love3.png';
import heart4 from '../image/love4.png';
import './HeartDrop.scss';

const HeartDrop = () => {
    return (
        <div className="heart-drop">
            <div className="heart-wrap">
                <img className="heart" src={heart1} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart3} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart2} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart4} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart3} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart2} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart1} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart2} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart3} alt="tim"/>
            </div>
            <div className="heart-wrap">
                <img className="heart" src={heart4} alt="tim"/>
            </div>
            
        </div>
    );
}

export default HeartDrop;

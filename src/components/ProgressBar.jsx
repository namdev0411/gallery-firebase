import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import './ProgressBar.scss';

const ProgressBar = ({file,setfile}) => {
    const {url, progress} = useStorage(file);

    useEffect(() => {
        if(url){
            setfile(null)
        }
    }, [url,setfile]);
    
    return (
        <div className="ProgressBar" style={{width: progress + "vw"}}>
        </div>
    );
};

export default ProgressBar;
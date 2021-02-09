import React, { useState } from 'react';
import './UploadForm.scss';
import ProgressBar from './ProgressBar';
import {motion} from 'framer-motion';
const UploadForn = props => {
    const [file, setfile] = useState(null);
    const [err, seterr] = useState(null);
    const types = ['image/png','image/jpg','image/jpeg'];

    const onChangeHandle = (e)=>{
        let file = e.target.files[0];
        if(file && types.includes(file.type)){
            seterr(null);
            setfile(file);
        }else{
            setfile(null);
            seterr('Please select an image file (png or jpg)');
        }
    }
    return (
        <motion.div className="UploadForm"
        >
            <form>
                <input className= "file-input" id="file-input" type="file"  onChange={onChangeHandle}/>
            </form>
            <label htmlFor="file-input">
                <div>
                    <img style={{height: 50,width:50}} src={process.env.PUBLIC_URL + 'images/loveIcon.png'} alt="+"/>
                    &nbsp;
                </div> 
            </label>
            {err && <div className="err">{err}</div>}
            {file && <div className="file">{file.name}</div>}
            {file && <ProgressBar file={file} setfile={setfile}/>}
        </motion.div>
    );
};

export default UploadForn;
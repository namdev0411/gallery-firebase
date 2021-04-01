import React,{ useCallback, useEffect, useRef, useState} from 'react';
import UploadForm from './components/UploadForm';
import './App.scss';
import ImageGrid from './components/ImageGrid';
import Model from './components/Model';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Top from './components/Top';
import Intro from './components/Intro';
import HeartDrop from './components/HeartDrop';
import {Link,Route} from 'react-router-dom';
import {Switch as SwitchB} from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';
import useFireStore from './hooks/useFireStore';

  function App() {
  const [selectImg, setselectImg] = useState(null);
  const [duck, setduck] = useState(false);
  const  {docs} = useFireStore('images');

  const handleChange=(e)=>{
    setduck(!duck);
  }
  return (
    <div className={duck?"App duck":"App light"}>
      <SwitchB>
        <Route path="/slider" exact>
          <TextAnimate/>
          {docs.length>0 && <Slider docs={docs}/>}
          <Link className="btn back-btn" to="/">Back</Link>
        </Route>
        <Route path="/" exact>
            <Intro/>
          {/* heartDrop */}
          <HeartDrop/>
          <FormControlLabel
            className= "switch"
            control={<Switch checked={duck} 
            onChange={handleChange} />}
            label="Dark mode"
          />
          <Top/>
          <UploadForm/>
          <ImageGrid setselectImg={setselectImg}/>
          <Model selectImg={selectImg} setselectImg={setselectImg}/>
          {/* <Footer/> */}
          <div className={!duck?"slider":"slider duck"}>
              <Link to="/slider">Slider</Link>
          </div>
        </Route>
      </SwitchB>
      </div>
  );
}
const Slider = ({docs})=>{
  const [index, set] = useState(0)
  const transitions = useTransition(docs[index], item => item.url, {
    from: { opacity: 0 },
    enter: { opacity: 1},
    leave: { opacity: 0},
    config: config.molasses,
  })
  useEffect(() => {
    const interv =  setInterval(() => set(state => (state + 1) % docs.length), 3000)

    return()=>clearInterval(interv);
  }, [])
  return transitions.map(({ item, props, key }) => (
    <animated.img
      key={key}
      className="bg"
      src={`${item.url}`}
      style={{ ...props}}
    />
  ))
} 

const TextAnimate = ()=>{
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Hello', 'Im', 'Nam']), 1000))
    ref.current.push(setTimeout(() => set(['Wellcome to', 'Gallery']), 3000))
    ref.current.push(setTimeout(() => set(['Hand up', 'Hand down', 'Hand cap','Build','ReactJs']), 5000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}
export default App;

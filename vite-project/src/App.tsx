import { useState } from 'react'
import './App.css'
import Text from './Text';
import Card from './card';

//const y = 'yellow'

function App() {
  function ButtonText():JSX.Element {
    const [text, setText] = useState<boolean>(false);
    const change = ():void =>{
      setText(!text);
    }
    return (<div>
      <button onClick={change}>text button</button>
      {text?<Text/>:null}
      </div>)
  }
  function changeColor():JSX.Element{
    const [color, setColor] = useState<>////

    return(<>
      <select setColor = {setColor}/>
      <div style={backgraundcolor : color}><Card/></div>
    </>)
  }

function select(props){
  let color = props.color;
  const ChangeColor = (theColor)=>{
    const {value} = e.target
  setColor{value}
  }
  return(
  <select onChange={coloresToChange}>
          <option>red</option>
          <option>green</option>
          <option>yellow</option>
        </select>);
}

  return (
    <><ButtonText/>
    <ChangeColor/>
    </>
  )
}

export default App

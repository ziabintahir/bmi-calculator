import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { use } from 'bcrypt/promises';


function App() {
  // making state of our applicqation

  const [weight, setWeight] = useState(0);
  
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
//  logic
  let calcBmi=(e)=>{
    e.preventDefault();
    
    if(weight===0 || height===0){alert("please enter the valid weight or height")

    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
      if(bmi<25){
        setMessage("you are under weight")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("you are healthy weight person")
      }
      else{
        setMessage("you are overweight")
      }
    }

  }
  // reload
  let reload= ()=>{
    window.location.reload()
  }




  return (
    <div className="App container">
      <h2>
        BMI calculator
      </h2>
      <form onSubmit={calcBmi} action="">
        <div>
          <label htmlFor="">
            weight (lbs)
          </label>
          <input type="text" placeholder="enter your weight" value={weight} 
          onChange={(e)=>setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">
            height (in)
          </label>
          <input type="text" placeholder="enter your height" value={height}
          onChange={(e)=>setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
        </div>
        <div className="center">
          <h3>your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;

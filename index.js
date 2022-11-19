import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
const Calculater = () => {
    const calcnum = [0,1,2,3,4,5,6,7,8,9];
    const title = 'My 1st ReactJS Calculator';
    let calcresult = 0;

    return (
        <div className='calc-master-container'>
          <h2 className='calc-title'>{title}</h2>
          <input type='number' className='calc-result' defaultValue={calcresult} />
          <div className='calc-container'>
                {calcnum.reverse().map((num) => (
                    <CalcBtn key={num} text={num} />
                ))}
          </div>
        </div>
    );
  };
  const CalcBtn = (props) => {
    return <button className='calc-keypad' onClick={() => console.log(props.text)}>{props.text}</button>;
  };
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Calculater />);
  
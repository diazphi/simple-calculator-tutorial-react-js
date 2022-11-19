import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
const Calculater = () => {
    const calcnum = [0,1,2,3,4,5,6,7,8,9,'Del','=','+','-','*'];
    const title = 'Simple ReactJs Calculator';
    const [calcvalue, setcalcvalue] = useState('');
    const handleChange = event => {
        setcalcvalue(event.target.value);
        console.log(event.target.value);
      };
    const handleClick = event => {
        event.preventDefault();
        let charnumber = ['0','1','2','3','4','5','6','7','8','9'];
        if(charnumber.includes(event.target.getAttribute('data-value'))) {
            setcalcvalue(calcvalue+event.target.getAttribute('data-value'));
        } else {
            if(event.target.getAttribute('data-value') === 'Del') {
                console.log('del');
            } else if (event.target.getAttribute('data-value') === '=') {
                console.log('=');
            } else if (event.target.getAttribute('data-value') === '+') {
                console.log('+');
            } else if (event.target.getAttribute('data-value') === '-') {
                console.log('-');
            } else if (event.target.getAttribute('data-value') === '*') {
                console.log('*');
            }
        }
      };
    return (
        <div className='calc-master-container'>
          <h2 className='calc-title'>{title}</h2>
          <input type='number' className='calc-result' defaultValue={calcvalue} onChange={handleChange} />
          <div className='calc-container'>
                {calcnum.reverse().map((num) => (
                    <button key={num} data-value={num} className='calc-keypad' onClick={handleClick}>{num}</button>
                ))}
          </div>
        </div>
    );
  };

  // Author: Philip C. Diaz
  // This apps is intended only for youtube channel tutorial
  // Visit my YT Channel https://www.youtube.com/@diazphilip
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Calculater />);
  
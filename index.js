import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
const Calculater = () => {
    const calcnum = [0,1,2,3,4,5,6,7,8,9];
    const title = 'My 1st ReactJS Calculator';
    const [calcvalue, setcalcvalue] = useState('');
    const handleChange = event => {
        setcalcvalue(event.target.value);
        console.log(event.target.value);
      };
    const handleClick = event => {
        event.preventDefault();
    
        // 👇️ value of input field
        console.log('old value: ', calcvalue);
        console.log(event.target.getAttribute('data-value'));
        // 👇️ set value of input field
        setcalcvalue(event.target.getAttribute('data-value'));
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

  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Calculater />);
  
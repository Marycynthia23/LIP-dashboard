import React from 'react'
import "../RightContainer/RightContainer.css"
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  

const RightContainer = () => {
  return (
    <div className='Right'>
        {/* <div className='cardContainer'></div> */}
        <div className='cardContainer'>
      <div className='title'>
        <div className='cardTitle'>
        <Checkbox onChange={onChange} style={{color: '#1D4ED8', fontWeight: 600, fontSize: '14px'}}>247 Candidates</Checkbox>
        </div>
     <ul className='tabs'>
        <li className='lists blueText'>Qualified</li>
        <li className='lists withCircle'>
           <p className=''>Task &nbsp;</p> 
            <div className='circle'>25</div>

        </li>
        <li className='lists withCircle'>
           <p className=''>disqualified &nbsp;</p> 
            <div className='circle'>98</div>

        </li>
    </ul></div>
    <div className='cardBody'>
        <div className='cardDescription'>
            <div><Checkbox style={{width:'32px'}}/></div>
            <div className='cardInfo'>
                <div className='watermark'>AS</div>
                <div className='description'>
                    <h4 className='fullname'>Aaliyah Sanderson</h4>
                    <p className='city'>Riyadh, Saudi Arabia</p>
                    <p className='instution'>Bachelor - Cambridge University (2023 - 2023)</p>
                    <div className='ranks'>
                        <p className='rank'>#top_candidate</p>
                        <p className='rank'>#top_candidate</p>
                    </div>
                    <div className='locations'>
                        <div className='points'>New york</div>
                        <div className='points'>Marketing</div>
                        <div className='points'>London</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='cardDescription'>
            <div><Checkbox style={{width:'32px'}}/></div>
            <div className='cardInfo'>
                <div className='watermark'>AS</div>
                <div className='description'>
                    <h4 className='fullname'>Aaliyah Sanderson</h4>
                    <p className='city'>Riyadh, Saudi Arabia</p>
                    <p className='instution'>Bachelor - Cambridge University (2023 - 2023)</p>
                    <div className='ranks'>
                        <p className='rank'>#top_candidate</p>
                        <p className='rank'>#top_candidate</p>
                    </div>
                    <div className='locations'>
                        <div className='points'>New york</div>
                        <div className='points'>Marketing</div>
                        <div className='points'>London</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='cardDescription'>
            <div><Checkbox style={{width:'32px'}}/></div>
            <div className='cardInfo'>
                <div className='watermark'>AS</div>
                <div className='description'>
                    <h4 className='fullname'>Aaliyah Sanderson</h4>
                    <p className='city'>Riyadh, Saudi Arabia</p>
                    <p className='instution'>Bachelor - Cambridge University (2023 - 2023)</p>
                    <div className='ranks'>
                        <p className='rank'>#top_candidate</p>
                        <p className='rank'>#top_candidate</p>
                    </div>
                    <div className='locations'>
                        <div className='points'>New york</div>
                        <div className='points'>Marketing</div>
                        <div className='points'>London</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  
    </div>
  )
}

export default RightContainer
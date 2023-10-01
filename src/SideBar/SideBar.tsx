import "../SideBar/SideBar.css"
import { GrHomeRounded } from 'react-icons/gr';
import { BsFileEarmarkText, BsShare } from 'react-icons/bs';
import {  PiCalendarCheckLight, PiUsersThree } from 'react-icons/pi';
import { AiOutlineHeart, } from 'react-icons/ai';
import { TbSettings } from 'react-icons/tb'
import { MdKeyboardArrowLeft } from 'react-icons/md';
const SideBar = () => {
  return (
    <div className="sideCont">
      <div className="navlinks">
            <li className=''>
              <div className='emptyPhoto'></div>
            </li>
            
            <li>
              <a className='active' href={`/dashboard`}><GrHomeRounded style={{color: '#1D4ED8', fontSize: '20px'}}/></a>
            </li>
            <li>
              <a href={`/dashboard`}>
              <PiUsersThree/>
              </a>
            </li>
            <li>
              <a href={`/dashboard`}>
              <PiCalendarCheckLight/>
              </a>
            </li>
            <li>
              <a href={`/dashboard`}>
              <BsShare/>
              </a>
            </li>
            <li>
              <a href={`/dashboard`}>
                <BsFileEarmarkText/>
              </a>
            </li>
            <li>
              <a href={`/dashboard`}>
                <BsFileEarmarkText/>
              </a>
            </li>
            
            <li>
              <a href={`/dashboard`}>
              <AiOutlineHeart/>
              </a>
            </li>
            <li>
              <a href={`/dashboard`}>
                <MdKeyboardArrowLeft/>
              </a>
            </li>
            
          </div>

          <div className="navlinksDown">
          <li>
              <a href={`/dashboard`}>
              <TbSettings/>
              </a>
            </li>
            <li>
              <a href={`/dashboard`}>
              <div className='watermarkAS'>AS</div>
              </a>
            </li>
          </div>
    </div>
  )
}

export default SideBar

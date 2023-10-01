import "../LeftContainer/LeftContainer.css"
import { GoSearch } from 'react-icons/go';
import { BsFileEarmarkText } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


const LeftContainer = () => {
  return (
    <div className='left'>
        <form className="form">
            <GoSearch style={{ color: "#9AA6AC"}}/>
            <input type="text" className='search' placeholder='Search by name, edu, exp or #tag'/>
            <div className='character'>!</div>
        </form>
        <div className='filterContainer'>
            <div className='card'>
            <div className='cardhead'>
                <div>Filters</div>
                <div><span>0</span> Selected</div>
            </div>
            <div className='cardBody'>
                <div className='cardList'>
                    <div className='List'>
                        <BsFileEarmarkText/>
                        <p>Personal Information</p>
                    </div>
                    <MdOutlineKeyboardArrowDown style={{ color: "#1D4ED8"}}/>
                </div>
                <div className='cardList'>
                <div className='List'>
                        <BsFileEarmarkText/>
                        <p>Education</p>
                    </div>
                    <MdOutlineKeyboardArrowDown style={{ color: "#1D4ED8"}}/>
                </div>
                <div className='cardList'>
                <div className='List'>
                        <BsFileEarmarkText/>
                        <p>Work experience </p>
                    </div>
                    <MdOutlineKeyboardArrowDown style={{ color: "#1D4ED8"}}/>
                </div>
                <div className='cardList'>
                <div className='List'>
                        <BsFileEarmarkText/>
                        <p>Activity Filter</p>
                    </div>
                    <MdOutlineKeyboardArrowDown style={{ color: "#1D4ED8"}}/>
                </div>
                <div className='cardList'>
                <div className='List'>
                        <BsFileEarmarkText/>
                        <p>Advanced Filter</p>
                    </div>
                    <div></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LeftContainer
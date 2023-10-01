import "./Layout.css"
import {Outlet} from "react-router-dom"
import "../Layout/Layout.css"
import Dashboard from "../Dashboard/Dashboard"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import { BiEnvelope, BiUserCheck, BiUserVoice, BiUserX } from 'react-icons/bi';
import { PiTagLight } from 'react-icons/pi';


const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];


const Layout = () => {
  return (
    <div className='layoutCont'>
      <Outlet/>
      <div className="headertop">
        <div className="logo">
          <p className="logoBold">London Internship Program</p>
          <p className="logosmall">London</p>
        </div>
        
        <div className="headerRyt">
          <div className="headerdropdown">
        <Dropdown
            
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
          }}
  >
    <Typography.Link>
      <Space style={{background: "#fff", padding: "4px 20px", borderRadius: "16px"}}>
       <span style={{color: "#1D4ED8",fontSize: "16px",fontWeight: 500}}> Opportunity Browsing</span>
        <DownOutlined />
      </Space>
    </Typography.Link>
        </Dropdown>
        </div>
        <div className="icons">
          <div className="icon"><PiTagLight/></div>
          <div className="icon red"><BiUserX/></div>
          <div className="icon"><BiUserCheck/></div>
          <div className="icon"><BiUserVoice/></div>
          <div className="icon"><BiEnvelope/></div>

        </div>
        <div className="btn">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
          }}
  >
    <Typography.Link>
      <Space>
      <Dropdown.Button
        icon={<DownOutlined size={10}/>}
        type="primary"
      >
        Move to video interview
      </Dropdown.Button>
      </Space>
    </Typography.Link>
        </Dropdown>
        </div>
        </div>
      </div>
      <Dashboard/>
    </div>
  )
}

export default Layout
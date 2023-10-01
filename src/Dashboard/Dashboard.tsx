// import { Upload } from "antd"
import "../Dashboard/Dashboard.css"
import LeftContainer from "../components/sections/LeftContainer/LeftContainer"
import RightContainer from "../components/sections/RightContainer/RightContainer"


const Dashboard = () => {
  return (
    <div className="dashCont">
      <LeftContainer/>
      <RightContainer/>
      </div>
  )
}

export default Dashboard
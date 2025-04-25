import "./Navbar.css"
import { CiBrightnessUp } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
function Navbar(props)
{
    return <div className={props.dabba?"dark-navbar":"navbar"}>
        <h1> <IoSpeedometerOutline /> SpeedoType</h1>
        <div className="nav-right">
            <p className="best-text">Best WPM: <span className="best-score">{props.best}</span></p>
            <button className="theme-toggle" onClick={props.changeTheme}>
                {props.dabba?<CiBrightnessUp />:<MdDarkMode />}
            </button>
        </div>

    </div>
}
export default Navbar;
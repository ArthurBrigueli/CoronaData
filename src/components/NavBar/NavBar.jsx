import styles from './NavBar.module.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';



const NavBar = ()=>{
    return(
        <nav className={styles.navbar}>
            <div>
                
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar
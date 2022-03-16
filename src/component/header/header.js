import './header.css';
import Nav from './Nav';
import menu from './menu-icon.png'
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header(){

    const [toggleMenu, setMenuToggle] = useState(false);

    const history = useNavigate();

    useEffect(() => {
        setMenuToggle(false);
    }, [history])
    

    return (
        <div className='header'> 
            <div>
                Friends Contact App
                <Nav toggleMenu={toggleMenu} setMenuToggle={setMenuToggle}/>
                <div className="mobileMenu" onClick={()=> setMenuToggle(!toggleMenu)}>
                    <img src={menu} />
                </div>
            </div>
        </div>
    );
}
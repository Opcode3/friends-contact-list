import { Link } from "react-router-dom";

export default function Nav({toggleMenu, setMenuToggle}){
    const show = {display: "block"};
    return (
        <nav className={`nav ${toggleMenu && "open"}`}> 
            <ul>
                <li key={0}> <Link to='/'>Home </Link> </li>
                <li key={1}> <Link to='/add'> New Contact </Link></li>
                <li key={2}> <Link to='/view'> Contacts </Link> </li>
                <span className="closeMenu" onClick={() => setMenuToggle(!toggleMenu)}>CLOSE</span>
            </ul>
        </nav>
    );
}
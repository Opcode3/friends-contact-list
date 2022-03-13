import './footer.css';
export default function Footer(){
    const date = new Date();
    return (<div className="footer"> {date.getFullYear()} &copy;&nbsp;<strong> Afroteam@Giembs.com</strong>. </div>);
}
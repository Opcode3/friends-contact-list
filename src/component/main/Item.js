
export default function Item({item}){

    return (
        
        <li> 
            <b>Name:</b> {makeSentence(item.name)} <br/>
            <b>Phone Number:</b> {item.phone} <br/>
            <b>Email:</b> {makeSentence(item.email)} <br/>
            {item.whatsapp && <span><b>Whatsapp Number:</b> {item.phone}</span>}
        </li>
    )
}

function makeSentence(word){
    return word.substr(0,1).toUpperCase().concat(word.substr(1));
}
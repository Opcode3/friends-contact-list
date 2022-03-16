import { useState } from "react"

export default function Form({datas, setDatas}){
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const id = datas.length ? datas[datas.length - 1].id + 1 : 1;
    const [whatsapp, setWhatsapp] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        const newContact = {
            id: id,
            name: name,
            email: email,
            phone: phone,
            whatsapp: whatsapp
        }
        const updatedContact = [...datas, newContact];
        setDatas(updatedContact);
        setName("");
        setPhone("");
        setEmail("");
    }
    return (
        <main className="form">
            <form method="post" onSubmit={handleClick}>
                <span>Add New Contact</span>
                <div className="formCover">
                    <input type="text" name="name" required placeholder="Friend's Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="formCover">
                    <input type="email" name="email" required placeholder="Friend's Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formCover">
                    <input type="number" name="phone" required placeholder="Friend's Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <label htmlFor="whatsapp_number">
                    Whatsapp Number?<input type="checkbox" id="whatsapp_number" placeholder="Enter"checked={whatsapp} onChange={(e) => setWhatsapp(!whatsapp)} />
                    </label>
                    
                </div>
                
                <button>Add Contact</button>
            </form>
        </main>
    )
}
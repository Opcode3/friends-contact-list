import Item from "./Item"

export default function Contacts({contact_list}){
    return (
        <main className="contact_list">
            <ul>
                {
                    contact_list.map(contact => (<Item key={contact.id} item={contact} />))
                }

            </ul>
        </main>
    )
}
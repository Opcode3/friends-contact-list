export default function localDB(incoming_data = []){
    const data = localStorage.getItem("my_contact_lists");
    if(data == null){
        localStorage.setItem("my_contact_lists", JSON.stringify(incoming_data));
        return JSON.parse(localStorage.getItem("my_contact_lists"));
    }
    incoming_data.length && localStorage.setItem("my_contact_lists", JSON.stringify(incoming_data));
    return JSON.parse(localStorage.getItem("my_contact_lists"));
}
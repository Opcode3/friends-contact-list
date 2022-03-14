export default function ListItem({data}){
    const lists = Object.values(data).map((line, index) => {
        return <li key={index}> {JSON.stringify(line)}</li>
    })
    return <ul>{lists}</ul>;
}
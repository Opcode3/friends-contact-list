import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Content from "./main/content";
import Form from "./main/Form";
import Home from "./main/Home";
import Contacts from "./main/Contacts";
import { useState, useEffect } from "react";
import localDB from "../api/ApiRequest";

export default function App(){
    
    const [datas, setDatas] = useState( localDB() );
    
    useEffect(() => {
        const myDB = localDB(datas);
        console.log(myDB);
    }, [datas]);

    return (
        <div className="App">
            <Header />
                <Routes>
                    <Route exact path="/" element={ <Home />} />
                    <Route path="/add" element={ <Form datas={datas} setDatas={setDatas} />} />
                    <Route path="/view"  element={ <Contacts contact_list={datas} />} />
                    <Route path="*" element={ <Content title=" 404 page" />} />
                </Routes>
            <Footer />
        </div>
    )
}
import React, {useEffect, useState} from 'react'
import '../assets/css/index.css'
import {Header, Content, Footer} from '../components/'

const Home = () => {

    const [cases, setCases] = useState(undefined)

    const getCases = async () => {
        await fetch(
            `https://covid-193.p.rapidapi.com/statistics?country=indonesia`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key":
                        "a291b5c645msh99935275aaf55bap1825f2jsn3efd2bce260c",
                },
            }
        )
            .then(async (response) => {
                let res = await response.json();
                let datas = await res.response;
                datas.forEach((data) => {
                    setCases(data);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCases();
    }, []);

    return (
        <>
            <Header cases={cases} />
            <Content />
            <Footer />
        </>
    )
}

export default Home
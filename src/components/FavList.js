import { useEffect, useState } from "react";
import MemeList from './MemeList';

function FavList() {

    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_SERVER_URL}/favMeme`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavArr(data);
    }

    useEffect(() => {
        sendReq();
    }, [])

    return (
        <>
            <h1>FavList</h1>
            <MemeList favArr={favArr} />
        </>
    );
}

export default FavList;
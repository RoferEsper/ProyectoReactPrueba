import { useState, useEffect } from "react";
import axios from 'axios';


function UseHome() {
    const [movie, setmovie] = useState([]);
    const [input, setinput] = useState("warrior");
    const [page, setpage] = useState(1);

            // PARA DESABILITAR BUSQUEDA
    // const [disable, setdisabled] = useState("true");



    useEffect(() => {
        GetMethod();

    }, [page]);



    async function GetMethod() {
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${input}&page=${page}&apikey=aa9fe492`);
        setmovie(data.Search);

    }

    function OnChangeInput(e) {
            let result = e.target.value;
            setinput(result)
            
    }


    function SearchMovies() {
        GetMethod();
        console.log(movie)
    }



    return {
        movie,
        SearchMovies,
        OnChangeInput,
        setpage

    }
}

export default UseHome;
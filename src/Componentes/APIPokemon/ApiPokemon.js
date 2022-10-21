import React, {useState, useEffect} from 'react';


const ApiPokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    // const [poke, setPoke] = useState('')
    const [clicks, setClicks] = useState('');

    useEffect(()=>{
        if (clicks !== ''){

            fetch("https://pokeapi.co/api/v2/pokemon")  //atravez de get hacemos un llamado, un request
                .then(response => response.json())
                .then(responseJson => {
                    let nombre = responseJson.results; //depende a que informacion quiere entrar con el data.results o 
                    setPokemon(nombre);
                console.log("nombre")
                })
        }
        //Llamada a la api con Axios

        /*
        GET: -> Para obtener datos o recuperarlos
        POST: -> Nuevos Registros
        axios.post(URL, {OBJETO})
            .then(res => ACCIONES)
        PUT: ->Actualizar Registros
        axios.put(URL, {OBJETO})
            .then(res => ACCIONES)
        
        DELETE: -> Borra Registros
        axios.delete(URL)
            .then(res => ACCIONES)
        */
        

    }, [clicks])

    const hizoClick = () => {
        setClicks(clicks+1);
    }
    
    return(
        <div>
            
            <button className="btn btn-warning" onClick={hizoClick}>Fetch Pokemon</button>
            {
                pokemon.map(Pokemon => 
                <li>{Pokemon.name}</li>
                )
            }
            
        </div>
    )


}

export default ApiPokemon;
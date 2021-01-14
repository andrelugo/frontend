import './App.css';
import './hello.css';
import { useState, useEffect } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';

export function AddTask() {
    const [texto, setTexto] = useState("");
    const [count, setCount] = useState(0);
    const [lista, setLista] = useState([]);

    useEffect(function () {
        //Remover e add no backend
        console.log(lista);
    }, [lista])

    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleClick(event) {
        event.preventDefault();
        setCount(count + 1);
        setLista([...lista, texto]);
    }
    function handleChange(e) {
        setTexto(e.target.value);
    }
    const Nomedis = (nome_sala) => (nome_sala === "teste") ? <h2 style={{ color: 'red' }}>O nome {nome_sala} já existe, escolha outro nome.</h2> : <div><h2 style={{ color: 'green' }}>O nome {nome_sala} disponível.</h2><button type="submit">Criar</button></div>

    function handleRemove(indice) {
        console.log(indice);
        const newArray = [...lista];
        newArray.splice(indice, 1);
        setLista(newArray);
    }

    return (
        <div>
            <form className="example" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Adicionar..." name="add"></input>
                <button type="submit" onClick={handleClick}>Adicionar</button>
            </form>
            <h1>Clicado {count} vezes.</h1>
            {Nomedis(texto)}
            {lista.map((element, index) => <p>{element} <CancelIcon onClick={() => handleRemove(index)}>{index}</CancelIcon></p>)}
        </div>
    );
}
    // function listar(){
    //     const listaHtml = []
    //     lista.forEach(function(element){
    //         listaHtml.push(<p>{element}</p>);
    //     })
    //     return listaHtml
    // }

    // function listar(){ 
    //     return lista.map(function(element){ return <p>{element}</p>})
    // }

    // const listar = () => lista.map((element) => <p>{element}</p>)

// export function Andrezao({saldo="0",color="blue",texto="Beleza"}) {
//     console.log(saldo)

//     // if (saldo < 0){
//     //     color="red";
//     //     texto="Fudeu";
//     // }
//     // color=saldo < 0 ? "red":"blue";

//     // return(
//     // <h2 style={{color}}> {saldo} {texto}</h2>
//     // );
// return (saldo < 0) ? <h2 style={{color: 'red'}}>{saldo} Fudeu</h2> : <h2 style={{color}}>{saldo} Belezura</h2>
// }

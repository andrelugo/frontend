import { useState, useEffect } from 'react';
import './styles.css';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';


export default function Home() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneList, setPhoneList] = useState([]);

    useEffect(function () {
        //Remover e add no backend
        axios.get('http://192.168.15.5:8080/consumers/5fff5557fe9c22e899874f1d')
            .then(function (response) {
                // handle success
                console.log(response);
                //iterar no array response.data
                //setPhoneList(response.data.map((element) => element.Number))
                setPhoneList(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://192.168.15.5:8080/consumer', { "StoreID": "5fff5557fe9c22e899874f1d", "Name": name, "Phone": phone })
            .then(function () {
                setPhoneList([...phoneList, { "Name": name, "Number": phone }]);
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    function handleChangePhone(e) {
        setPhone(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleRemove(index, phone) {
        //console.log(index);
        axios.delete(`http://192.168.15.5:8080/consumer/5fff5557fe9c22e899874f1d/${phone}`)
            .then(function () {
                const newArray = [...phoneList];
                newArray.splice(index, 1);
                setPhoneList(newArray);
            })
            .catch(function (error) { console.log(error) });
    }

    return (
        <div className="queue-wrapper">
            <ul className="queue-list">
                {phoneList.map((element, index) => <li>{element.Number} - {element.Name} <CancelIcon onClick={() => handleRemove(index, element.Number)}>{index}</CancelIcon></li>)}
            </ul>
            <form className="form-queue" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChangeName} placeholder="Nome"></input>
                <input type="text" onChange={handleChangePhone} placeholder="Telefone"></input>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}
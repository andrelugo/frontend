import { useState, useEffect } from 'react';
import './styles.css';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';

export default function Home({ storeId = '6005d6adf10778d52e887d89' }) {
  const API_URI = 'http://localhost:8080';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneList, setPhoneList] = useState([]);

  useEffect(function () {
    //Remover e add no backend
    axios
      .get(`${API_URI}/consumers/${storeId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        //iterar no array response.data
        //setPhoneList(response.data.map((element) => element.phone))
        if (response.data) setPhoneList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${API_URI}/consumer`, {
        storeid: storeId,
        name: name,
        phone: phone,
      })
      .then(function () {
        setPhoneList([...phoneList, { name: name, phone: phone }]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const checkPhone = (phone) =>
    phoneList.some((elem) => elem.phone === phone) ? (
      <button type='submit'>Adicionar</button>
    ) : (
      // <h4 style={{ color: 'red' }}>O número {phone} já está na fila.</h4> :
      <button type='submit'>Adicionar</button>
    );

  function handleRemove(index, phone) {
    //console.log(index);
    axios
      .delete(`${API_URI}/consumer/${storeId}/${phone}`)
      .then(function () {
        const newArray = [...phoneList];
        newArray.splice(index, 1);
        setPhoneList(newArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='queue-wrapper'>
      <ul className='queue-list'>
        {phoneList.map((element, index) => (
          <li key={element.phone}>
            {element.phone} - {element.name}{' '}
            <CancelIcon onClick={() => handleRemove(index, element.phone)}>
              {index}
            </CancelIcon>
          </li>
        ))}
      </ul>
      <form className='form-queue' onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChangeName}
          placeholder='Nome'
        ></input>
        <input
          type='text'
          onChange={handleChangePhone}
          placeholder='Telefone'
        ></input>
        {checkPhone(phone)}
        {/* <button type="submit">Adicionar</button> */}
      </form>
    </div>
  );
}

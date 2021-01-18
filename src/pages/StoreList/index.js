import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon } from '@material-ui/core';
import { QueueList, QueueForm } from '../../components/';
import axios from 'axios';

import './styles.css';

const Home = ({ storeId = '6005d6adf10778d52e887d89' }) => {
  const classes = useStyles();

  const API_URI = 'http://localhost:8080';

  const [addConsumerForm, setAddConsumerForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneList, setPhoneList] = useState([]);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  useEffect(
    function () {
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
    },
    [storeId]
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div>
      {!addConsumerForm ? (
        <>
          <QueueList phoneList={phoneList} onRemove={handleRemove} />
          <Button
            onClick={() => {
              setAddConsumerForm(true);
            }}
            className={classes.addBtn}
          >
            <Icon color='primary' style={{ fontSize: 50 }}>
              add_circle
            </Icon>
          </Button>
        </>
      ) : (
        <>
          <QueueForm
            onChangePhone={(e) => {
              const phone = e.target.value;
              setPhone(phone);
              setIsPhoneValid(!phoneList.some((elem) => elem.phone === phone));
            }}
            onChangeName={(e) => {
              setName(e.target.value);
            }}
            onSubmit={handleSubmit}
            onCancel={() => {
              setAddConsumerForm(false);
            }}
            disableAddBtn={!isPhoneValid}
          />
        </>
      )}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  addBtn: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  backBtn: {
    marginTop: 'auto',
  },
}));

export default Home;

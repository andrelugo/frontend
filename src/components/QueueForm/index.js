import { makeStyles } from '@material-ui/core/styles';
import { Card, Input, Button, Typography } from '@material-ui/core';

const QueueForm = ({
  onChangePhone,
  onChangeName,
  onSubmit,
  onCancel,
  disableAddBtn = false,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.formWrapper}>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.inputWrapper}>
            <Input
              placeholder='Nome'
              className={classes.input}
              onChange={onChangeName}
            />
            <Input
              placeholder='Telefone'
              className={classes.input}
              onChange={onChangePhone}
            />
          </div>
        </form>
      </Card>
      <div className={classes.actionsBtn}>
        <Button
          disabled={disableAddBtn}
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
        >
          Adicionar
        </Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    width: '100%',
    padding: 5,
  },
  formWrapper: {
    margin: '40px 0 40px 0',
  },
  button: {
    marginLeft: 'auto',
  },
  input: {
    margin: 5,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  actionsBtn: {
    display: 'flex',
    width: '50%',
  },
}));

export default QueueForm;

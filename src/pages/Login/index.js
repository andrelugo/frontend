import { makeStyles } from '@material-ui/core/styles';
import { Card, Input, Button, Typography } from '@material-ui/core';

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loginWrapper}>
        <Card>
          <form className={classes.form} onSubmit={() => {}}>
            <Input className={classes.input} placeholder='Usuário' />
            <Input
              className={classes.input}
              type='password'
              placeholder='Senha'
            />
          </form>
        </Card>
        <div className={classes.actionBtn}>
          <Button variant='contained' color='primary' size='large'>
            Login
          </Button>
          <Button variant='outlined' size='large'>
            Registrar
          </Button>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 50,
  },
  input: {
    margin: 5,
  },
  actionBtn: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 10,
  },
}));

export default Login;

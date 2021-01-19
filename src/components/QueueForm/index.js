import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Cadastrar novo cliente
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="Nome"
                fullWidth
                autoComplete="cc-name"
                onChange={onChangeName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              {disableAddBtn ? (
                <TextField
                  error
                  helperText="Telefone já cadastrado."
                  required
                  id="phone"
                  label="Telefone"
                  fullWidth
                  autoComplete="cc-number"
                  onChange={onChangePhone}
                />
              ) : (
                <TextField
                  required
                  id="phone"
                  label="Telefone"
                  fullWidth
                  autoComplete="cc-number"
                  onChange={onChangePhone}
                />
              )}
            </Grid>

            <Grid item xs={12}></Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button onClick={onCancel} className={classes.button}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
              className={classes.button}
              disabled={disableAddBtn}
            >
              OK
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default QueueForm;

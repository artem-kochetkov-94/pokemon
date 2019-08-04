import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3, 0),
        padding: theme.spacing(2, 4)
    },
    grid: {
        margin: "auto",
        maxWidth: 1000,
    },
    form: {
        display: "flex",
        flexDirection: "column"
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Grid container spacing={5} justify="center" alignItems="center" className={classes.grid}>
            <Grid item xs={12} sm={6} container justify="flex-end">
                <img src="https://placehold.it/300x500"></img>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Pokemon
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Зарегестрируйтесь, что-бы начать играть
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        <Button variant="contained" color="primary" size="large">Регистрация</Button>
                    </form>
                </Paper>
                <Paper className={classes.paper}>
                    Есть аккаунт? Вход
                </Paper>
            </Grid>
        </Grid>
    )
}

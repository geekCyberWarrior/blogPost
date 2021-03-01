import { makeStyles } from "@material-ui/core/styles";
import { deepPurple, red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    googleButton: {
        marginBottom: theme.spacing(2),
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
    },
}));

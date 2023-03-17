import {createTheme} from "@mui/material/styles"
import {purple, pink, grey, green} from "@mui/material/colors"
import { Action } from "history";

const myTheme = createTheme({
    palette: {
    primary: pink,
    secondary: {
        main: purple[700]
    },
    action: {
        main: grey[500]
    },
    success: {
        main: green[500]
    }
    }
    });

export const publicConstants = {
    theme: myTheme
}
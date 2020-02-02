import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typical from 'react-typical';
import Typography from "@material-ui/core/Typography";
import Particles from 'react-particles-js';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const particlesParam = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Apple Color Emoji"'
    },
});

const useStyles = makeStyles({
    cardStyle: {
        width: "30%",
        display: "inline-block",
        height: '35vw',
        marginLeft: '10%',
        marginTop: '2%',
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderStyle: 'solid',
        borderWidth: 'thick'
    },
    cardTitle: {
        marginTop: '20%'
    }
});

function withMyHook(Component){
    return function WrappedComponent(props){
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        //const classes = this.props.classes;
        return(
            <div>
                <Particles params={particlesParam}/>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3">
                        Coming soon .. <b>F E TT C H</b>
                    </Typography>
                    <Typical
                        steps={['Shopping whenever you want', 1000, 'Wherever you are', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <Typography variant="h5">
                        Your favourite brands delivered instantly
                    </Typography>
                    <Typography variant="h5">
                        Redefining same day delivery
                    </Typography>
                </ThemeProvider>
            </div>
        )
    }
}


Dash = withMyHook(Dash);
export default Dash;
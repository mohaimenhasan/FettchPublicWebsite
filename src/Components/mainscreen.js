import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typical from 'react-typical';
import Typography from "@material-ui/core/Typography";
import Particles from 'react-particles-js';
import FetchLogo from '../Static/Fettch Logo.png';

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
    imgStyle:{
        marginTop: "-50vw",
        height: "40vw"
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
        const classes = this.props.classes;
        return(
            <div>
                <ThemeProvider theme={theme}>
                    <Particles params={particlesParam}/>
                    <img className={classes.imgStyle} alt={"Fetch Icon"} src={FetchLogo}/>
                    <Typography variant="h3">
                        Coming soon .. <b style={{color: "#002aff"}}>F E TT C H</b>
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
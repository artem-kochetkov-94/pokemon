import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { SvgIcon } from '@material-ui/core';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function Profile() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Material-UI
                </Typography>
            </Toolbar>
            <IconButton aria-label="" color="inherit">
                <HomeIcon></HomeIcon>
            </IconButton>
        </AppBar>
    )
}
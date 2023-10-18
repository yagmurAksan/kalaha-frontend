import {Typography} from "@mui/joy";
import {Paper} from "@mui/material";

function Information({type, playerId}) {

    const color = type === 'Winner' ? '#e57373' : '#3B71CA';

    const style = {padding:30, margin: 35, width:"10%", height: "100%", backgroundColor: color, textAlignVertical: "center", textAlign: "center" }

    return <div>
        <Paper style={style} elevation={2}>
            <Typography variant="h6" component="h4" style={{ color: 'white' }}>
                {type}
            </Typography>
            <Typography variant="h2" component="h2" style={{ color: 'white' }}>Player {playerId}</Typography>
        </Paper>
    </div>;
}

export default Information;
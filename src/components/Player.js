import {Typography} from "@mui/joy";
import {Paper} from "@mui/material";

function Player({playerId}) {

    const s = {margin: 55, backgroundColor: '#3B71CA', textAlignVertical: "center", textAlign: "center" }

    return <div>
        <Paper style={s}>
            <Typography style={{ color: 'white'}}>Player {playerId}</Typography>
        </Paper>
    </div>;
}

export default Player;
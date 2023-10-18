import ButtonGroup from "@mui/joy/ButtonGroup";
import {Chip} from "@mui/material";

function BigPit({bigPitList}) {

    return <div>
        <ButtonGroup spacing="59rem">
            {bigPitList.map((pit) => (
                <div key={pit.id}>
                    <Chip sx={{ width: 100, height: 150 }} label={pit.numberOfStones} color="primary" />
                </div>
            ))}
        </ButtonGroup>
    </div>;
}

export default BigPit;
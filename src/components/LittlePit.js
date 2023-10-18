import ButtonGroup from "@mui/joy/ButtonGroup";
import {Button} from "./Button";

function LittlePit({littlePitList, handleClick, disabled}) {

    return <div>
        <ButtonGroup spacing="3.8rem" sx={{ml: 15}}>
            {littlePitList.map((pit) => (
                <div key={pit.id}>
                    <Button onClick={e => handleClick(pit.id)} disabled={pit.numberOfStones === 0 || disabled}>{pit.numberOfStones}</Button>
                </div>
            ))}
        </ButtonGroup>
    </div>;
}

export default LittlePit;
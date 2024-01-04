import {useEffect, useState} from "react";
import api from '../config/axiosConfig';
import LittlePit from "./LittlePit";
import BigPit from "./BigPit";
import Constants from "../constant/Constants";
import Player from "./Player";
import Information from "./Information";

function Game() {
    const [littlePitListOfActivePlayer, setLittlePitListOfActivePlayer] = useState([]);
    const [littlePitListOfOpponentPlayer, setLittlePitListOfOpponentPlayer] = useState([]);
    const [bigPitList, setBigPitList] = useState([]);
    const [playerId, setPlayerId] = useState(1);
    const [winnerId, setWinnerId] = useState(undefined);
    const [isFinished, setIsFinished] = useState(false);

    async function fetchData() {
        const response = await api.post(`/api/v1/startGame`);
        fillStatesFromServerData(response);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fillStatesFromServerData = (response) => {
        let pitList = response.data.pitList;
        setLittlePitListOfActivePlayer(pitList.slice(Constants.FIRST_PLAYER_FIRST_PIT_ID, Constants.FIRST_PLAYER_BIG_PIT_ID).reverse());
        setLittlePitListOfOpponentPlayer(pitList.slice(Constants.SECOND_PLAYER_FIRST_PIT_ID, Constants.SECOND_PLAYER_BIG_PIT_ID));
        setBigPitList(Array.of(pitList.at(Constants.FIRST_PLAYER_BIG_PIT_ID), pitList.at(Constants.SECOND_PLAYER_BIG_PIT_ID)));
    }

    const handleClick = async (id) => {
        const response = await api.put(`/api/v1/makeMove/${id}`);
        fillStatesFromServerData(response);

        setPlayerId(response.data.playerInTurn.id);
        setWinnerId(response.data.playerWinner?.id);
        setIsFinished(response.data.playerWinner!==null);
    };

    return (
        <div>
            <Player playerId={Constants.FIRST_PLAYER_ID}/>
            <LittlePit littlePitList={littlePitListOfActivePlayer} handleClick={handleClick} disabled={isFinished || playerId!==Constants.FIRST_PLAYER_ID}/>
            <BigPit bigPitList={bigPitList}/>
            <LittlePit littlePitList={littlePitListOfOpponentPlayer} handleClick={handleClick} disabled={isFinished || playerId!==Constants.SECOND_PLAYER_ID}/>
            <Player playerId={Constants.SECOND_PLAYER_ID}/>
            { !isFinished ? <Information type="Turn" playerId={playerId}/> : <Information type="Winner" playerId={winnerId}/> }
        </div>
    );
}

export default Game;
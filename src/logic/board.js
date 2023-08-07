import { TURNS, WINNER_COMBINATIONS } from "../constants";


//true if there is a winner
export const checkWinner = (boardToCheck)=>{
    return(WINNER_COMBINATIONS.some((element)=>{
        return(
            (boardToCheck[element[0]]) && (boardToCheck[element[0]] === boardToCheck[element[1]]) && (boardToCheck[element[0]] === boardToCheck[element[2]])
        );
    }));
}


export const newTurn = (activeTurn) => {
    
    return( activeTurn === TURNS.X ? TURNS.O : TURNS.X );    
}

export const keepPlaying = (newBoard) =>{
    return(
        newBoard.some((element)=>{
            return(element === null);
        })
    )
}
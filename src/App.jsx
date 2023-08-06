
import { useState } from 'react';
import './App.css'

const TURNS = {
    X:'x',
    O: 'o'
}


const Square = ({children, isSelected, updateBoard, index}) => {

    const className = isSelected ? "is-selected" : "";

    const handlerOnClick = (index)=>{
        updateBoard(index);
    }

    return(
        <div 
            className={`square ${className}`}
            onClick={()=>{handlerOnClick(index)}}
        >
            {children}
        </div>
    );
};

const newTurn = (activeTurn) => {
    
    return( activeTurn === TURNS.X ? TURNS.O : TURNS.X );
    
}


function App() {

    const [board,setBoard] = useState(Array(9).fill(null));
    const [turn,setTurn] = useState(TURNS.X);

    const updateBoard = (index) => {
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        setTurn(newTurn(turn)); //(oldState) =>(!oldState)
    }

    return (
        <>
        <main className='board'>
                <h1>TIC TAC TOE</h1>
                <section className='game'>
                    {board.map((_,index) =>{
                        return(
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                    
                    }
                </section>

                <section className='turn'>

                    <Square isSelected={turn === TURNS.X}>    
                        {TURNS.X}
                    </Square>
                    
                    <Square isSelected={turn === TURNS.O}>    
                        {TURNS.O}
                    </Square>

                </section>

        </main>
        </>
    )
}

export default App





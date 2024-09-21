import React, { useState } from 'react';
import './TicTacToe.css'; // Import the CSS for styling

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        setWinner(calculateWinner(newBoard));
    };

    const renderSquare = (index) => (
        <button className={`square ${winner ? 'disabled' : ''}`} onClick={() => handleClick(index)}>
            {board[index]}
        </button>
    );

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className="tic-tac-toe-container">
            <h2>Tic Tac Toe</h2>
            <div className="status">{status}</div>
            <div className="board">
                {[0, 1, 2].map((row) => (
                    <div key={row} className="board-row">
                        {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
                    </div>
                ))}
            </div>
            {winner && <button className="reset-button" onClick={resetGame}>Play Again</button>}
        </div>
    );
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe;

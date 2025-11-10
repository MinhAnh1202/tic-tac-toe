import { useState } from 'react';

function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      className={`square${highlight ? ' highlight' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares, i);
  }

  const winner = calculateWinner(squares);
  const winningLine = getWinningLine(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (squares.every((s) => s !== null)) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }, (_, row) => {
        const cols = Array.from({ length: 3 }, (_, col) => {
          const index = row * 3 + col;
          const isHighlight = winningLine ? winningLine.includes(index) : false;
          return (
            <Square
              key={index}
              value={squares[index]}
              onSquareClick={() => handleClick(index)}
              highlight={isHighlight}
            />
          );
        });
        return (
          <div className="board-row" key={row}>
            {cols}
          </div>
        );
      })}
    </>
  );
}

export default function Game() {
  // history now stores objects: { squares: [...], lastMove: index|null }
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), lastMove: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function resetGame() {
    setHistory([{ squares: Array(9).fill(null), lastMove: null }]);
    setCurrentMove(0);
    setIsAscending(true);
  }

  function handlePlay(nextSquares, lastMoveIndex) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, lastMove: lastMoveIndex },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const movesElements = history.map((entry, move) => {
    const last = entry.lastMove;
    let description;
    if (move > 0) {
      // Compute (row, col) 1-based from last
      const row = Math.floor(last / 3) + 1;
      const col = (last % 3) + 1;
      description = 'Go to move #' + move + ` (${row}, ${col})`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        {move === currentMove ? (
          move > 0 ? (
            // show current move with coordinates too
            (() => {
              const row = Math.floor(last / 3) + 1;
              const col = (last % 3) + 1;
              return <span>You are at move #{move} ({row}, {col})</span>;
            })()
          ) : (
            <span>You are at game start</span>
          )
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  // Sort moves according to isAscending
  const moves = isAscending ? movesElements : movesElements.slice().reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>
          Sort moves: {isAscending ? 'Ascending' : 'Descending'}
        </button>
        <button onClick={resetGame} style={{ marginLeft: 8 }}>Reset</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

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

function getWinningLine(squares) {
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
      return lines[i];
    }
  }
  return null;
}

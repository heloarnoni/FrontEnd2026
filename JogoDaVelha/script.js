// =====================================================================
// JOGO DA VELHA EM REACT - versao simples (sem historico de jogadas)
//
// Lembrete do slide "Pegando na sua caneta de código": se for colar
// esse arquivo no CodePen, troque o preprocessador do painel JS para
// "Babel", senão o JSX não funciona.
// =====================================================================

import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";
import { StrictMode } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { useState } from "https://esm.sh/react@18";

// ---------------------------------------------------------------------
// SQUARE
// Cada "quadradinho" do tabuleiro.
// ---------------------------------------------------------------------
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// ---------------------------------------------------------------------
// BOARD
// O tabuleiro com os 9 quadrados. Recebe props do componente pai (Game):
//   - xIsNext  -> de quem é a vez (true = X, false = O)
//   - squares  -> o array com as 9 casas
//   - onPlay   -> funcao chamada quando uma jogada valida acontece
// ---------------------------------------------------------------------
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Vencedor: " + winner;
  } else if (!squares.includes(null)) {
    status = "Empate!";
  } else {
    status = "Próximo jogador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// ---------------------------------------------------------------------
// CALCULATEWINNER
// Verifica as 8 combinações possíveis de vitória.
// ---------------------------------------------------------------------
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6],           // diagonais
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ---------------------------------------------------------------------
// GAME
// Componente principal. Aqui SEM historico: guarda só o estado atual
// do tabuleiro (squares) e de quem é a vez (xIsNext).
// ---------------------------------------------------------------------
function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// RENDERIZAÇÃO
// ---------------------------------------------------------------------
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);

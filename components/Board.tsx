import { useState, useEffect } from 'react'
import Square from './Square'

export default function Board() {
  const N = 4
  const idealTiles = initIdealTiles()
  const [tiles, setTiles] = useState(idealTiles)
  const [zero, setZero] = useState([N - 1, N - 1])
  const [isStarted, setIsStarted] = useState(false)
  const hasWon = isSolved()

  // check tile state if game is over or not
  function isSolved() {
    return JSON.stringify(tiles) === JSON.stringify(idealTiles)
  }

  // fn to start game with random tiles
  function startGame() {
    generateRandom()
    setIsStarted(true)
  }

  // fn to generate random tiles
  function generateRandom() {
    let [l, r] = [20, 50]
    let rndN = Math.floor(Math.random() * (r - l + 1) + l)
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]

    let newTiles = [...tiles]
    let [zx, zy] = zero

    for (let i = 0; i < rndN; i++) {
      let rndD = Math.floor(Math.random() * 4)

      let [nx, ny] = [zx + dx[rndD], zy + dy[rndD]]
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      newTiles[zx][zy] = newTiles[nx][ny]
      newTiles[nx][ny] = 0
      ;(zx = nx), (zy = ny)
    }
    setZero([zx, zy])
    setTiles(newTiles)
  }

  // move pieces in tiles with adjacent zero
  function movePieces(x: number, y: number): void {
    const [zx, zy] = [...zero]
    if (Math.abs(x - zx) + Math.abs(y - zy) !== 1) return
    let newTiles = [...tiles]
    newTiles[zx][zy] = newTiles[x][y]
    newTiles[x][y] = 0
    setZero([x, y])
    setTiles(newTiles)
  }

  // initialize ideal winnig tiles
  function initIdealTiles(): number[][] {
    let tiles = Array(N)
    for (let i = 0; i < N; i++) {
      tiles[i] = []
      for (let j = 0; j < N; j++) {
        tiles[i][j] = i * N + j + 1
      }
    }
    tiles[N - 1][N - 1] = 0
    return tiles
  }

  return (
    <div>
      {isStarted ? (
        <button
          onClick={() => generateRandom()}
          className="mt-2 rounded-md bg-sky-500 px-4 py-2 font-medium text-white"
        >
          Reset Game
        </button>
      ) : (
        <button
          onClick={() => startGame()}
          className="mt-2 rounded-md bg-sky-500 px-4 py-2 font-medium text-white"
        >
          Start Game
        </button>
      )}
      <div className="mt-2 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <div>
          {tiles.map((rows: number[], i: number) => {
            return (
              <div key={i} className="flex">
                {rows.map((item: number, j: number) => (
                  <div key={j} onClick={() => movePieces(i, j)}>
                    <Square row={i} col={j} val={item} />
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <p className="mt-2 font-bold">
        {hasWon && isStarted ? 'Puzzle solved 🧠 🎉' : ''}
      </p>
    </div>
  )
}

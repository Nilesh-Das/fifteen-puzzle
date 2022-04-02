import type { NextPage } from 'next'
import Head from 'next/head'
import Board from '../components/Board'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>15 Puzzle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-sky-500">15 Puzzle</h1>

        <p className="mt-3 text-2xl font-bold">
          Slide the tiles in numerical order to win the game
        </p>
        <Board />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://nilesh-das.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by <p className="font-bold">Nilesh Das</p>
        </a>
      </footer>
    </div>
  )
}

export default Home

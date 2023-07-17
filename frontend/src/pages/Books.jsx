import React, { useState } from 'react'
import './Books.css'
import BookCard from '../components/BookCard'
import AllThatGlitters from '../books/AllThatGlitters.png'
import AnEncounterWithLadyLuck from '../books/AnEncounterWithLadyLuck.png'
import BothEndsBurning from '../books/BothEndsBurning.png'
import EscapingTheOtherSideOfMidnight from '../books/EscapingTheOtherSideOfMidnight.png'
import MakingItOutAlive from '../books/MakingItOutAlive.png'
import OurMothersOfInvention from '../books/OurMothersOfInvention.png'
import ReflectionsOfAVampire from '../books/ReflectionsOfAVampire.png'
import SantasMidLifeCrisis from '../books/SantasMidLifeCrisis.png'
import Sudoku from '../books/Sudoku.png'
import SudokuStonkers from '../books/SudokuStonkers.png'
import Y from '../books/Y.png'

const Books = () => {

  const bookList = [
    {
      id: 1,
      name: 'Both Ends Burning',
      img: BothEndsBurning,
      category: 'Fiction',
      author: 'Peter Darling'
    },
    {
      id: 2,
      name: 'Y',
      img: Y,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      id: 3,
      name: 'Santa’s Mid Life Crisis',
      img: SantasMidLifeCrisis,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      id: 4,
      name: 'Reflections Of A Vampire',
      img: ReflectionsOfAVampire,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      id: 5,
      name: 'An Encounter With Lady Luck',
      img: AnEncounterWithLadyLuck,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      id: 6,
      name: 'Our Mothers of Invention',
      img: OurMothersOfInvention,
      category: 'Non-Fiction',
      author: 'Riley J Sommers'
    },
    {
      id: 7,
      name: 'Escaping The Other Side of Midnight',
      img: EscapingTheOtherSideOfMidnight,
      category: 'Non-Fiction',
      author: 'Peter Sharpe'
    },
    {
      id: 8,
      name: 'Making It Out Alive',
      img: MakingItOutAlive,
      category: 'Non-Fiction',
      author: 'J.D Clement'
    },
    {
      id: 9,
      name: 'All That Glitters',
      img: AllThatGlitters,
      category: 'Non-Fiction',
      author: 'Peter Sharpe'
    },
    {
      id: 10,
      name: 'Sudoku',
      img: Sudoku,
      category: 'Sudoku',
      author: 'NA'
    },
    {
      id: 11,
      name: 'Sudoku Stonkers',
      img: SudokuStonkers,
      category: 'Sudoku',
      author: 'NA'
    }
  ]

  const [filteredList, setFilteredList] = useState(bookList)

  const clickHandler = (e) => {
    if (e.target.textContent === 'All') {
      setFilteredList(bookList)
    }
    if (e.target.textContent === 'Fiction') {
      setFilteredList(bookList.filter((book) => book.category === 'Fiction'))
    }
    if (e.target.textContent === 'Non-Fiction') {
      setFilteredList(bookList.filter((book) => book.category === 'Non-Fiction'))
    }
    if (e.target.textContent === 'Sudoku') {
      setFilteredList(bookList.filter((book) => book.category === 'Sudoku'))
    }
  }

  return (
    <section className='container'>
      <div className="book-button-container">
        <button onClick={clickHandler}>All</button>
        <button onClick={clickHandler}>Fiction</button>
        <button onClick={clickHandler}>Non-Fiction</button>
        <button onClick={clickHandler}>Sudoku</button>
      </div>
      <div className="books">
        {filteredList.map((book) => (
          <BookCard name={book.name} img={book.img} id={book.id}/>
        ))}
      </div>
    </section>
  )
}

export default Books
import React, { useState } from 'react'
import './Books.css'
import BookCard from '../components/BookCard'
import AllThatGlitters from '../assets/books/AllThatGlitters.PNG'
import AnEncounterWithLadyLuck from '../assets/books/AnEncounterWithLadyLuck.PNG'
import BothEndsBurning from '../assets/books/BothEndsBurning.PNG'
import EscapingTheOtherSideOfMidnight from '../assets/books/EscapingTheOtherSideOfMidnight.PNG'
import MakingItOutAlive from '../assets/books/MakingItOutAlive.PNG'
import OurMothersOfInvention from '../assets/books/OurMothersOfInvention.PNG'
import ReflectionsOfAVampire from '../assets/books/ReflectionsOfAVampire.PNG'
import SantasMidLifeCrisis from '../assets/books/SantasMidLifeCrisis.PNG'
import Sudoku from '../assets/books/Sudoku.PNG'
import SudokuStonkers from '../assets/books/SudokuStonkers.PNG'
import Y from '../assets/books/Y.PNG'

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
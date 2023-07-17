import React, { useState } from 'react'
import './Books.css'
import BookCard from '../components/BookCard'
import AllThatGlitters from '../assets/books/AllThatGlitters.png'
import AnEncounterWithLadyLuck from '../assets/books/AnEncounterWithLadyLuck.png'
import BothEndsBurning from '../assets/books/BothEndsBurning.png'
import EscapingTheOtherSideOfMidnight from '../assets/books/EscapingTheOtherSideOfMidnight.png'
import MakingItOutAlive from '../assets/books/MakingItOutAlive.png'
import OurMothersOfInvention from '../assets/books/OurMothersOfInvention.png'
import ReflectionsOfAVampire from '../assets/books/ReflectionsOfAVampire.png'
import SantasMidLifeCrisis from '../assets/books/SantasMidLifeCrisis.png'
import Sudoku from '../assets/books/Sudoku.png'
import SudokuStonkers from '../assets/books/SudokuStonkers.png'
import Y from '../assets/books/Y.png'

const Books = () => {

  const bookList = [
    {
      name: 'Both Ends Burning',
      img: BothEndsBurning,
      category: 'Fiction',
    },
    {
      name: 'Y',
      img: Y,
      category: 'Fiction',
    },
    {
      name: 'Santa’s Mid Life Crisis',
      img: SantasMidLifeCrisis,
      category: 'Fiction',
    },
    {
      name: 'Reflections Of A Vampire',
      img: ReflectionsOfAVampire,
      category: 'Fiction',
    },
    {
      name: 'An Encounter With Lady Luck',
      img: AnEncounterWithLadyLuck,
      category: 'Fiction',
    },
    {
      name: 'Our Mothers of Invention',
      img: OurMothersOfInvention,
      category: 'Non-Fiction',
    },
    {
      name: 'Escaping The Other Side of Midnight',
      img: EscapingTheOtherSideOfMidnight,
      category: 'Non-Fiction',
    },
    {
      name: 'Making It Out Alive',
      img: MakingItOutAlive,
      category: 'Non-Fiction',
    },
    {
      name: 'All That Glitters',
      img: AllThatGlitters,
      category: 'Non-Fiction',
    },
    {
      name: 'Sudoku',
      img: Sudoku,
      category: 'Sudoku',
    },
    {
      name: 'Sudoku Stonkers',
      img: SudokuStonkers,
      category: 'Sudoku',
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
          <BookCard name={book.name} img={book.img} />
        ))}
      </div>
    </section>
  )
}

export default Books
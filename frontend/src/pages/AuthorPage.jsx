import React, { useEffect, useState } from 'react'
import './AuthorPage.css'
import { useParams } from 'react-router-dom'
import SarahMoonchild from '../assets/authors/SarahMoonchild.jpg'
import RileyJSommers from '../assets/authors/RileyJSommers.jpg'
import JDClement from '../assets/authors/JDClement.jpg'
import PeterDarling from '../assets/authors/PeterDarling.jpg'
import PeterSharpe from '../assets/authors/PeterSharpe.jpg'
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
import BookCard from '../components/BookCard'

const authorList = [
    {
      id: 1,
      name: 'Sarah Moonchild',
      img: SarahMoonchild,
      desc: 'Sarah Moonchild is the author of the Dark Elysium trilogy, a paranormal romance novel. She has long been fascinated with the eternal questions of good and evil and whether they are mutually exclusive and decided to create a work of fiction that could explore the theme. Love and hate are opposites in meaning but closely aligned in strength of passion. A romantic at heart Sarah believes that love can be the great equaliser that bridges what we desire and what we fear./n An avid student of myth and legends that have shaped human belief systems over centuries and manifest in modern day supernatural popular culture Sarah enjoys reading supernatural fiction and ancient historical non fiction and has been a ghostwriter for various fiction books and is a freelance editor. As a book lover, amongst her treasured possessions is her extensive library including works by her favourite supernatural fiction writer Dean Koontz./n When not writing or editing Sarah can be found on long walks in her well worn favoured ‘Doc Martin” boots accompanied by her faithful companion “Mangles” a cross of several dog breeds in her home state of New Hampshire.'
    },
    {
      id: 2,
      name: 'Riley J Sommers',
      img: RileyJSommers,
      desc: 'Riley J Sommers is a researcher and writer of non fiction books and author of Our Mothers of Invention “16 Women Inventors & Discoverers Who Made our Modern Lives Better” Riley has spent much time, reading and researching “forgotten history”, those events and or people that have had an impact and shaped for better, the world we live in today and yet go largely unacknowledged or forgotten./nDespite being an avid traveller, Riley is based in North London, in the U.K and when not travelling and researching, balances time between writing on a beloved iMac computer and preventing the key- board being trampled on by a cat called Guinness.'
    },
    {
      id: 3,
      name: 'J.D Clement',
      img: JDClement,
      desc: 'Born with a natural curiosity of the world, J.D Clement is an avid explorer, writer and whisky connoisseur.  With a love of nature’s untamed wild “Making It Out Alive” is true testimony that  Mother Nature’s unrelenting ferocity will always test the human spirt in the most unexpected of ways. It is also a celebration of human persistence against unimaginable odds of survival./nThe inspiration to research and write  for J.D comes from many years travelling and exploring, including significant parts of South America, North America, Europe, Africa, Asia, The Middle East, Australia, New Zealand and the Islands of the Pacific. J.D currently resides on the East Coast of Australia in a little place called Sydney and as well as exploring up and down the Eastern and Western Coast of Australia, loves trekking through the red earth of the Australian outback in a four wheel drive and Kayaking. The Antarctic remains the last continent that J.D intends to one day set foot on.'
    },
    {
      id: 4,
      name: 'Peter Darling',
      img: PeterDarling,
      desc: 'Peter lives in Aylesbury, England which sits about 30 miles to the north west of London. He is married to Caroline and they have two kids, Thomas and Lily. Peter thrives on popular culture – music, tv, books, sport and cinema and for his sins has been an ardent follower of Chelsea FC for over 50 years through the thin and thick and, hopefully not, thin again.‘I always felt I had a novel in me, whether good or bad, and a few years ago in a burst of creativeness I produced Both Ends Burning./nThe manuscript has sat on a shelf gathering dust for a while now. The guys at the publishing company, Useful Publishing, have taken it on and, thanks to them, I am a published author. It’s all a bit emotional really!’'
    },
    {
      id: 5,
      name: 'Peter Sharpe',
      img: PeterSharpe,
      desc: 'After a career in the world of Marketing Communications influencing people to buy things that they neither wanted nor needed. Peter decided to put his writing skills to work creating a second life by doing something that did not involve riding a guilt train and writes./nHailing originally from the U.K and having worked and lived across several countries including North America, Europe Asia and the Middle East Peter finally settled in Australia./nHe has authored various books under pen names, and under his own name a non fiction book regarding the race to avert irreversible climate change called “Escaping the other side of midnight”. Also a non fiction book entitled “All that glitters…” which are true stories of people who have won big lotteries in the millions and lost it. “The burning Question of who said that”? A quote quiz book. “Y” his first novel under his own name and he has also published the novelette, “Santa’s Mid Life Crisis”. He lives in Sydney, has three grown children and has a polyamorous relationship with his Mac computer and iPhone.'
    }
  ]

  const bookList = [
    {
      name: 'Both Ends Burning',
      img: BothEndsBurning,
      category: 'Fiction',
      author: 'Peter Darling'
    },
    {
      name: 'Y',
      img: Y,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      name: 'Santa’s Mid Life Crisis',
      img: SantasMidLifeCrisis,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      name: 'Reflections Of A Vampire',
      img: ReflectionsOfAVampire,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      name: 'An Encounter With Lady Luck',
      img: AnEncounterWithLadyLuck,
      category: 'Fiction',
      author: 'Peter Sharpe'
    },
    {
      name: 'Our Mothers of Invention',
      img: OurMothersOfInvention,
      category: 'Non-Fiction',
      author: 'Riley J Sommers'
    },
    {
      name: 'Escaping The Other Side of Midnight',
      img: EscapingTheOtherSideOfMidnight,
      category: 'Non-Fiction',
      author: 'Peter Sharpe'
    },
    {
      name: 'Making It Out Alive',
      img: MakingItOutAlive,
      category: 'Non-Fiction',
      author: 'J.D Clement'
    },
    {
      name: 'All That Glitters',
      img: AllThatGlitters,
      category: 'Non-Fiction',
      author: 'Peter Sharpe'
    },
    {
      name: 'Sudoku',
      img: Sudoku,
      category: 'Sudoku',
      author: 'NA'
    },
    {
      name: 'Sudoku Stonkers',
      img: SudokuStonkers,
      category: 'Sudoku',
      author: 'NA'
    }
  ]

const AuthorPage = () => {

    const [selectedAuthor, setSelectedAuthor] = useState({})
    const [filteredBookList, setFilteredBookList] = useState([])

    const NewLineText = (props) => {
        const text = props.text;
        if (text) {
            const newText = text.split('/n').map(str => <p>{str}</p>);
            return newText;
        }  
    }

    const {id} = useParams()

    useEffect(() => {
        const author = authorList.filter((a) => a.id === parseInt(id))
        setSelectedAuthor(author[0])
        const books = bookList.filter((b) => b.author === author[0].name)
        setFilteredBookList(books)
    }, [])

  return (
    <div className='container author-page'>
        <div className='author-info'>
            <img src={selectedAuthor.img} alt={selectedAuthor.name} />
            <div className="author-info-text">
                <h3>{selectedAuthor.name}</h3>
                <NewLineText text={selectedAuthor.desc} className="newline-text"/>
            </div>
        </div>
        <div className="author-titles">
            <h3>Titles by {selectedAuthor.name}</h3>
            <div className="author-book-container">
                {filteredBookList.length == 0 && (
                    <p>No Books Published</p>
                )}
                {filteredBookList.map((book) => (
                    <BookCard img={book.img} name={book.name}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AuthorPage
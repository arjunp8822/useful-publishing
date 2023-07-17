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
      id: 1,
      name: 'Both Ends Burning',
      img: BothEndsBurning,
      category: 'Fiction',
      author: 'Peter Darling',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Both-Ends-Burning-Peter-Darling/dp/B0BD7W8MSY/ref=sr_1_3?crid=3ON28GPLW1BR5&keywords=both+ends+burning+peter+darling&qid=1684131558&s=books&sprefix=both+ends+burning+peter+darlin%2Cstripbooks%2C232&sr=1-3',
      text: 'A Detective’s quest to solve a murder and deal with his own inner-demons at the same time! Can there ever really be a murder that no-one cares about?/nDetective Inspector Alex Jamieson is set to investigate the violent killing of an elderly man. However, when the identity of the victim becomes apparent, there are whispers of justice prevailing./nJamieson sets out to unravel the complex and harrowing case whilst wrestling with his own moral code.'
    },
    {
      id: 2,
      name: 'Y',
      img: Y,
      category: 'Fiction',
      author: 'Peter Sharpe',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/romantic-comedy-about-love-know-ebook/dp/B0BQ6CQKX7?ref_=ast_author_dp',
      text: 'What is love? and more importantly, how did you know when you are in it? These are the perennial questions that Ben Archer a writer has struggled with to complete his first major novel Ben who for most of his life has been contented to flow along life’s river gradually finds himself in the faster flow of its rapids. Caught between a girlfriend he has and a girlfriend he wished he had. Ben is committed to his girlfriend but is infatuated with a woman he has never met except through Television news./nJess Arnott, successful Journalist and Ben’s girlfriend worries about her relationship with her boyfriend, she’s been supportive of him whilst he tries to earn a living as a struggling writer but maintains her faith./nYasmin Taher, a T.V anchor and the the object of Ben’s infatuation is in a long standing relationship with her wealthy investment banker boyfriend whilst tolerating his insufferable aristocratic family. Then through a simple twist of fate, bought on by enforced separation, and coincidence Ben, Jess and Yasmin find themselves on a collision course, testing the laws of attraction, fidelity, friendship and sacrifice./nA funny and heartwarming tale of three people, riding the emotional roller coaster of discovery to the very questions what is love? and how do you know when you are in it?'
    },
    {
      id: 3,
      name: 'Santa’s Mid Life Crisis',
      img: SantasMidLifeCrisis,
      category: 'Fiction',
      author: 'Peter Sharpe',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/gp/product/B0BPRXBTV6/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4',
      text: 'Author and freelance writer Ben Archer is planning to visit his father, who lives on the island of Majorca, Spain. Then Ben receives an email from a stranger purporting to be Santa Claus who advises Ben that he is having a summer break himself in Majorca at precisely the time that Ben is planning to visit his father./nFurther, the stranger claims that he would be grateful if Ben could find some time to meet up and chat, that Ben may be able to help with a personal matter, and in return, the stranger could share experiences that might help with Ben’s next book.'
    },
    {
      id: 4,
      name: 'Reflections Of A Vampire',
      img: ReflectionsOfAVampire,
      category: 'Fiction',
      author: 'Peter Sharpe',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Reflections-Vampire-interview-rich-humour/dp/B0BW2SXCNC',
      text: 'A darkly funny encounter where Ben Archer, author and freelance writer unwittingly interviews the mysterious Monsieur Alucard who claims to be a Vampire. In this second instalment of the trilogy Monsieur Alucard lays bare his true feelings. How he came about and how he has been mis-represented in history. Is Monsieur Alucard a recluse because he really is a pain in the neck for most people? Or is he a sociopath with no self reflection?/nThese questions and others about aversion to garlic, ultra violet rays from the sun, turning into a bat and crucifixes are all answered. Ben, realises the stakes are getting higher but can’t resist knowing, when Monsieur Alucard reveals his true identity.'
    },
    {
      id: 5,
      name: 'An Encounter With Lady Luck',
      img: AnEncounterWithLadyLuck,
      category: 'Fiction',
      author: 'Peter Sharpe',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Encounter-Lady-Luck-Peter-Sharpe/dp/B0BZBN18Z4/ref=sr_1_1?crid=1SOBHRV40IHBU&keywords=An+encounter+with+Lady+luck&qid=1685439703&s=books&sprefix=an+encounter+with+lady+luck%2Cstripbooks%2C223&sr=1-1',
      text: 'A funny yet heart-warming short story as the third book in this series about Ben Archer author and freelance writer who meets with yet another immortal. The mysterious and beautiful Sayida who claims to be Lady Luck./nA chance meeting on the luxurious La Dolce Vita Orient Express overnight train from Paris to Rome finds Ben entwined in a hilarious conversation with the enigmatic Sayida who is very direct about her romantic isolation and the frustration she feels, “the only beating around the bush I do is by myself” she complains. And just what does she really mean when she says that “for men life is like a penis, women make it hard?”/nHer direct conversational approach leaves Ben uncomfortably curious about this woman. But Ben senses something deeper and discovers Sayida’s true intent. An Encounter with Lady luck takes us on a gentle rolling, rich and fun journey about sex and love.'
    },
    {
      id: 6,
      name: 'Our Mothers of Invention',
      img: OurMothersOfInvention,
      category: 'Non-Fiction',
      author: 'Riley J Sommers',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Our-Mothers-Invention-Inventors-Discoverers-ebook/dp/B09PQGMK9B/ref=cm_cr_arp_d_product_top?ie=UTF8',
      text: 'Plato famously wrote, “our need will be the real creator,” which over time became the well-known proverb’ necessity is the mother of invention’. This proverb has rung true since the dawn of humankind. At some point in our history, we made our living through hunting and gathering. The man was the hunter, the woman was the gatherer, and gathering, not hunting, was the primary survival activity for our ancestors. And so, the women developed tools and the technology they needed to acquire, prepare and store food. At first, they used sticks and flints to dig out roots. They later invented the mortar and pestle, a rudimentary mill for grinding grains and seeds, proving the old proverb true. Necessity birthed invention./nAs our needs evolved, the trend continued, and so has our appetite for things that make our lives more comfortable, more prolonged, convenient, enjoyable, efficient, richer, and fulfilling. Women have been at the heart of historical invention. In this book, you will meet some of history’s wonder women – women who did the impossible, sometimes with little to work with and a lot of challenges to overcome…'
    },
    {
      id: 7,
      name: 'Escaping The Other Side of Midnight',
      img: EscapingTheOtherSideOfMidnight,
      category: 'Non-Fiction',
      author: 'Peter Sharpe',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/ESCAPING-OTHER-SIDE-MIDNIGHT-IRREVERSIBLE/dp/B0B194L819',
      text: 'Climate change is happening now and 2030 is around the corner. Can we make it on time? We have well-understood tipping points that should we cross, will mean irreversible effects to our planet and we are hurtling towards them at frightening speed. Time is running out on our climate clock, a few minutes to midnight before these tipping points are reached./nWe missed the starting gun in this race to avert global disaster, and over the last few decades have procrastinated, but we’ve made some progress. The question is can we truly escape what lies ahead for us after the climate clock strikes midnight?/nThis book is a simple explanation of what is climate change, how did we get here? What will happen if left unchecked? And what can we do to escape the other side of midnight?'
    },
    {
      id: 8,
      name: 'Making It Out Alive',
      img: MakingItOutAlive,
      category: 'Non-Fiction',
      author: 'J.D Clement',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Making-Out-Alive-Fifteen-accounts-ebook/dp/B09Q3QSJV2',
      text: 'When you are going through hell…….don’t stop, keep going!/nRead the harrowing true tales of those who made it out alive. When beating the almost impossible odds of staying alive after disaster has struck and finding your way home needs pushing through the pain barrier physically and mentally because dying is not an option./nWhat can you do after an air crash and you survive only to find yourself lost in a jungle or adrift at sea or alternately, in snow covered mountains? What desperate measures do you take when lost in the ocean for endless days or trapped on a mountain when freezing cold or conversely, the punishing heat of the desert?/nHere are fifteen accounts of true survival but how? These people have lived to tell the tale of defying death and choosing life in the ultimate decision that the human spirt can face. Everything in life is a decision………….what would yours be?'
    },
    {
      id: 9,
      name: 'All That Glitters',
      img: AllThatGlitters,
      category: 'Non-Fiction',
      author: 'Peter Sharpe',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/All-that-Glitters-Winning-Lotteries/dp/B0BW2KJJ61/ref=cm_cr_srp_d_pdt_img_top?ie=UTF8',
      text: 'What would you do if you won millions of dollars on the lottery?/nMost people have a shopping list in their heads and dream of what they would do if they won big. Most people also believe that all their financial challenges would dissolve and that as a consequence of winning they would lead happier lives with financial security assured./nIndeed many people who have won major lottery prizes do. But this book is not about those people. This book is about those who have won major lotteries and lost it all again ending up worse than they were before their win. A true examination of the darker side of lottery wins./nCan you imagine winning a net $27 million after tax only to find yourself living in squalor and broke less than five years later? Or after banking $12 million from a lottery win being broke and delivering coal for $12 an hour three years later?/nThere are seventeen true stories, about how and why ordinary everyday people who won the lottery lost it all and more. Reckless spending, ruined relationships, kidnap, murder, suicide and theft are elements amongst these true stories with direct quotes and references from those involved./nBe careful of what you wish for, because all that glitters is not always gold.'
    },
    {
      id: 10,
      name: 'Sudoku',
      img: Sudoku,
      category: 'Sudoku',
      author: 'NA',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Sudoku-Stonkers-Worlds-Blowing-Puzzles/dp/B09PK1T652',
      text: 'Useful Publishing has teamed up with one of the world’s most eminent Sudoko puzzle publishers Magazine Works to bring about a uniquely challenging level of Sudoko for the most experienced puzzle solvers. Unlike many Sudoko puzzle books ours are unique and designed for experienced puzzle solvers.'
    },
    {
      id: 11,
      name: 'Sudoku Stonkers',
      img: SudokuStonkers,
      category: 'Sudoku',
      author: 'NA',
      publishedDate: '3 January 2023',
      format: 'Paperback',
      price: 29.99,
      link: 'https://www.amazon.com.au/Sudoku-Stonkers-Worlds-Blowing-Puzzles/dp/B09PK1T652',
      text: 'Welcome to the Very Hard, no, Extremely Hard, no, not even the Super or Ultra Hard, this goes past the Perverse to the most Mind-Blowing Sudoku Puzzles in the Universe! This is no idle threat, these are not puzzles for the faint-hearted. Each Puzzle is unique and has been chosen specifically to stretch the power of logic!'
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
                    <BookCard img={book.img} name={book.name} id={book.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AuthorPage
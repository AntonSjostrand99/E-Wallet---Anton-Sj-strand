import "./Home.scss" 

import { useNavigate } from "react-router-dom";
import CardStack from "../../components/CardStack";
import Card from "../../components/Card"
import { useSelector } from "react-redux"


function Home() {

    const navigate = useNavigate();


    function handleClick() {

        navigate('/addcard')

    }

   

    const showCard = useSelector((state) => { return state.ShowCard})
    console.log(showCard)




    return(
        <section className="home">
            <header className="home__header">
                <h1>E-Wallet</h1>
            </header>
            <aside className="home__text">
            <h2>Aktiv kort</h2>
            </aside>
            <aside className="home__showCard">
            { showCard .hasOwnProperty('Vendor')? <Card item={ showCard }/> : ''}
             </aside>
            <aside className="home__middle">
                <CardStack/>
            </aside>
            <footer className="home__footer">

           <button onClick={handleClick} className="home__footer__btn">Läg till nytt kort</button>
            </footer>

        
          

        </section>
     

    

    )
    
    
    }
    
    export default Home

import { useSelector } from "react-redux"
import Card from "./Card"

import './Style.scss'

function CardStack(){

    const savedCards = useSelector((state) => { return state.cards})
    console.log(savedCards)

     const cardsElement = savedCards.map((item)=>{
        return <Card item ={ item } key={ item.id }/>
    }) 

    return(
        <section className="card-stack">
            <section className="card-stack__cards" >
                {cardsElement.length >0 ? cardsElement: <p>Du har inga kort sparade </p>}
            </section>
         
        </section>
    )

}
export default  CardStack








import CardForm from "../../components/CardForm"
import Card from "../../components/Card"
import './AddCard.scss'
import { useNavigate } from "react-router-dom";

function AddCard() {

    const navigate = useNavigate();

    function handleClick() {

        navigate('/')

    }
    return(
    
    <section className="addCard">
         
         <div onClick={handleClick} className="arrow"></div>
          <header className="addCard__header">
          <h1>LÄGG TILL NYTT BANKKORT</h1>
        </header>
        <aside className="addCard__middle">
        <Card/>
        </aside>
        <footer className="addCard__footer">
        <CardForm />
        </footer>

    </section>

          
    )
    
    
    }
    
    export default AddCard
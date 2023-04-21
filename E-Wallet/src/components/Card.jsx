import "./Style.scss"

import vendorBitcoin from '../assets/vendor-bitcoin.svg'
import chipLight from '../assets/chip-light.svg'
import { useDispatch } from 'react-redux'
import { remove , showCard } from '../actions/actions'


function Card(props){
    const dispatch = useDispatch()
    console.log(props);

    function decrease(){
        console.log(props.item)
        dispatch(remove(props.item.id))
    }

    function handleclikedCard(){
        dispatch(showCard(props.item))
    }
        return(
            
             <section  onClick={ handleclikedCard}  className='card' style={ props.item && props.item.Vendor[3]? {color:`${props.item.Vendor[3]}`, background: `${props.item.Vendor[2]}`} :{backround: 'grey' } }>
                <section className='card__section' >
                    <article  className='card__imgs'>
                        <img src={chipLight} alt="chip"/> 
                        <img src={props.item ? props.item.Vendor[1]: vendorBitcoin} alt="vendor logo" className='card__img'/>
                        <button className='card__delete' onClick={ decrease }>x</button>
                    </article>
                    <p  className='card__number'>{props.item? props.item.cardNumber: 'XXXX XXXX XXXX XXXX'}</p>
                     <article  className='card__labels' style={ props.item ? {color:`${ props.item.Vendor[3]}` }: { color: 'black' }} > 
                        <p>kortinnehavare</p>
                        <p className='card__validThru'>giltigt t.o.m.</p>
                    </article> 
                    <article className='card__inputs'>
                        <p className='card__title'>{props.item ? props.item.cardName : 'Förnamn Efternamn' }</p>
                        <p className='card__valid'>{props.item ? props.item.valid: 'MM/YY'}</p>
                    </article>
                </section>
            </section> 
        )
}
export default Card







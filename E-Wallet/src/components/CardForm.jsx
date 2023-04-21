import './Style.scss'





 import vendorEvil from '../assets/vendor-evil.svg'
 import vendorNinja from '../assets/vendor-ninja.svg'
 import vendorBitcoin from '../assets/vendor-bitcoin.svg'
 import vendorBlockchain from '../assets/vendor-blockchain.svg'



import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addCard } from '../actions/actions'




function CardForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useId();

    let [vendor, setvendor] = useState();
    let [cardNumber, setcardNumber] = useState();
    let [cardName, setcardName] = useState();
    let [valid, setvalid] = useState();
    let [cvv, setcvv] = useState();

    function handleClick(){
        
        const splitVendor = vendor.split(' ')

      
    
        let cardValue = {
            id: id,
            Vendor: splitVendor,
            cardNumber: cardNumber,
            cardName: cardName,
            valid: valid, 
            cvv:cvv
        }
        console.log(cardValue)

        dispatch(addCard(cardValue))

        navigate('/')
    };

    function getValue(event){
        setvendor(event.target.value)
    };



    return(

        <section className='form'>

            <label className='form__label' >Kortnummer</label>
            <article className='form__inputs'>
            <input className='form__input' type="text"  onChange={(event) => { setcardNumber(event.target.value); }}/>
            </article>

            <article className='form__inputs'>

            <label className='form__label' >kortinnehavare</label> 
            <input className='form__input' type="text" placeholder="FÖRNAMN EFTERNAMN" onChange={(event) => { setcardName(event.target.value); }}/>
            </article>
         
    


            <article className='form__small'>
              
               <article className='form__smallest'>
               <label className='form__labelSmall' >VALID THRU</label>
                <input className='form__input' type="text" onChange={(event) => { setvalid(event.target.value); }}/>
               </article>
                <article className='form__smallest'>
                  <label className='form__labelSmall' >CVV</label>
                  <input  className='form__input' type="text" onChange={(event) => { setcvv(event.target.value); }} />

            </article>
              
              
            </article >

            <article className='form__inputs'>
            <label className='form__label' >VENDOR</label>
            <select name="vendors" id="" onChange={ getValue } className='form__input'>
                <option value=""></option>
                <option value={`bitcoin ${ vendorBitcoin } #FFAE34 #FFFFFF`}>BITCOIN INC</option>
                <option value={`ninja ${ vendorNinja } #222222 #FFFFFF`}>NINJA BANK</option>
                <option value={`blockchain ${ vendorBlockchain } #8B58F9 #FFFFFF`}>BLOCKCHAIN INC</option>
                <option value={`evil ${ vendorEvil } #F33355 #FFFFFF`}>EVIL CORP</option>
            </select>
            </article>
        
            <button className='form__button' onClick={ handleClick }>Lägg till kort</button>
        </section>
    )

}
export default CardForm










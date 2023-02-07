import {Fragment} from 'react'
import classes from'./Header.module.css'
import foodsimg from '../../assets/food.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{
   return <Fragment>
    <header className={classes['header']}>
        <h1>AVANTARO</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
   </header>
   <div className={classes['main-image']}>
    <img src={foodsimg} alt='Good food'/>
   </div>
   </Fragment>
};
export default Header;
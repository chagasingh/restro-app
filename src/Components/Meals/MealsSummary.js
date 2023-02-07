import classes from './MealsSummary.module.css'

const MealsSummary=(props)=>{
    return (
      <section className={classes.summary}>
        <h1>ORDER YOUR FAVRORAIT FOOD ON YOUR TAP...</h1>
        <p>You can just order and you will get hot cooked food under<br/> 5 minutes with the mouth watering taste...
        </p>
      </section>
    );
};
export default MealsSummary;
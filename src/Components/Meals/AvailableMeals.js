import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DummyItems = [
  {
    id: "m1",
    name: "Samosa",
    description: "hot samosa with the potato stuffing",
    price: 10,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "hot cheeze pizza",
    price: 20,
  },
  {
    id: "m3",
    name: "Pasta",
    description: "sizzling pasta",
    price: 24,
  }
];

const AvailableMeals=()=>{
    const mealsList = DummyItems.map((meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    return <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
};
export default AvailableMeals;
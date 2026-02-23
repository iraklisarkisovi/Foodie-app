import classes from "./Meals-grid.module.css"
import MealItem, { IMeals } from "./Meals-item"

type IProps = {
    meals: IMeals[]
}

export default function MealGrid({meals}: IProps) {
    return(
        <ul className={classes.meals}>
            {meals.map((meal: IMeals) => (
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    )
}

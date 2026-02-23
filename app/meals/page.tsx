import Link from "next/link";
import classes from "../styles/Meals.module.css"
import {GetMeals} from "@/lib/meals.js"
import MealGrid from "../components/meals/Meals-grid" ;

export default async function MealsPage() {
    const res = await GetMeals()

    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}></span>
                </h1>
                <p>
                    Choose your favorite recepie and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>
                        Share Your Favorite Recepie
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealGrid meals={res}/>
            </main>
        </>
    )
}
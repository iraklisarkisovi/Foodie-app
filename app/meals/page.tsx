import Link from "next/link";
import classes from "../styles/Meals.module.css"
import {GetMeals as MealsReq} from "@/lib/meals.js"
import MealGrid from "../components/meals/Meals-grid" ;
import { Suspense } from "react";
import Loading from "../components/Loading/loading-out";

const GetMeals = async () => {
    const res = await MealsReq()
    return <MealGrid meals={res}/>
}

export default async function MealsPage() {

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
                <Suspense fallback={<Loading/>}>
                    <GetMeals/>
                </Suspense>
            </main>
        </>
    )
}
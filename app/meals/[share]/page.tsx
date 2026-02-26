
import Image from "next/image";
import classes from "@/app/styles/meal.module.css"
import { getMeal } from "@/lib/meals";
import { IMeals } from "@/app/components/meals/Meals-item";
import { notFound } from "next/navigation";

interface IProps {
    params: Promise<{ share: string }>;
}

export async function generateMetadata({params}: IProps) {
    const slug = await params
    const meal = getMeal(slug.share);

     return {
        title: meal.title,
        description: meal.summary,
    };
}

export default async function ShareMeal({params}: IProps){
    const slug = await params
    const meal: IMeals = getMeal(slug.share)
    
    if(!meal){
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "</>")

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image alt={'meal'} src={meal.image} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal?.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
            </main>
        </>
    )
}
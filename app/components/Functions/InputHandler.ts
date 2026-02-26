'use server'

import { SaveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";


export const handleForm = async (formData: FormData) => {

    const meal = {
        title: formData.get('title')?.toString() ?? '',
        summary: formData.get('summary')?.toString() ?? '',
        creator: formData.get('name')?.toString() ?? '',
        instructions: formData.get('instructions')?.toString() ?? '',
        creator_email: formData.get('email')?.toString() ?? '',
        image: formData.get('image') as File | null,
        slug: formData.get('title')?.toString() ?? '',
    };
    console.log(meal)
    await SaveMeal(meal);
    redirect('/meals')
};
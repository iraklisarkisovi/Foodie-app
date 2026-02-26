'use server'

import { SaveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function IsInvalidTxt(text: string) {
    return !text || text.trim() == '';
}

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

    if(IsInvalidTxt(meal.title) ||
        IsInvalidTxt(meal.summary) || 
        IsInvalidTxt(meal.instructions) ||
        IsInvalidTxt(meal.creator) || 
        IsInvalidTxt(meal.instructions) ||
        IsInvalidTxt(meal.creator_email) ||
         !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0) {
            throw new Error("Invalid input")
         }

    await SaveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
};
import sql from "better-sqlite3";

const db = sql('meals.db');

export async function GetMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // throw new Error("loading errors failed")
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}
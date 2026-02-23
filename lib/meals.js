import sql from "better-sqlite3";

const db = sql('meals.db');

export async function GetMeals() {
    return db.prepare('SELECT * FROM meals').all();
}
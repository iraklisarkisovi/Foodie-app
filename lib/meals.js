import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs"
import path from "node:path";
const db = sql('meals.db');

export async function GetMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // throw new Error("loading errors failed")
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}


export async function SaveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const imagesDir = path.join(process.cwd(), "public", "images");
  const filePath = path.join(imagesDir, fileName);

  await fs.promises.mkdir(imagesDir, { recursive: true });

  const bufferedImage = await meal.image.arrayBuffer();

  await fs.promises.writeFile(filePath, Buffer.from(bufferedImage));

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}

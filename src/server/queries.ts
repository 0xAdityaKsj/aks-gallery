import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
    const user = await auth();
    if (!user || !user.userId) throw new Error("Unauthorized");

    const images = await db.query.imagess.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => [desc(model.createdAt)]
    });
    return images;
}   
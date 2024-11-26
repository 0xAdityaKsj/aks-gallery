import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

interface Model {
    id: string;
    userId: string;
    createdAt: Date;
}

export async function getImages() {
    const user = await auth();
    if (!user || !user.userId) throw new Error("Unauthorized");

    const images = await db.query.imagess.findMany({
        where: (model: Model, { eq }: { eq: any }) => eq(model.userId, user.userId),
        orderBy: (model: Model, { desc }: { desc: any }) => [desc(model.createdAt)]
    });
    return images;
}

export async function getImage(id: number) {
    const user = await auth();
    if (!user || !user.userId) throw new Error("Unauthorized");

    const image = await db.query.imagess.findFirst({
        where: (model: Model, { eq }: { eq: any }) => eq(model.id, id)
    });
    return image;
}
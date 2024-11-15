import { db } from "~/server/db"

export const dynamic = "force-dynamic";



export default async function HomePage() {

  const images = await db.query.imagess.findMany();


  return (

    <main className="flex flex-wrap gap-4">
      {
        images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={image.url} alt={image.name} className="max-w-xs" />
            <p className="mt-2 text-sm">{image.name}</p>
          </div>
        ))
      }
    </main>
  );
}

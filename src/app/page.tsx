import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { getImages } from "~/server/queries";
export const dynamic = "force-dynamic";
import Link from "next/link";

interface Image {
  id: number;
  name: string;
  url: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export async function Images() {
  const images = await getImages();
  return (
    <main className="flex flex-wrap p-4">
      {[
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
      ].map((image: Image, index: number) => (
        <div key={index} className="flex flex-col items-center">
          <Link href={`/img/${image.id}`}>
            <img src={image.url} alt={image.name} className="max-w-xs" />
          </Link>
          <p className="mt-2 text-sm">{image.name}</p>
        </div>
      ))}
    </main>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        <div className="flex h-screen items-center justify-center">
          Please sign in to view the images
        </div>
      </SignedOut>
    </main>
  );
}

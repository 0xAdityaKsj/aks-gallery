import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { getImages } from '~/server/queries'
export const dynamic = "force-dynamic";

export async function Images() {

  const images = await getImages();
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



export default async function HomePage() {

  return (
    <main>
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        <div className="flex justify-center items-center h-screen">Please sign in to view the images</div>
      </SignedOut>
    </main>
  )
}

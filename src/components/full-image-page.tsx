import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullImagePage(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full max-h-screen w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image?.url}
          alt={image?.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="mt-4 flex w-48 flex-shrink-0 flex-col border-l border-zinc-700">
        <h1 className="border-b p-2 text-center text-2xl font-bold">
          {image?.name}
        </h1>
      </div>
    </div>
  );
}

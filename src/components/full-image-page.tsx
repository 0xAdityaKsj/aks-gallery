import { getImage } from "~/server/queries";

export default async function FullImagePage(props: { id: number }) {
    const image = await getImage(props.id);
    return (
        <div className="flex w-full h-full min-w-0 max-h-screen">
            <div className="flex flex-shrink justify-center items-center">
                <img
                    src={image?.url}
                    alt={image?.name}
                    className="flex-shrink object-contain"
                />
            </div>

            <div className="w-48 flex flex-col mt-4 flex-shrink-0 border-l border-zinc-700">
                <h1 className="text-2xl font-bold break-words">{image?.name}</h1>
            </div>
        </div>
    )
}
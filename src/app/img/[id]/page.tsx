import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}
) {
    const image = await getImage(parseInt(photoId));
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img
                    src={image?.url}
                    alt={image?.name}
                />
            </div>
        </div>
    )
}
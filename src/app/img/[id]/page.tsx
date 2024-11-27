import FullImagePage from "~/components/full-image-page";

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}
) {
    return (
        <FullImagePage id={parseInt(photoId)} />
    )
}
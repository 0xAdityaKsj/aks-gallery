import Link from "next/link";

const mockImageUrls = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  "https://images.unsplash.com/photo-1682687220208-22d7a2543e88"
];

const mockImages = mockImageUrls.map((url, index) => (
  {
    url,
  }
))

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      {
        [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <img key={index} src={image.url} alt="" className="w-48 h-48 object-cover" />
        ))
      }
    </main>
  );
}

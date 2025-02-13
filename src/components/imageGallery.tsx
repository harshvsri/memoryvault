export default function ImageGallery() {
    const images = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/seed/${i + 1}/600/400`,
        alt: `Image ${i + 1}`,
    }));

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image) => (
                    <div key={image.id} className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-900">
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}

import TopBar from "~/components/topBar";
import ImageGallery from "~/components/imageGallery";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <TopBar />
            <ImageGallery />
        </main>
    );
}

import { Camera } from "lucide-react";

export default function TopBar() {
    return (
        <header className="border-b border-gray-800 bg-black">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center space-x-2">
                    <Camera className="h-8 w-8 text-white" />
                    <h1 className="text-2xl font-bold text-white">PicVault</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Albums
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">
                                Upload
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

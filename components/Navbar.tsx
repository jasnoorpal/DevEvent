import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

                    <p>DevEvent</p>
                </Link>

                <ul>
                    <Link href="/">Home</Link>
                    <Link href="#" className="text-gray-400 hover:cursor-default">
                        Events
                    </Link>
                    <Link href="#" className="text-gray-400 hover:cursor-default">
                        Create Event
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

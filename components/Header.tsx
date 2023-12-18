import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {

    return (
        <header className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center space-x-2">
                <div className="bg-[#0160FE] w-fit">
                    <Image
                        src="/dropbox.png"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </div>
                <h1 className="font-bold text-xl">
                    Dropbox
                </h1>
            </Link>
            <div className="px-5 flex space-x-2 items-center">
                {/* theme toggler */}

                <UserButton afterSignOutUrl="/" />

                <Button variant={"outline"}>
                    Button
                </Button>

                <SignedOut>
                    <SignInButton afterSignInUrl={"/dashboard"} mode="modal" />
                </SignedOut>
            </div>
        </header>
    )
}

export default Header;
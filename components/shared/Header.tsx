import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
           <Link href="/" className="w-36">
              <Image 
                src="/assets/images/EventStackHub.png" width={178} height = {58}
                alt="EventStackHub logo"
              />
           </Link>
           <div className="flex w-22 justify-end gap-3">
              <SignedIn>
                <UserButton afterSignOutUrl="/"/>
              </SignedIn>
              <SignedOut>
                <Button asChild className="rounded-full bg-blue-500 pr-3 pl-3" size="lg">
                  <Link href="/sign-in">
                    Login
                  </Link>
                </Button>
              </SignedOut>

           </div>
        </div>
    </header>
  )
}

export default Header
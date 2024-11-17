import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function TopNav() {
    return (
        <nav className="flex items-center justify-between  gap-4 p-4 font-bold text-xl border-b-2 border-purple-500">
            <div>Gallery</div>

            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
}
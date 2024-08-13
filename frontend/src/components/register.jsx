'use client'
import { useRouter } from 'next/navigation' // Import useRouter for redirection
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Register() {
  const router = useRouter(); // Initialize useRouter

  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Handle successful login here (e.g., validate credentials)
    // Redirect to the login page upon success
    router.push('/dashboard'); // Redirect to the login page
  };

  return (
    <div className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2">
      <div
        className="flex flex-col items-center justify-center bg-primary px-6 py-12 sm:px-10 lg:bg-muted lg:p-16">
        <div className="mx-auto max-w-[420px] space-y-6">
          <div className="space-y-2 text-center">
            <h1
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Welcome to Lost & Found
            </h1>
            <p className="text-muted-foreground">Reunite lost items with their rightful owners.</p>
          </div>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reference">Reference Number</Label>
              <Input id="reference" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              <Link href="#" className="underline underline-offset-4" prefetch={false}>
                Forgot your password?
              </Link>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-primary px-2 text-primary-foreground">Or sign up</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reference">Reference Number</Label>
              <Input id="reference" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <ChromeIcon className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-muted lg:flex">
        <div className="mx-auto max-w-[420px] space-y-4 px-6 sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight">Simplify your lost and found experience</h2>
          <p className="text-muted-foreground">
            Our platform makes it easy to report and track lost items, and connect with others who have found them. With
            features like real-time updates, secure messaging, and a user-friendly interface, you can focus on what
            matters most - reuniting people with their lost belongings.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <ClipboardIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Report Lost Items</h3>
              <p className="text-muted-foreground">
                Easily report lost items and provide key details to help others find them.
              </p>
            </div>
            <div className="space-y-2">
              <UsersIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Connect with Finders</h3>
              <p className="text-muted-foreground">
                Communicate securely with those who have found your lost items and coordinate their return.
              </p>
            </div>
            <div className="space-y-2">
              <SearchIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Search for Lost Items</h3>
              <p className="text-muted-foreground">
                Browse our database of reported lost items and claim those that belong to you.
              </p>
            </div>
            <div className="space-y-2">
              <RefreshCwIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Real-time Updates</h3>
              <p className="text-muted-foreground">
                Stay informed with real-time updates on the status of your lost and found items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ChromeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>)
  );
}


function ClipboardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function RefreshCwIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}

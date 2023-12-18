import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-red-500 dark:text-blue-500">Dropbox clone</h1>
      {/* <h1 className="">Dropbox clone</h1> */}
      <UserButton />
    </main>
  )
}

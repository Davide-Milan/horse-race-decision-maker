import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid w-screen h-screen justify-center items-center">
      <Link href="/play">
        Play
      </Link>
    </main>
  )
}

import NavBarHero from '../components/NavBarHero';

export default function Home() {
  return (
    <div>
      <NavBarHero />
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-4xl font-bold text-center">Welcome to the home page</h1>
        <p className="mt-4 text-lg text-center">This is a simple example of a Next.js app with Tailwind CSS</p>
      </div>
      {/* content */}
    </div>
  )
}
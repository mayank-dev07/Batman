import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <Header />
      <Hero />
    </div>
  );
}

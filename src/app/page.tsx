import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

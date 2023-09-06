import HeroSection from '@/components/hero';
import About from '@/components/about';
import Expandable from '@/components/expandable';
import Join from '@/components/join';
import Blocks from '@/components/blocks';

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between bg-blue bg-cover bg-fixed bg-center">
                <HeroSection />

                <section className="w-full pb-20 ">
                    <Blocks />
                    <About />
                    <Expandable />
                    <Join />
                </section>
            </main>
        </>
    );
}

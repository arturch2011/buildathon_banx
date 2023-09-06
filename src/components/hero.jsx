import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-[url(../../public/fakeimg.jpg)] bg-cover bg-fixed bg-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center max-w-4xl p-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">GOal Gamers, Sejam Bem Vindos!</h1>
                <p className="text-2xl md:text-2xl font-bold">
                    Somos uma plataforma gamificada para criação e participação em projetos de vida através de
                    incentivos gerados pela gamificação e tokenização, estimulando doações após a conclusão do projeto.
                </p>
            </motion.div>
        </section>
    );
};

export default HeroSection;

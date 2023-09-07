import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-[url(../../public/teiasbg.png)] bg-cover bg-fixed bg-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center max-w-4xl p-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Sejam Bem Vindos a BANX!</h1>
                <p className="text-2xl md:text-2xl font-bold text-center">
                    Somos uma plataforma utiliza a tecnologia blockchain e tokens Soul Bound para vincular dados de
                    crédito de bancos de forma segura e fornecer acesso a crédito com base no histórico de crédito. Isso
                    torna as transações de crédito mais rápidas, seguras e acessíveis.
                </p>
            </motion.div>
        </section>
    );
};

export default HeroSection;

//bg-[url(../../public/logo.png)] bg-cover bg-fixed bg-center

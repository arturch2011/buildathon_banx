import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-dbase">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Compania</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Carrera
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Serviços</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Soluções IA
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Desenvolvimento Web3
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Sustentabilidade
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Recursos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Whitepapers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Siga-nos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-amber mt-8 pt-4 text-center">
                    <p className="text-sm text-amber">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

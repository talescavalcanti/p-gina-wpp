/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import minhaImagem from './minha-imagem.jpg';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate random particles on mount
    const newParticles = Array.from({ length: 40 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 3 + 1, // 1px to 4px
      left: Math.random() * 100, // 0% to 100%
      duration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * 10, // 0s to 10s
      drift: Math.random() * 50 - 25, // -25px to 25px
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: '100%',
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, p.drift],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const whatsappNumber = "5583986103313"; // Substitua pelo seu número de WhatsApp
  const whatsappMessage = encodeURIComponent("Olá! Quero aprender a começar no digital e transformar minha realidade.");
  const whatsappLink = `https://wa.me/${5583986103313}?text=${"Opaa Arthur! Vim pelo tiktok e quero saber mais!"}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 relative">
      <ParticlesBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl flex flex-col items-center text-center relative z-10"
      >
        {/* Image Section */}
        <div className="w-full mb-8 relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a05] via-transparent to-transparent z-10"></div>
          <img 
            src={minhaImagem} 
            alt="Comece no Digital" 
            className="w-full h-auto object-cover max-h-[500px] sm:max-h-[600px]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Copy Section */}
        <div className="z-20 -mt-24 sm:-mt-32 relative px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight text-balance mx-auto">
            Destrave o Seu Potencial e <span className="text-[#66ff00]">Construa a Vida dos Seus Sonhos</span>
          </h1>
          
          <div className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto font-medium text-pretty space-y-5">
            <p>
              O mercado digital mudou a minha realidade e pode mudar a sua também. Não importa de onde você está partindo, o primeiro passo é a decisão.
            </p>
            <p>
              Fale comigo no WhatsApp e inicie a sua jornada hoje mesmo.
            </p>
          </div>

          {/* Neon Button Section */}
          <div className="btn-container">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="neon-button">
              <span className="text">FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

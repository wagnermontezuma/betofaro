import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  fixed?: boolean;
  secondaryText?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  className = '',
  fixed = false,
  secondaryText = 'E receba notícias diárias!',
}) => {
  // Remover formatação do número de telefone para usar apenas dígitos
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Criar o link para o WhatsApp com o número e mensagem se fornecida
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  
  // Classes para o botão fixo
  if (fixed) {
    return (
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 drop-shadow-xl ${className}`}
        aria-label="Contato via WhatsApp"
      >
        <div className="flex">
          <div className="bg-pt-red text-white font-bold py-2 pl-4 pr-6 rounded-l-full flex flex-col items-start">
            <span className="text-lg md:text-xl">CHAMA NO ZAP DO FARO</span>
            <span className="text-xs md:text-sm text-red-100">{secondaryText}</span>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white transform translate-x-[-8px] relative">
            <Image 
              src="/images/whatsapp-logo.png" 
              alt="WhatsApp"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 64px"
            />
          </div>
        </div>
      </Link>
    );
  }
  
  // Versão regular do botão (para seção de contato)
  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block drop-shadow-xl ${className}`}
      aria-label="Contato via WhatsApp"
    >
      <div className="flex">
        <div className="bg-pt-red text-white font-bold py-3 pl-5 pr-7 rounded-l-full flex flex-col items-start">
          <span className="text-xl md:text-2xl">CHAMA NO ZAP DO FARO</span>
          <span className="text-sm md:text-base text-red-100">{secondaryText}</span>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white transform translate-x-[-10px] relative">
          <Image 
            src="/images/whatsapp-logo.png" 
            alt="WhatsApp"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 64px, 80px"
          />
        </div>
      </div>
    </Link>
  );
};

export default WhatsAppButton; 
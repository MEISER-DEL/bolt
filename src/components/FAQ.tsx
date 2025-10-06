import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'As artes funcionam em qualquer celular?',
    answer: 'Sim! Nossas artes são compatíveis com todos os modelos de celular, tanto Android quanto iPhone. O acesso é simples e rápido, sem complicações.'
  },
  {
    question: 'Tenho acesso vitalício?',
    answer: 'Sim, para sempre. Você paga uma única vez e tem acesso ilimitado a todo o conteúdo, incluindo atualizações mensais.'
  },
  {
    question: 'Posso usar em mais de uma loja?',
    answer: 'Sim, uso pessoal e comercial liberado. Você pode usar em quantas lojas quiser sem custo adicional.'
  },
  {
    question: 'Recebo atualização?',
    answer: 'Sim, mensal e automática. Todo mês adicionamos novos designs e conteúdos sem nenhum custo extra para você.'
  },
  {
    question: 'Quanto tempo para ter acesso?',
    answer: 'Imediato após o pagamento. Você recebe o link de acesso na hora, direto no seu e-mail.'
  },
  {
    question: 'Preciso ter conhecimento em design?',
    answer: 'Não! Todos os designs são editáveis no Canva, uma plataforma super fácil e intuitiva. Você só precisa adicionar sua logo e informações.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4 mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-teal-500/30 overflow-hidden transition-all duration-300 hover:bg-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
              >
                <span className="font-bold text-white text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-300 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-200 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { NextResponse } from 'next/server';

// Simulação do envio de e-mail
async function enviarEmail(data: FormData) {
  // Esta é uma função simulada. Em um ambiente real, você usaria
  // um serviço como Nodemailer, SendGrid, AWS SES, etc.
  console.log('Enviando e-mail para a equipe do Senador com os dados:', data);
  
  // Simular atraso de processamento
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulando sucesso
  return { success: true };
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validação básica
    if (!data.nome || !data.email || !data.assunto || !data.mensagem) {
      return NextResponse.json(
        { message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Enviar o e-mail
    await enviarEmail(data);
    
    // Resposta de sucesso
    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar o formulário de contato:', error);
    
    // Resposta de erro
    return NextResponse.json(
      { message: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.' },
      { status: 500 }
    );
  }
} 
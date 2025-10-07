import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { GlobalHeader } from './GlobalHeader';
import { useApp } from '../contexts/AppContext';

export function PrivacyScreen() {
  const { setCurrentScreen } = useApp();

  const handleBack = () => {
    // Return to the previous screen (usually register)
    setCurrentScreen('register');
  };

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader 
        title="Políticas de Privacidade (LGPD)" 
        showBack 
        onBack={handleBack} 
      />

      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Política de Privacidade e Proteção de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 w-full">
              <div className="space-y-4 text-sm">
                <section>
                  <h3 className="font-medium mb-2">1. Informações Gerais</h3>
                  <p>
                    A ACHOU! está comprometida com a proteção da privacidade e dos dados pessoais 
                    de todos os usuários de nossa plataforma, em conformidade com a Lei Geral de 
                    Proteção de Dados (LGPD - Lei nº 13.709/2018).
                  </p>
                </section>

                <section>
                  <h3 className="font-medium mb-2">2. Dados Coletados</h3>
                  <p>Coletamos os seguintes tipos de dados pessoais:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Dados de identificação: nome, CPF, data de nascimento</li>
                    <li>Dados de contato: e-mail, telefone, WhatsApp</li>
                    <li>Dados de localização: endereço, geolocalização</li>
                    <li>Dados do negócio: CNPJ, informações comerciais (para empreendedores)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium mb-2">3. Finalidade do Tratamento</h3>
                  <p>Utilizamos seus dados para:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Criar e gerenciar sua conta na plataforma</li>
                    <li>Conectar consumidores a negócios locais</li>
                    <li>Melhorar nossos serviços</li>
                    <li>Comunicação sobre atualizações da plataforma</li>
                    <li>Cumprimento de obrigações legais</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium mb-2">4. Base Legal</h3>
                  <p>
                    O tratamento de seus dados pessoais é baseado no consentimento fornecido 
                    no momento do cadastro e na execução do contrato de prestação de serviços.
                  </p>
                </section>

                <section>
                  <h3 className="font-medium mb-2">5. Compartilhamento de Dados</h3>
                  <p>
                    Seus dados pessoais não serão vendidos, alugados ou compartilhados com 
                    terceiros, exceto quando necessário para:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Prestação dos serviços contratados</li>
                    <li>Cumprimento de obrigações legais</li>
                    <li>Proteção dos direitos da ACHOU!</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium mb-2">6. Seus Direitos</h3>
                  <p>Você tem direito a:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Confirmação da existência de tratamento</li>
                    <li>Acesso aos dados</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados</li>
                    <li>Portabilidade dos dados</li>
                    <li>Eliminação dos dados tratados com base no consentimento</li>
                    <li>Revogação do consentimento</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium mb-2">7. Segurança</h3>
                  <p>
                    Implementamos medidas técnicas e organizacionais adequadas para proteger 
                    seus dados pessoais contra acesso não autorizado, alteração, divulgação 
                    ou destruição.
                  </p>
                </section>

                <section>
                  <h3 className="font-medium mb-2">8. Retenção de Dados</h3>
                  <p>
                    Seus dados pessoais serão mantidos pelo período necessário para as 
                    finalidades informadas, respeitando os prazos legais aplicáveis.
                  </p>
                </section>

                <section>
                  <h3 className="font-medium mb-2">9. Contato</h3>
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                    entre em contato conosco:
                  </p>
                  <ul className="list-none mt-2 space-y-1">
                    <li>E-mail: privacidade@achou.com.br</li>
                    <li>Telefone: (11) 9999-9999</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium mb-2">10. Alterações</h3>
                  <p>
                    Esta política pode ser atualizada periodicamente. Notificaremos sobre 
                    mudanças significativas através dos canais de comunicação disponíveis.
                  </p>
                </section>

                <section className="border-t pt-4">
                  <p className="text-xs text-muted-foreground">
                    Última atualização: Outubro de 2025
                  </p>
                </section>
              </div>
            </ScrollArea>

            <div className="mt-6 text-center">
              <Button onClick={handleBack} className="w-full h-12" size="lg">
                Fechar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
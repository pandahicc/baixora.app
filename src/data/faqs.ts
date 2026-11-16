export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'O que é a Baixora?',
    a: 'A Baixora é uma extensão independente para o Chrome que baixa vídeos públicos do TikTok. Ela salva um vídeo, seleciona vários em pesquisas, Explorar, hashtags e perfis, baixa os vídeos de um criador e exporta metadados para XLSX.',
  },
  {
    q: 'Como baixar vídeos do TikTok em lote?',
    a: 'Abra uma página de pesquisa, Explorar, hashtag ou um perfil público, use os controles de adicionar em cada vídeo (ou a seleção da página), confira a quantidade selecionada e inicie o download. Você pode escolher ZIP ou salvar em uma pasta.',
  },
  {
    q: 'A Baixora é grátis?',
    a: 'A instalação é grátis. O plano Grátis inclui download de um vídeo e um fluxo limitado de download em lote, exportação e playlists — por padrão, 10 itens por dia. O Premium libera o fluxo completo. Os limites atuais aparecem na extensão; este site não exibe preços.',
  },
  {
    q: 'Os vídeos saem sem marca d’água?',
    a: 'A Baixora salva a fonte limpa em HD quando o TikTok disponibiliza essa fonte para o vídeo. Ela não recodifica nem edita a mídia, então não consegue remover uma marca d’água incorporada à única fonte disponível nem transformar um vídeo SD em HD.',
  },
  {
    q: 'Preciso de conta no TikTok ou na Baixora?',
    a: 'Não é preciso criar conta na Baixora. O trabalho acontece nas páginas públicas do TikTok que você já abriu. O TikTok ainda pode exibir um login obrigatório para parte do conteúdo, e a Baixora não contorna isso.',
  },
  {
    q: 'Quais páginas do TikTok são compatíveis?',
    a: 'Páginas públicas de vídeo, perfis de criadores, resultados de pesquisa, Explorar, hashtags, novelas curtas e as abas Início e Seguindo. A extensão não contorna login, CAPTCHA, bloqueio regional, DRM ou outros controles de acesso.',
  },
  {
    q: 'Dá para baixar todos os vídeos de um criador?',
    a: 'As ferramentas de criador carregam páginas sucessivas de publicações, republicações, playlists ou curtidos do perfil aberto. A execução para quando o TikTok deixa de retornar itens ou quando você interrompe. Vídeos privados, removidos ou bloqueados por região não entram, então o resultado não é um arquivo completo garantido.',
  },
  {
    q: 'Em quais formatos os arquivos são salvos?',
    a: 'Os vídeos são salvos em MP4. O download em lote pode gerar um ZIP ou gravar arquivos individuais em uma pasta escolhida. Os metadados selecionados podem ser exportados em XLSX. A Baixora não baixa apenas o áudio.',
  },
  {
    q: 'Onde os arquivos ficam salvos?',
    a: 'O download único usa o fluxo normal do navegador. O lote pode ser salvo como ZIP ou gravado em uma pasta escolhida por você. Os arquivos ficam no seu computador; a Baixora não os envia para um servidor.',
  },
  {
    q: 'Por que um download falhou?',
    a: 'O vídeo pode não ter fonte reproduzível, a URL de mídia pode ter expirado, a rede pode ter caído ou o navegador pode ter negado o acesso à pasta. Atualize a página e tente de novo. Em um lote, as falhas são informadas sem interromper o restante.',
  },
  {
    q: 'A Baixora é afiliada ao TikTok? Baixar é permitido?',
    a: 'Não. A Baixora é um produto independente, sem vínculo, endosso ou patrocínio do TikTok ou da ByteDance. Baixar um vídeo público não dá permissão para republicá-lo ou usá-lo comercialmente. Siga a lei aplicável, os termos do TikTok e as permissões do dono do conteúdo.',
  },
];

export const BULK_DOWNLOAD_FAQS: FaqItem[] = [
  {
    q: 'Quais páginas aceitam seleção em lote?',
    a: 'Resultados de pesquisa, Explorar, hashtags e perfis de criadores. Páginas de vídeo aceitam o download individual. Os controles variam conforme o tipo de página e o layout atual do TikTok.',
  },
  {
    q: 'Como adiciono vídeos a um lote?',
    a: 'Use o controle de adicionar em cada card ou os controles de seleção da página, quando disponíveis. Depois inicie o download em lote e escolha ZIP ou uma pasta de destino.',
  },
  {
    q: 'Devo usar ZIP ou salvar em pasta?',
    a: 'O ZIP gera um único arquivo pelo fluxo de download do navegador. Salvar em pasta grava arquivos MP4 individuais em uma pasta escolhida, o que costuma ser mais prático para lotes grandes ou revisão posterior. As duas opções usam a mesma seleção.',
  },
  {
    q: 'Existe limite no lote?',
    a: 'O plano Grátis tem limite diário para download em lote, exportação e playlists — por padrão, 10 itens por dia. O Premium libera o fluxo completo. A extensão mostra o limite atual. O tamanho também depende dos vídeos que o TikTok disponibiliza na página.',
  },
  {
    q: 'Por que alguns vídeos são ignorados?',
    a: 'Um vídeo pode não ter fonte reproduzível, ter uma URL expirada ou usar um formato que a página não expõe. Itens ignorados ou com falha são informados separadamente, sem interromper o restante da fila.',
  },
  {
    q: 'A Baixora baixa todos os cards da página?',
    a: 'Não. Ela trabalha com os vídeos que a página retorna ou renderiza. Não há garantia de todos os vídeos de uma pesquisa, hashtag ou perfil, nem de um arquivo histórico completo.',
  },
];

export const SINGLE_VIDEO_FAQS: FaqItem[] = [
  {
    q: 'Onde aparece o botão de download?',
    a: 'A Baixora adiciona um controle a páginas de vídeo e cards públicos compatíveis. A posição exata acompanha o layout atual do TikTok. Se o botão não aparecer, atualize a página e confirme que a URL é uma página pública compatível.',
  },
  {
    q: 'O download sai sem marca d’água?',
    a: 'A Baixora solicita a fonte limpa em HD quando o TikTok a disponibiliza. O arquivo não é recodificado nem editado. Se a única fonte disponível já tiver marca d’água, a Baixora não consegue removê-la.',
  },
  {
    q: 'Posso escolher o nome do arquivo?',
    a: 'Sim. A extensão oferece os formatos título, data de publicação + título, data de publicação + ID do vídeo e usuário + data + título. Escolha o formato no popup ou nas configurações da extensão.',
  },
  {
    q: 'Posso cancelar um download?',
    a: 'Clique novamente no controle ativo enquanto o indicador de progresso estiver rodando. O download atual é interrompido sem afetar outros vídeos.',
  },
  {
    q: 'Por que o vídeo ficou em qualidade baixa?',
    a: 'A Baixora salva a melhor fonte que a página disponibiliza. Se o TikTok só expõe uma fonte SD ou de bitrate menor para aquele vídeo, esse é o arquivo possível. A extensão não aumenta nem reconstrói uma versão de qualidade superior.',
  },
];

export const CREATOR_VIDEO_FAQS: FaqItem[] = [
  {
    q: 'Quais seções de criador a Baixora carrega?',
    a: 'Publicações, republicações, playlists e curtidos, quando o TikTok disponibiliza essas seções no perfil público. O painel da extensão oferece seletor de canal e os controles Iniciar, Continuar e Parar.',
  },
  {
    q: 'Quais filtros existem?',
    a: 'Duração, período de publicação, palavras no título, playlist e contagens mínimas de reproduções, curtidas, salvamentos, comentários e compartilhamentos, conforme os campos que a página expõe. A seleção filtrada é a usada no download ou na exportação.',
  },
  {
    q: 'Posso continuar uma execução interrompida?',
    a: 'Sim, use Continuar quando a extensão oferecer. Uma execução parada pode precisar recomeçar da página atual. A Baixora não junta execuções parciais entre páginas ou sessões.',
  },
  {
    q: 'Posso exportar os metadados do criador?',
    a: 'Sim. Os vídeos selecionados podem ser exportados em XLSX com ID do vídeo, descrição, URL de detalhe, URL de mídia, data de publicação, duração, contexto de playlist e contagens públicas, quando disponíveis.',
  },
  {
    q: 'Por que a contagem é menor que a do perfil?',
    a: 'O perfil pode incluir itens privados, removidos, bloqueados por região ou indisponíveis que a Baixora não consegue carregar. O TikTok também pode parar de retornar páginas, e a Baixora não contorna esses limites. Trate o resultado como a amostra disponível, não como um arquivo completo.',
  },
];

export const SHORT_DRAMA_FAQS: FaqItem[] = [
  {
    q: 'Onde aparece o botão de novela curta?',
    a: 'A Baixora adiciona um controle a páginas públicas compatíveis de novelas curtas do TikTok. Ao abrir, ele mostra os episódios disponíveis em uma grade paginada.',
  },
  {
    q: 'Posso selecionar só alguns episódios?',
    a: 'Sim. Clique em um episódio para selecionar ou desmarcar, ou use o controle de selecionar tudo. A quantidade selecionada aparece ao lado das ações de exportar e salvar.',
  },
  {
    q: 'O que fazer com os episódios selecionados?',
    a: 'Salvar em uma pasta ou exportar os metadados para XLSX. O salvamento grava arquivos MP4; a exportação gera uma planilha com os registros dos episódios selecionados.',
  },
  {
    q: 'Por que faltam episódios?',
    a: 'Episódios podem ter restrição regional, ter sido removidos ou não estar disponíveis nos dados da página. A Baixora não carrega nem baixa episódios que o TikTok não expõe, e não contorna controles de acesso.',
  },
  {
    q: 'A Baixora baixa a novela inteira automaticamente?',
    a: 'Não. Ela carrega a lista de episódios disponível e deixa você escolher o que salvar. A disponibilidade e a completude dependem da página e das respostas do TikTok.',
  },
];

export const XLSX_EXPORT_FAQS: FaqItem[] = [
  {
    q: 'Quais campos entram na exportação XLSX?',
    a: 'ID do vídeo, URL da capa, descrição, URL de detalhe, URL de mídia, isTop, data de criação, ID e nome da playlist, duração, reproduções, curtidas, salvamentos, comentários e compartilhamentos.',
  },
  {
    q: 'Quais vídeos entram?',
    a: 'A exportação usa os vídeos selecionados no fluxo atual de criador, novela curta ou lista. Ela não junta dados entre páginas, abas ou sessões de navegação.',
  },
  {
    q: 'As contagens são em tempo real?',
    a: 'São um retrato dos valores que a página expõe no momento da execução. A Baixora não atualiza esses números em segundo plano nem fornece histórico.',
  },
  {
    q: 'A exportação inclui vendas ou receita?',
    a: 'Não. A Baixora não estima vendas, receita, investimento em anúncios ou conversão. A planilha contém os campos públicos listados, quando disponíveis.',
  },
  {
    q: 'O XLSX é uma integração com o Excel?',
    a: 'Não. A Baixora gera um arquivo .xlsx local que você pode abrir no Excel, Google Sheets ou outro aplicativo de planilhas. Não há conexão de conta, complemento ou sincronização automática.',
  },
];

export const PLANS_FAQS: FaqItem[] = [
  {
    q: 'O que está incluído no plano Grátis?',
    a: 'O Grátis cobre o download de um vídeo e um fluxo limitado de download em lote, exportação e playlists. Por padrão, o limite é de 10 itens por dia; o valor atual aparece na extensão.',
  },
  {
    q: 'O que o Premium adiciona?',
    a: 'O Premium libera o fluxo completo em lote para listas e perfis de criadores, o download de novelas curtas, a saída em pasta ou ZIP e a exportação XLSX. Ele não muda o que o TikTok disponibiliza nem concede direitos de uso.',
  },
  {
    q: 'Quanto custa o Premium?',
    a: 'O valor e as condições atuais são mostrados no fluxo de assinatura da extensão. Este site não exibe preços porque a oferta pode mudar.',
  },
  {
    q: 'Como o Premium é ativado?',
    a: 'Conclua a assinatura e use o token Premium no popup da extensão, em “Atualizar token”. Se a ativação não aparecer, confirme o mesmo perfil do Chrome e tente novamente.',
  },
  {
    q: 'Os limites são renovados?',
    a: 'Os limites do plano Grátis seguem o ciclo mostrado na extensão. O Premium libera o fluxo em lote para os recursos compatíveis, mas a disponibilidade das páginas e os limites do próprio TikTok continuam valendo.',
  },
  {
    q: 'Posso cancelar ou gerenciar o plano?',
    a: 'Use o fluxo de gerenciamento da assinatura informado na extensão ou no checkout. A Baixora não recebe nem armazena os dados do seu cartão. Fale com o suporte se o status não atualizar após a compra.',
  },
];

export const SUPPORT_FAQS: FaqItem[] = [
  {
    q: 'Como instalo a Baixora?',
    a: 'Abra a página da Baixora na Chrome Web Store, escolha Adicionar ao Chrome e fixe a extensão se quiser acesso rápido. Depois abra uma página pública compatível do TikTok e procure o controle de download.',
  },
  {
    q: 'Por que o botão de download não aparece?',
    a: 'Confirme que a Baixora está ativada, que você está em uma página pública compatível de tiktok.com e que a página terminou de carregar. Atualize e tente de novo. Conteúdo privado ou disponível só após login está fora do escopo.',
  },
  {
    q: 'Por que o download fica em 0% ou falha?',
    a: 'A URL de mídia pode ter expirado, o vídeo pode não expor uma fonte reproduzível ou a rede pode ter caído. Atualize a página e tente de novo. Em um lote, uma falha não interrompe o restante da fila.',
  },
  {
    q: 'Por que salvar em ZIP ou pasta não inicia?',
    a: 'Salvar em pasta usa a File System Access API do navegador e exige que você escolha uma pasta e conceda permissão. Se o aviso foi fechado ou a permissão negada, inicie a ação novamente e aprove o pedido.',
  },
  {
    q: 'Por que o arquivo XLSX está vazio ou sem valores?',
    a: 'Confirme que há vídeos selecionados antes de exportar. Alguns campos públicos podem faltar; a Baixora deixa esses campos em branco em vez de inventar valores. A planilha inclui os campos listados na página de exportação XLSX.',
  },
  {
    q: 'O Premium está ativo, mas a extensão continua no Grátis.',
    a: 'Volte à extensão, confira o token em “Atualizar token” e confirme que você está no mesmo perfil do Chrome. Se não atualizar, abra a extensão novamente e fale com o suporte enviando apenas a referência da assinatura — nunca envie senha ou token.',
  },
  {
    q: 'A Baixora funciona com conteúdo privado ou logado?',
    a: 'Não. A Baixora é feita para páginas públicas e não contorna login, CAPTCHA, bloqueio regional, DRM ou limites de taxa. O TikTok ainda pode exibir um login obrigatório para parte do conteúdo público, e a Baixora não substitui isso.',
  },
  {
    q: 'Como falo com o suporte?',
    a: 'Escreva para pandahi.cc@gmail.com. Inclua a versão da extensão, o tipo de página e uma descrição curta do que aconteceu. Não envie credenciais de conta, dados de página ou tokens de assinatura.',
  },
];

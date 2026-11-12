import importedRecipes from "./recipes.json";
import stella from "@/assets/Stella.jpeg.asset.json";
import davi from "@/assets/Davi.jpeg.asset.json";
import valentina from "@/assets/Valentina.jpeg.asset.json";
/**
 * ✏️ CONTEÚDO EDITÁVEL DO SITE
 * Stella, Davi e Valentina: alterem os textos aqui! Campos com "" (vazio)
 * aparecem no site como "A preencher".
 */

export type CategoryId = "doces" | "geladas" | "bolos" | "salgados";

export const companyName = "Comida Livre para Todos";
export const officialSiteUrl = "https://mitsd.com.br/comida-livre-para-todos/";

export const categories: { id: CategoryId; name: string; emoji: string; description: string }[] = [
  { id: "doces", name: "Doces", emoji: "🍫", description: "Brigadeiros, brownies e docinhos para adoçar o dia." },
  { id: "geladas", name: "Sobremesas geladas", emoji: "🍦", description: "Sorvetes e delícias fresquinhas." },
  { id: "bolos", name: "Bolos e tortas", emoji: "🎂", description: "Fatias perfeitas para compartilhar." },
  { id: "salgados", name: "Lanches salgados", emoji: "🥪", description: "Para quem prefere um salgadinho." },
];

export type Recipe = {
  id?: number;
  ingredientGroups?: { title: string; items: string[] }[];
  needsReview?: boolean;
  name: string;
  image?: string; // URL da foto ou ilustração
  category: CategoryId;
  ingredients: string[];
  steps: string[];
  time: string; // ex.: "30 minutos"
  servings: string; // ex.: "8 porções"
  notes: string; // observações sobre glúten e lactose
  tips?: string[];
};

/** Adicionem as receitas reais aqui quando estiverem prontas. */
export const recipes: Recipe[] = importedRecipes.map((recipe) => ({ ...recipe, category: recipe.category as CategoryId }));

/** Páginas do livro digital. Para adicionar uma página de receita, inclua { kind: "image", image: "URL", alt: "..." }. */
export const extraBookPages: { kind: "image"; image: string; alt: string }[] = [];

export const creators = [
  { name: "Stella", photo: stella.url, emoji: "🍓", hat: "strawberry" as const },
  { name: "Davi", photo: davi.url, emoji: "🍫", hat: "caramel" as const },
  { name: "Valentina", photo: valentina.url, emoji: "🧁", hat: "butter" as const },
];
export const teamMessage = "Juntos, misturamos ideias, criatividade e muita vontade de empreender!";

export const journey = [
  { emoji: "🔍", title: "Identificamos um desafio", done: undefined as boolean | undefined },
  { emoji: "👥", title: "Pensamos em quem poderia se beneficiar", done: undefined as boolean | undefined },
  { emoji: "💡", title: "Trocamos ideias e escolhemos uma solução", done: undefined as boolean | undefined },
  { emoji: "📖", title: "Começamos a criar o livro", done: undefined as boolean | undefined },
  { emoji: "🎪", title: "Preparamos nosso produto para a feira", done: undefined as boolean | undefined },
  { emoji: "📣", title: "Compartilhamos nossa ideia com o público", done: undefined as boolean | undefined },
];

export type ColabItem = {
  emoji: string;
  title: string;
  text: string;
  bullets?: string[];
};

/** Informações para os jurados. Deixe "" para mostrar "A preencher". */
export const colab: ColabItem[] = [
  {
    emoji: "❓",
    title: "Problema identificado",
    text: "Encontrar opções gostosas e variadas é difícil para quem precisa evitar glúten e lactose. As receitas disponíveis costumam ser caras, complicadas ou usam ingredientes que não existem no mercado do bairro.",
  },
  {
    emoji: "🙋",
    title: "Público-alvo (persona)",
    text: "Nossa persona é a família que cozinha todos os dias e precisa adaptar receitas por causa de uma restrição alimentar. Para representá-la, criamos a Marina, 38 anos, mãe de dois filhos — um deles com intolerância à lactose e sensibilidade ao glúten.",
    bullets: [
      "Quer receitas simples, com ingredientes que já encontra na feira do bairro.",
      "Tem pouco tempo e não pode gastar com produtos industrializados caros.",
      "Confia mais na indicação de quem já testou do que em propaganda.",
      "Precisa de um material que funcione na cozinha, sem depender de internet.",
    ],
  },
  {
    emoji: "🧠",
    title: "Brainstorming e escolha da solução",
    text: "Antes de chegar ao livro, o grupo avaliou três caminhos: um aplicativo de receitas, um kit de ingredientes e um livro impresso. O aplicativo exigia programação e manutenção; o kit esbarrava no custo de entrega e no desperdício. O livro venceu por ser físico, barato de produzir e fácil de demonstrar na Feira.",
    bullets: [
      "Aplicativo: descartado pelo tempo de desenvolvimento e pela dependência de internet.",
      "Kit de ingredientes: descartado pelo risco de desperdício e pelo custo por unidade.",
      "Livro impresso: baixo custo, funciona sem internet e o visitante pode folhear antes de comprar.",
    ],
  },
  {
    emoji: "🎯",
    title: "Missão, visão e valores",
    text: "A missão diz o que a empresa faz todos os dias, a visão mostra onde queremos chegar e os valores explicam como decidimos quando surge um impasse.",
    bullets: [
      "Missão: provar que comer sem glúten e sem lactose pode ser saboroso, simples e acessível.",
      "Visão: ser lembrado na Feira como o livro de receitas que realmente funciona na cozinha de casa.",
      "Valores: criatividade, cuidado com o outro, transparência nos números e trabalho em equipe.",
    ],
  },
  {
    emoji: "⭐",
    title: "Diferenciais do produto",
    text: "O livro não é uma coletânea copiada da internet: cada receita foi preparada por nós e ajustada até dar certo.",
    bullets: [
      "42 receitas organizadas em doces, sobremesas geladas, bolos e salgados.",
      "Medidas caseiras (xícara e colher) e ingredientes de feira, sem itens importados.",
      "Cada receita explica por que aquele preparo não leva glúten nem lactose.",
      "QR Code na capa que abre a versão digital sempre atualizada do livro.",
      "Linguagem de aluno para aluno: direta, sem termos técnicos.",
    ],
  },
  {
    emoji: "📣",
    title: "Estratégia de marketing",
    text: "O marketing foi pensado para quem está por perto e pode provar o livro antes de comprar.",
    bullets: [
      "Identidade visual em xadrez amarelo e tons de chocolate, repetida em todos os materiais.",
      "Cartazes no colégio e folder com QR Code distribuídos uma semana antes.",
      "Divulgação no perfil da turma e no grupo das famílias.",
      "Degustação de uma receita do livro no estande, durante a Feira.",
      "Meta de 40 livros vendidos no dia.",
    ],
  },
  {
    emoji: "🛠️",
    title: "Criação e produção do livro",
    text: "O livro saiu de um caderno de testes e virou produto em cinco etapas, com conferência em cada uma.",
    bullets: [
      "Pesquisa: levantamento de receitas que já conhecíamos e adaptação para versões sem glúten e sem lactose.",
      "Testes: cada receita foi preparada em casa e avaliada em ficha de sabor, textura e custo.",
      "Revisão: padronização de medidas, correção do texto e ajuste das instruções de preparo.",
      "Diagramação: montagem no Canva em formato A5, com capa em xadrez, para caber na mão.",
      "Impressão e encadernação em gráfica local, com conferência lote a lote.",
    ],
  },
  {
    emoji: "💰",
    title: "Custos, preço e expectativa de lucro",
    text: "Os valores foram cotados com a gráfica antes da Feira. O preço de venda cobre o custo unitário e ainda paga a divulgação, sobrando lucro para a próxima tiragem.",
    bullets: [
      "Impressão e encadernação (60 páginas, A5): R$ 21,00 por livro.",
      "Embalagem e adesivo com QR Code: R$ 3,00 por livro.",
      "Custo por livro: R$ 24,00.",
      "Divulgação (folders, cartazes e amostra): R$ 120,00 de custo fixo.",
      "Preço de venda: R$ 35,00 — lucro de R$ 11,00 por livro.",
      "Meta de 40 livros: receita de R$ 1.400,00, custo de R$ 1.080,00 e lucro de R$ 320,00.",
      "Ponto de equilíbrio: 11 livros vendidos cobrem todo o investimento.",
    ],
  },
];

export const fair = {
  date: "13/11/2026",
  time: "Período matutino",
  place: "St. G Norte Nº 26 - Taguatinga, Brasília",
};

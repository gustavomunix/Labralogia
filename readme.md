# Labralogia

Um mini-jogo de menos de dois minutos sobre uma gatinha que precisa de espaço e um labrador que está aprendendo a esperar.

Feito por Gustavo para a Julie. Ela joga como a gatinha; o labrador só chega bem quando espera. Errar não pune, só faz a gatinha se recolher um pouco. No final aparece uma carta.

## Como funciona

1. **Chegada** — a gatinha no cantinho, o labrador na porta.
2. **Espaço** — o labrador vem aos pulinhos. Tocar em "Ainda não" antes de ele entrar no espaço dela faz ele sentar, e cada espera vira confiança.
3. **Ritmo** — "o manual da gatinha": ler o sinal dela e escolher o que ele faz. Quatro rodadas, cada acerto libera um carinho.
4. **Juntos** — os dois lado a lado, uma piscada lenta e a carta.

## Stack

- [Astro](https://astro.build) gera a página estática.
- O jogo é uma ilha [Svelte 5](https://svelte.dev) (`src/components/Game.svelte`).
- Personagens, cenário e ícones são SVG desenhados em código, sem imagens nem bibliotecas de ícones.
- Fontes Fredoka e Nunito via Fontsource.
- Publicado como assets estáticos no Cloudflare Workers.

## Estrutura

```
src/
  pages/index.astro          página e meta tags
  components/Game.svelte     máquina de estados das cenas
  components/Palco.svelte    palco compartilhado (cenário + personagens)
  components/scenes/         Chegada, Espaco, Ritmo, Juntos
  components/art/            Gatinha, Labrador, Cenario, Carinho (SVG)
  data/rodadas.ts            textos e respostas das rodadas do Ritmo
  content/carta.md           a carta final
  lib/tipos.ts               tipos compartilhados
  styles/tokens.css          paleta, fontes e espaçamentos
docs/textos.md               inventário revisado de todo texto do jogo
```

## Rodando

Requer Node e pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # gera dist/
pnpm deploy     # build + wrangler deploy
```

Para fazer a sua versão, troque `src/content/carta.md` e, se quiser, os textos de `src/data/rodadas.ts`.

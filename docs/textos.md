# Textos do Labralogia

## Meta (index.astro)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| META-01 | src/pages/index.astro:8,18 | meta | Título da aba do navegador (`<title>`) | Labralogia | = |
| META-02 | src/pages/index.astro:9,19 | meta | Meta description (SEO / preview) | Uma gatinha que precisa de espaço. Um labrador que tá aprendendo a esperar. | = |
| META-03 | src/pages/index.astro:20 | meta | Open Graph title (preview de link) | Labralogia | = |
| META-04 | src/pages/index.astro:21 | meta | Open Graph description (preview de link) | Uma gatinha que precisa de espaço. Um labrador que tá aprendendo a esperar. | = |
| META-05 | src/pages/index.astro:22 | meta | Open Graph type | website | = |

## Chegada (Chegada.svelte)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| CHE-01 | src/components/scenes/Chegada.svelte:24 | título | Sempre, topo da cena inicial | Labralogia | = |
| CHE-02 | src/components/scenes/Chegada.svelte:35 | parágrafo | Sempre, abaixo do palco | Ela gosta de ficar quietinha. Ele gosta de chegar. | Ela gosta do espaço dela. Ele gosta de chegar. |
| CHE-03 | src/components/scenes/Chegada.svelte:37 | botão | Sempre, inicia o jogo | Vamos tentar? | = |
| CHE-04 | src/components/scenes/Chegada.svelte:30 | aria-label | Botão invisível sobre o labrador, ao focar/leitores de tela | fazer carinho no labrador | = |

## Espaço (Espaco.svelte)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| ESP-01 | src/components/scenes/Espaco.svelte:107 | dica | Sempre, topo da cena | Ele vem animado. Toque em "ainda não" quando ele se empolgar. Cada vez que ele espera, ela confia mais. | Ele vem aos pulinhos. Toque em "Ainda não" antes de ele entrar no espaço dela. Cada espera vira confiança. |
| ESP-02 | src/components/scenes/Espaco.svelte:13 | variação aleatória | Sorteada ao acertar (esperar), via aria-live | Ele sentou. Com muito esforço. | = |
| ESP-03 | src/components/scenes/Espaco.svelte:14 | variação aleatória | Sorteada ao acertar (esperar), via aria-live | O rabo tremeu, mas o bumbum ficou no chão. | = |
| ESP-04 | src/components/scenes/Espaco.svelte:15 | variação aleatória | Sorteada ao acertar (esperar), via aria-live | Ele esperou. Ninguém acredita. | Ele esperou. Nem ele acredita. |
| ESP-05 | src/components/scenes/Espaco.svelte:19 | variação aleatória | Sorteada ao errar (invadir), via aria-live | Muito perto! Ela se encolheu. | Perto demais. Ela se encolheu toda. |
| ESP-06 | src/components/scenes/Espaco.svelte:20 | variação aleatória | Sorteada ao errar (invadir), via aria-live | Opa. Isso foi perto demais. | Opa. Ela abaixou as orelhas. |
| ESP-07 | src/components/scenes/Espaco.svelte:21 | variação aleatória | Sorteada ao errar (invadir), via aria-live | Ela virou uma bolinha de pelo. | = |
| ESP-08 | src/components/scenes/Espaco.svelte:24 | aria-live | Ao completar a barra de confiança | Ela deixou ele chegar mais um pouquinho. | = |
| ESP-09 | src/components/scenes/Espaco.svelte:121 | rótulo | Sempre, ao lado do medidor | confiança | = |
| ESP-10 | src/components/scenes/Espaco.svelte:125 | aria-label | Medidor role="meter", para leitores de tela | confiança | confiança dela |
| ESP-11 | src/components/scenes/Espaco.svelte:149 | botão | Durante a fase de andar/espera | ainda não ✋ | Ainda não (ícone patinha à direita, aria-hidden) |
| ESP-12 | src/components/scenes/Espaco.svelte:141 | botão | Quando fase = pronto | Continuar | = |

## Ritmo (Ritmo.svelte)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| RIT-00-titulo | src/components/scenes/Ritmo.svelte:65 | título | Sempre, cabeçalho da cena | O manual da gatinha | = |
| RIT-00-sub | src/components/scenes/Ritmo.svelte:66 | subtítulo | Sempre, abaixo do título | Leia o sinal dela. Escolha o que ele faz. | = |
| RIT-00-carinhos | src/components/scenes/Ritmo.svelte:72 | aria-label | Bandeja de carinhos, para leitores de tela | carinhos conquistados | = |
| RIT-00-indicador | src/components/scenes/Ritmo.svelte:80 | rótulo | Sempre, conta a rodada atual | rodada {indice + 1} de {rodadas.length} | = |

### Ritmo — rodada 1 (patinha)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| RIT-1-legenda | src/data/rodadas.ts:6 | parágrafo | Antes da escolha, via aria-live | Ela tá enroladinha no canto, de olho meio fechado. | = |
| RIT-1-A-label | src/data/rodadas.ts:10 | botão | Sempre, opção correta | Esperar | = |
| RIT-1-A-resposta | src/data/rodadas.ts:13 | aria-live | Após escolher Esperar | Ele sentou. Ela abriu um olho. Progresso. | = |
| RIT-1-B-label | src/data/rodadas.ts:16 | botão | Sempre, opção errada | Pular no sofá | = |
| RIT-1-B-resposta | src/data/rodadas.ts:20 | aria-live | Após escolher Pular no sofá | Sumiu atrás do sofá. Só o rabo ficou. | = |
| RIT-1-C-label | src/data/rodadas.ts:23 | botão | Sempre, opção errada | Trazer a bolinha | = |
| RIT-1-C-resposta | src/data/rodadas.ts:27 | aria-live | Após escolher Trazer a bolinha | Ela virou o rosto. A bolinha não convenceu. | = |

### Ritmo — rodada 2 (focinho)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| RIT-2-legenda | src/data/rodadas.ts:33 | parágrafo | Antes da escolha, via aria-live | Ela levantou a cabeça e tá olhando pra ele. | Ela levantou a cabeça. As orelhas tão pra frente. |
| RIT-2-A-label | src/data/rodadas.ts:37 | botão | Sempre, opção errada | Correr até ela | = |
| RIT-2-A-resposta | src/data/rodadas.ts:41 | aria-live | Após escolher Correr até ela | Ela virou uma bolinha. Rápido demais. | Rápido demais. As orelhas foram pra trás. |
| RIT-2-B-label | src/data/rodadas.ts:44 | botão | Sempre, opção correta | Chegar devagar | = |
| RIT-2-B-resposta | src/data/rodadas.ts:47 | aria-live | Após escolher Chegar devagar | Um passinho de cada vez. Ela deixou. | = |
| RIT-2-C-label | src/data/rodadas.ts:50 | botão | Sempre, opção errada | Latir oi | = |
| RIT-2-C-resposta | src/data/rodadas.ts:54 | aria-live | Após escolher Latir oi | Ela fingiu que não ouviu. | = |

### Ritmo — rodada 3 (rabinho)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| RIT-3-legenda | src/data/rodadas.ts:60 | parágrafo | Antes da escolha, via aria-live | Ela tá de costas, mas o rabo tá balançando devagarinho. | = |
| RIT-3-A-label | src/data/rodadas.ts:64 | botão | Sempre, opção errada | Cutucar com o focinho | = |
| RIT-3-A-resposta | src/data/rodadas.ts:68 | aria-live | Após escolher Cutucar com o focinho | Atrás do sofá de novo. Ele vai aprender. | Ela saiu de fininho. Ele ficou cutucando o ar. |
| RIT-3-B-label | src/data/rodadas.ts:71 | botão | Sempre, opção errada | Girar de felicidade | = |
| RIT-3-B-resposta | src/data/rodadas.ts:75 | aria-live | Após escolher Girar de felicidade | Derrubou o vaso. Ela se encolheu. | Derrubou o vaso. Ela fingiu que não viu. |
| RIT-3-C-label | src/data/rodadas.ts:78 | botão | Sempre, opção correta | Ficar perto sem tocar | = |
| RIT-3-C-resposta | src/data/rodadas.ts:81 | aria-live | Após escolher Ficar perto sem tocar | Ele ficou ali. Ela encostou o rabinho nele. | = |

### Ritmo — rodada 4 (coração)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| RIT-4-legenda | src/data/rodadas.ts:87 | parágrafo | Antes da escolha, via aria-live | Ela se espreguiçou e deitou um pouquinho mais perto. | = |
| RIT-4-A-label | src/data/rodadas.ts:91 | botão | Sempre, opção correta | Deitar do lado | = |
| RIT-4-A-resposta | src/data/rodadas.ts:94 | aria-live | Após escolher Deitar do lado | Lado a lado. Ninguém invadiu ninguém. | Ele deitou devagar. Ela deixou a patinha encostar. |
| RIT-4-B-label | src/data/rodadas.ts:97 | botão | Sempre, opção errada | Comemorar pulando | = |
| RIT-4-B-resposta | src/data/rodadas.ts:101 | aria-live | Após escolher Comemorar pulando | Calma, campeão. Quase. | Ele comemorou cedo. Ela recuou um pouquinho. |
| RIT-4-C-label | src/data/rodadas.ts:104 | botão | Sempre, opção errada | Lamber a orelha dela | = |
| RIT-4-C-resposta | src/data/rodadas.ts:108 | aria-live | Após escolher Lamber a orelha dela | Ela fez cara de "sério?". | Ela sacudiu a orelha e fez cara de "sério?". |

## Juntos (Juntos.svelte)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| JUN-01 | src/components/scenes/Juntos.svelte:48 | parágrafo | Antes da piscada (~1,5s), via aria-live | Lado a lado. Ninguém invadiu ninguém. | = |
| JUN-02 | src/components/scenes/Juntos.svelte:46 | parágrafo | Após a piscada, via aria-live | Ela piscou devagar. Em gatês, isso quer dizer: eu confio em você. | = |
| JUN-03 | src/components/scenes/Juntos.svelte:61 | parágrafo | Após a carta aparecer (~4s), resumo montado | jogado em {segundos}s · errou {erros} {vez\|vezes} (tá tudo bem) | {segundos}s juntos · ele se empolgou {erros} {vez\|vezes} |
| JUN-04a | src/components/scenes/Juntos.svelte:62 | variação aleatória | Parte do resumo: singular, quando erros = 1 | vez | = |
| JUN-04b | src/components/scenes/Juntos.svelte:62 | variação aleatória | Parte do resumo: plural, quando erros ≠ 1 | vezes | = |
| JUN-05 | src/components/scenes/Juntos.svelte:66 | botão | Após a carta aparecer | ler de novo | Ler de novo |
| JUN-06 | src/components/scenes/Juntos.svelte:67 | botão | Após a carta aparecer, recomeça em Espaço | tentar outra vez | Jogar de novo |

## Arte (aria-labels)

| ID | Onde (arquivo:linha) | Tipo | Quando aparece | Texto atual | Revisão |
| --- | --- | --- | --- | --- | --- |
| ART-GAT-quieta | src/components/art/Gatinha.svelte:12 | aria-label | SVG role="img", pose quieta | Gatinha quieta, sentada em pãozinho | Gatinha quieta, deitada em formato de pãozinho |
| ART-GAT-encolhida | src/components/art/Gatinha.svelte:13 | aria-label | SVG role="img", pose encolhida | Gatinha encolhida em bolinha | = |
| ART-GAT-virada | src/components/art/Gatinha.svelte:14 | aria-label | SVG role="img", pose virada | Gatinha virada de costas, focinho empinado | = |
| ART-GAT-escondida | src/components/art/Gatinha.svelte:15 | aria-label | SVG role="img", pose escondida | Gatinha escondida atrás do sofá | = |
| ART-GAT-piscando | src/components/art/Gatinha.svelte:16 | aria-label | SVG role="img", pose piscando (Juntos) | Gatinha piscando devagar | = |
| ART-LAB-animado | src/components/art/Labrador.svelte:12 | aria-label | SVG role="img", pose animado | Labrador animado, pulando com a língua para fora | = |
| ART-LAB-sentado | src/components/art/Labrador.svelte:13 | aria-label | SVG role="img", pose sentado | Labrador sentado, comportado | = |
| ART-LAB-esforco | src/components/art/Labrador.svelte:14 | aria-label | SVG role="img", pose esforço | Labrador sentado, se segurando com esforço | = |
| ART-LAB-girando | src/components/art/Labrador.svelte:15 | aria-label | SVG role="img", pose girando | Labrador girando atrás do próprio rabo | = |
| ART-LAB-deitado | src/components/art/Labrador.svelte:16 | aria-label | SVG role="img", pose deitado | Labrador deitado, descansando feliz | = |
| ART-CAR-patinha-sim | src/components/art/Carinho.svelte:12 | aria-label | Ícone ativo (Espaço medidor / Ritmo bandeja) | patinha conquistada | = |
| ART-CAR-patinha-nao | src/components/art/Carinho.svelte:12 | aria-label | Ícone inativo | patinha ainda não | patinha ainda não conquistada |
| ART-CAR-focinho-sim | src/components/art/Carinho.svelte:13 | aria-label | Ícone ativo | focinho conquistado | = |
| ART-CAR-focinho-nao | src/components/art/Carinho.svelte:13 | aria-label | Ícone inativo | focinho ainda não | focinho ainda não conquistado |
| ART-CAR-rabinho-sim | src/components/art/Carinho.svelte:14 | aria-label | Ícone ativo | rabinho conquistado | = |
| ART-CAR-rabinho-nao | src/components/art/Carinho.svelte:14 | aria-label | Ícone inativo | rabinho ainda não | rabinho ainda não conquistado |
| ART-CAR-coracao-sim | src/components/art/Carinho.svelte:15 | aria-label | Ícone ativo | coração conquistado | = |
| ART-CAR-coracao-nao | src/components/art/Carinho.svelte:15 | aria-label | Ícone inativo | coração ainda não | coração ainda não conquistado |

## Decisões de revisão

- Glossário: "espaço" é a área dela (nunca "cantinho", "bolha" ou "canto"); "confiança" é o medidor; "carinhos" são os ícones conquistados.
- Ela = gatinha, ele = labrador, sempre em 3ª pessoa. "Você" só em instrução (ESP-01) e na fala dela em JUN-02.
- Erro é sempre ação dele com reação física dela (orelha, encolher, sair de fininho). Nunca "errou" nem nada que aponte para quem joga.
- Cada reação aparece uma vez só no jogo: "Lado a lado. Ninguém invadiu ninguém." fica só em JUN-01; "virou uma bolinha" só em ESP-07; "sofá" só em RIT-1-B.
- Botões com inicial maiúscula e sem pontuação, exceto "Vamos tentar?". A dica cita o botão exatamente como ele aparece: "Ainda não".
- Sem emoji em texto. O ✋ do ESP-11 vira o ícone SVG de patinha, aria-hidden.
- Sem exclamação. Humor vem de detalhe concreto, não de pontuação ("Nem ele acredita.", "cutucando o ar").
- Rótulos e aria-labels ficam em minúscula ("confiança", "patinha conquistada"); inativos dizem "ainda não conquistado/a" para não confundir com o botão "Ainda não".
- Limites: botão ≤ 22, legenda/resposta do Ritmo ≤ 60, dica do Espaço ≤ 110. Todas as revisões cabem.
- "gatês" é neologismo intencional e fica.

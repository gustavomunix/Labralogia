import type { Rodada } from '../lib/tipos';

export const rodadas: Rodada[] = [
  {
    sinal: 'quieta',
    legenda: 'Ela tá enroladinha no canto, de olho meio fechado.',
    carinho: 'patinha',
    opcoes: [
      {
        label: 'Esperar',
        correta: true,
        poseLabrador: 'sentado',
        resposta: 'Ele sentou. Ela abriu um olho. Progresso.',
      },
      {
        label: 'Pular no sofá',
        correta: false,
        reacao: 'escondida',
        poseLabrador: 'animado',
        resposta: 'Sumiu atrás do sofá. Só o rabo ficou.',
      },
      {
        label: 'Trazer a bolinha',
        correta: false,
        reacao: 'virada',
        poseLabrador: 'animado',
        resposta: 'Ela virou o rosto. A bolinha não convenceu.',
      },
    ],
  },
  {
    sinal: 'quieta',
    legenda: 'Ela levantou a cabeça e tá olhando pra ele.',
    carinho: 'focinho',
    opcoes: [
      {
        label: 'Correr até ela',
        correta: false,
        reacao: 'encolhida',
        poseLabrador: 'animado',
        resposta: 'Ela virou uma bolinha. Rápido demais.',
      },
      {
        label: 'Chegar devagar',
        correta: true,
        poseLabrador: 'esforco',
        resposta: 'Um passinho de cada vez. Ela deixou.',
      },
      {
        label: 'Latir oi',
        correta: false,
        reacao: 'virada',
        poseLabrador: 'animado',
        resposta: 'Ela fingiu que não ouviu.',
      },
    ],
  },
  {
    sinal: 'virada',
    legenda: 'Ela tá de costas, mas o rabo tá balançando devagarinho.',
    carinho: 'rabinho',
    opcoes: [
      {
        label: 'Cutucar com o focinho',
        correta: false,
        reacao: 'escondida',
        poseLabrador: 'animado',
        resposta: 'Atrás do sofá de novo. Ele vai aprender.',
      },
      {
        label: 'Girar de felicidade',
        correta: false,
        reacao: 'encolhida',
        poseLabrador: 'girando',
        resposta: 'Derrubou o vaso. Ela se encolheu.',
      },
      {
        label: 'Ficar perto sem tocar',
        correta: true,
        poseLabrador: 'sentado',
        resposta: 'Ele ficou ali. Ela encostou o rabinho nele.',
      },
    ],
  },
  {
    sinal: 'quieta',
    legenda: 'Ela se espreguiçou e deitou um pouquinho mais perto.',
    carinho: 'coracao',
    opcoes: [
      {
        label: 'Deitar do lado',
        correta: true,
        poseLabrador: 'deitado',
        resposta: 'Lado a lado. Ninguém invadiu ninguém.',
      },
      {
        label: 'Comemorar pulando',
        correta: false,
        reacao: 'encolhida',
        poseLabrador: 'animado',
        resposta: 'Calma, campeão. Quase.',
      },
      {
        label: 'Lamber a orelha dela',
        correta: false,
        reacao: 'virada',
        poseLabrador: 'animado',
        resposta: 'Ela fez cara de "sério?".',
      },
    ],
  },
];

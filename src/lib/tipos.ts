export type Cena = 'chegada' | 'espaco' | 'ritmo' | 'juntos';

export type PoseGatinha = 'quieta' | 'encolhida' | 'virada' | 'escondida' | 'piscando';

export type PoseLabrador = 'animado' | 'sentado' | 'esforco' | 'girando' | 'deitado';

export type Carinho = 'patinha' | 'focinho' | 'rabinho' | 'coracao';

export type Opcao = {
  label: string;
  correta: boolean;
  reacao?: PoseGatinha;
  poseLabrador: PoseLabrador;
  resposta: string;
};

export type Rodada = {
  sinal: PoseGatinha;
  legenda: string;
  opcoes: Opcao[];
  carinho: Carinho;
};

export type Stats = {
  inicio: number;
  erros: number;
};

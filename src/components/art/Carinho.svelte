<script lang="ts">
  import type { Carinho } from '../../lib/tipos';

  type Props = {
    tipo: Carinho;
    ativo?: boolean;
  };

  let { tipo, ativo = true }: Props = $props();

  const rotulos = {
    patinha: { sim: 'patinha conquistada', nao: 'patinha ainda não conquistada' },
    focinho: { sim: 'focinho conquistado', nao: 'focinho ainda não conquistado' },
    rabinho: { sim: 'rabinho conquistado', nao: 'rabinho ainda não conquistado' },
    coracao: { sim: 'coração conquistado', nao: 'coração ainda não conquistado' },
  } satisfies Record<Carinho, { sim: string; nao: string }>;

  const rotulo = $derived(ativo ? rotulos[tipo].sim : rotulos[tipo].nao);
</script>

<svg viewBox="0 0 48 48" width="100%" height="100%" role="img" aria-label={rotulo}>
  <g class={['miolo', { pop: ativo, vazio: !ativo }]}>
    {#if tipo === 'patinha'}
      <circle class="laranja" cx="12" cy="16" r="5" />
      <circle class="laranja" cx="20" cy="11" r="5" />
      <circle class="laranja" cx="28" cy="11" r="5" />
      <circle class="laranja" cx="36" cy="16" r="5" />
      <ellipse class="laranja" cx="24" cy="31" rx="12" ry="9" />
    {:else if tipo === 'focinho'}
      <circle class="focinho-fundo" cx="24" cy="24" r="18" />
      <ellipse class="focinho-nariz" cx="24" cy="21" rx="6" ry="4.5" />
      <path
        class="focinho-boca"
        d="M24 25.5 V28.5 M24 28.5 Q21 31.5 18 28.5 M24 28.5 Q27 31.5 30 28.5"
      />
      <circle class="focinho-ponto" cx="15" cy="25" r="1.4" />
      <circle class="focinho-ponto" cx="14" cy="29.5" r="1.4" />
      <circle class="focinho-ponto" cx="16.5" cy="33" r="1.4" />
      <circle class="focinho-ponto" cx="33" cy="25" r="1.4" />
      <circle class="focinho-ponto" cx="34" cy="29.5" r="1.4" />
      <circle class="focinho-ponto" cx="31.5" cy="33" r="1.4" />
    {:else if tipo === 'rabinho'}
      <g class={{ abanar: ativo }}>
        <path class="rabo-contorno" d="M10 38 C18 36 22 27 29 22 S37 11 35 8" />
        <path class="rabo-cor" d="M10 38 C18 36 22 27 29 22 S37 11 35 8" />
        <path class="rabo-movimento" d="M40 13 L44 11 M40.5 18 L44.5 18" />
      </g>
    {:else if tipo === 'coracao'}
      <path
        class="rosa"
        d="M24 38 C16 32 8 26 8 18 C8 12 13 8 18 11 C21 13 24 17 24 17 C24 17 27 13 30 11 C35 8 40 12 40 18 C40 26 32 32 24 38 Z"
      />
    {/if}
  </g>
</svg>

<style>
  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    fill: none;
    stroke: var(--tinta);
    stroke-width: var(--traco);
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .laranja {
    fill: var(--laranja);
  }

  .rosa {
    fill: var(--rosa);
  }

  .focinho-fundo {
    fill: var(--amarelo);
    stroke: var(--tinta);
    stroke-width: var(--traco);
  }

  .focinho-nariz,
  .focinho-ponto {
    fill: var(--tinta);
    stroke: none;
  }

  .focinho-boca {
    fill: none;
    stroke: var(--tinta);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .rabo-contorno,
  .rabo-cor,
  .rabo-movimento {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .rabo-contorno {
    stroke: var(--tinta);
    stroke-width: 11;
  }

  .rabo-cor {
    stroke: var(--caramelo);
    stroke-width: 6;
  }

  .rabo-movimento {
    stroke: var(--tinta);
    stroke-width: 2.5;
  }

  .vazio .laranja,
  .vazio .rosa,
  .vazio .focinho-fundo {
    fill: var(--fundo-2);
    stroke: var(--cinza-gato);
    stroke-dasharray: 3 2.2;
  }

  .vazio .focinho-nariz,
  .vazio .focinho-ponto {
    fill: var(--cinza-gato);
    stroke: none;
  }

  .vazio .focinho-boca,
  .vazio .rabo-movimento {
    fill: none;
    stroke: var(--cinza-gato);
    stroke-width: 2.5;
    stroke-dasharray: none;
  }

  .vazio .rabo-contorno {
    stroke: var(--cinza-gato);
    stroke-width: 11;
    stroke-dasharray: none;
  }

  .vazio .rabo-cor {
    stroke: var(--fundo-2);
    stroke-width: 6;
    stroke-dasharray: none;
  }

  .pop {
    transform-box: fill-box;
    transform-origin: center;
    animation: pop 450ms var(--ease-macio) both;
  }

  .abanar {
    transform-box: view-box;
    transform-origin: calc(10 / 48 * 100%) calc(38 / 48 * 100%);
    animation: abanar 0.7s ease-in-out infinite;
  }

  @keyframes pop {
    0% {
      transform: scale(0.4);
    }
    58% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes abanar {
    0%,
    100% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(12deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pop,
    .abanar {
      animation: none;
    }
  }
</style>

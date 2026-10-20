<script lang="ts">
  import type { Carinho } from '../../lib/tipos';

  type Props = {
    tipo: Carinho;
    ativo?: boolean;
  };

  let { tipo, ativo = true }: Props = $props();

  const rotulos = {
    patinha: { sim: 'patinha conquistada', nao: 'patinha ainda não' },
    focinho: { sim: 'focinho conquistado', nao: 'focinho ainda não' },
    rabinho: { sim: 'rabinho conquistado', nao: 'rabinho ainda não' },
    coracao: { sim: 'coração conquistado', nao: 'coração ainda não' },
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
      <circle class="amarelo" cx="24" cy="24" r="16" />
      <ellipse class="tinta" cx="24" cy="21" rx="7" ry="5" />
      <path class="linha" d="M24 25 Q24 32 17 30" />
      <path class="linha" d="M24 25 Q24 32 31 30" />
      <path class="linha" d="M8 18 L16 21" />
      <path class="linha" d="M8 26 L16 24" />
      <path class="linha" d="M32 21 L40 18" />
      <path class="linha" d="M32 24 L40 26" />
    {:else if tipo === 'rabinho'}
      <g class={{ abanar: ativo }}>
        <path
          class="caramelo"
          d="M14 34 C12 16 24 6 36 14 C44 20 40 32 28 28 C20 25 18 34 16 36 Z"
        />
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

  .amarelo {
    fill: var(--amarelo);
  }

  .tinta {
    fill: var(--tinta);
  }

  .caramelo {
    fill: var(--caramelo);
  }

  .rosa {
    fill: var(--rosa);
  }

  .linha {
    fill: none;
  }

  .vazio .laranja,
  .vazio .amarelo,
  .vazio .tinta,
  .vazio .caramelo,
  .vazio .rosa,
  .vazio .linha {
    fill: var(--fundo-2);
    stroke: var(--cinza-gato);
    stroke-dasharray: 3 2.2;
  }

  .pop {
    transform-box: fill-box;
    transform-origin: center;
    animation: pop 450ms var(--ease-macio) both;
  }

  .abanar {
    transform-box: fill-box;
    transform-origin: 18% 92%;
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

<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { PoseLabrador } from '../../lib/tipos';

  type Props = {
    pose: PoseLabrador;
  };

  let { pose }: Props = $props();

  const rotulos: Record<PoseLabrador, string> = {
    animado: 'Labrador animado, pulando com a língua para fora',
    sentado: 'Labrador sentado, comportado',
    esforco: 'Labrador sentado, se segurando com esforço',
    girando: 'Labrador girando atrás do próprio rabo',
    deitado: 'Labrador deitado, descansando feliz',
  };

  const rotulo = $derived(rotulos[pose]);
</script>

<svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label={rotulo}>
  {#if pose === 'animado'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <g class="pula">
      <g class="rabo-rapido">
        <path
          class="corpo"
          d="M156 108 C174 96 182 72 170 58 C162 50 150 60 154 72 C160 86 156 100 148 110 Z"
        />
      </g>
      <rect class="corpo" x="132" y="148" width="16" height="38" rx="8" />
      <rect class="corpo" x="150" y="142" width="18" height="44" rx="9" />
      <ellipse class="corpo" cx="122" cy="122" rx="46" ry="32" />
      <ellipse class="escuro" cx="132" cy="110" rx="11" ry="7" />
      <g class="orelha">
        <path
          class="escuro"
          d="M70 62 C88 50 104 72 96 98 C90 114 76 108 72 90 C68 74 64 66 70 62 Z"
        />
      </g>
      <rect class="corpo" x="82" y="146" width="16" height="40" rx="8" />
      <ellipse class="corpo" cx="92" cy="118" rx="24" ry="28" />
      <ellipse class="claro" cx="118" cy="136" rx="26" ry="14" />
      <rect class="corpo" x="98" y="140" width="18" height="46" rx="9" />
      <circle class="corpo" cx="62" cy="96" r="34" />
      <g class="orelha orelha-frente">
        <path
          class="escuro"
          d="M44 68 C28 72 18 98 28 118 C34 130 50 120 52 102 C54 82 52 70 44 68 Z"
        />
      </g>
      <ellipse class="claro" cx="36" cy="108" rx="18" ry="13" />
      <circle class="branco" cx="46" cy="86" r="9" />
      <circle class="branco" cx="66" cy="82" r="8.5" />
      <circle class="tinta" cx="42" cy="87" r="5" />
      <circle class="tinta" cx="62" cy="83" r="4.6" />
      <ellipse class="tinta" cx="22" cy="104" rx="8" ry="6" />
      <ellipse class="tinta" cx="32" cy="118" rx="8" ry="5" />
      <ellipse class="rosa" cx="32" cy="126" rx="6" ry="9" />
      </g>
    </g>
  {:else if pose === 'sentado'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <g class="rabo-sentado">
        <path
          class="corpo"
          d="M150 158 C170 152 178 166 166 176 C158 182 146 170 150 162 Z"
        />
      </g>
      <g class="respira-sentado">
      <ellipse class="corpo" cx="118" cy="150" rx="40" ry="36" />
      <ellipse class="corpo" cx="148" cy="174" rx="13" ry="10" />
      <path
        class="escuro"
        d="M66 50 C84 40 98 60 90 84 C84 98 70 92 66 76 C62 62 60 54 66 50 Z"
      />
      <ellipse class="corpo" cx="84" cy="114" rx="28" ry="34" />
      <rect class="corpo" x="68" y="138" width="16" height="48" rx="8" />
      <rect class="corpo" x="86" y="140" width="15" height="46" rx="8" />
      <ellipse class="claro" cx="90" cy="126" rx="16" ry="18" />
      <circle class="corpo" cx="60" cy="76" r="34" />
      <path
        class="escuro"
        d="M40 56 C24 60 14 84 24 104 C30 114 44 106 46 90 C48 72 46 58 40 56 Z"
      />
      <ellipse class="claro" cx="36" cy="88" rx="16" ry="12" />
      <circle class="branco" cx="46" cy="66" r="8" />
      <circle class="branco" cx="64" cy="62" r="7.5" />
      <circle class="tinta" cx="43" cy="67" r="4.2" />
      <circle class="tinta" cx="61" cy="63" r="4" />
      <ellipse class="tinta" cx="22" cy="84" rx="7" ry="5.5" />
      <path class="linha" d="M30 96 Q38 104 48 96" />
      <circle class="rosa" cx="42" cy="92" r="5" />
      </g>
    </g>
  {:else if pose === 'esforco'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <g class="treme">
      <g class="rabo-micro">
        <path
          class="corpo"
          d="M150 158 C170 152 178 166 166 176 C158 182 146 170 150 162 Z"
        />
      </g>
      <ellipse class="corpo" cx="118" cy="150" rx="40" ry="36" />
      <ellipse class="corpo" cx="148" cy="174" rx="13" ry="10" />
      <path
        class="escuro"
        d="M66 50 C84 40 98 60 90 84 C84 98 70 92 66 76 C62 62 60 54 66 50 Z"
      />
      <ellipse class="corpo" cx="84" cy="114" rx="28" ry="34" />
      <rect class="corpo" x="68" y="138" width="16" height="48" rx="8" />
      <rect class="corpo" x="86" y="140" width="15" height="46" rx="8" />
      <ellipse class="claro" cx="90" cy="126" rx="16" ry="18" />
      <circle class="corpo" cx="60" cy="76" r="34" />
      <path
        class="escuro"
        d="M40 56 C24 60 14 84 24 104 C30 114 44 106 46 90 C48 72 46 58 40 56 Z"
      />
      <ellipse class="claro" cx="34" cy="90" rx="18" ry="13" />
      <circle class="rosa" cx="32" cy="94" r="8" />
      <circle class="rosa" cx="50" cy="88" r="8" />
      <path class="linha" d="M42 60 L32 68 L42 76" />
      <path class="linha" d="M56 56 L66 64 L56 72" />
      <ellipse class="tinta" cx="20" cy="84" rx="7" ry="5.5" />
      <path class="linha" d="M28 100 L44 98" />
      <path
        class="suor"
        d="M48 26 C48 26 42 38 42 42 A6 6 0 1 0 54 42 C54 38 48 26 48 26 Z"
      />
      </g>
    </g>
  {:else if pose === 'girando'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <g class="apoio">
        <g class="gira">
          <path
            class="corpo"
            d="M156 108 C174 96 182 72 170 58 C162 50 150 60 154 72 C160 86 156 100 148 110 Z"
          />
          <rect class="corpo" x="132" y="148" width="16" height="38" rx="8" />
          <rect class="corpo" x="150" y="142" width="18" height="44" rx="9" />
          <ellipse class="corpo" cx="122" cy="122" rx="46" ry="32" />
          <ellipse class="escuro" cx="132" cy="110" rx="11" ry="7" />
          <path
            class="escuro"
            d="M70 62 C88 50 104 72 96 98 C90 114 76 108 72 90 C68 74 64 66 70 62 Z"
          />
          <rect class="corpo" x="82" y="146" width="16" height="40" rx="8" />
          <ellipse class="corpo" cx="92" cy="118" rx="24" ry="28" />
          <ellipse class="claro" cx="118" cy="136" rx="26" ry="14" />
          <rect class="corpo" x="98" y="140" width="18" height="46" rx="9" />
          <circle class="corpo" cx="62" cy="96" r="34" />
          <path
            class="escuro"
            d="M44 68 C28 72 18 98 28 118 C34 130 50 120 52 102 C54 82 52 70 44 68 Z"
          />
          <ellipse class="claro" cx="36" cy="108" rx="18" ry="13" />
          <circle class="branco" cx="46" cy="86" r="9" />
          <circle class="branco" cx="66" cy="82" r="8.5" />
          <circle class="tinta" cx="42" cy="87" r="5" />
          <circle class="tinta" cx="62" cy="83" r="4.6" />
          <ellipse class="tinta" cx="22" cy="104" rx="8" ry="6" />
          <ellipse class="tinta" cx="32" cy="118" rx="8" ry="5" />
          <ellipse class="rosa" cx="32" cy="126" rx="6" ry="9" />
        </g>
      </g>
    </g>
  {:else if pose === 'deitado'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <g class="rabo-lento">
        <path
          class="corpo"
          d="M162 148 C180 138 184 118 170 112 C162 108 156 120 164 126 C172 132 170 144 156 150 Z"
        />
      </g>
      <g class="respira-deitado">
      <ellipse class="corpo" cx="150" cy="162" rx="22" ry="20" />
      <ellipse class="corpo" cx="112" cy="158" rx="48" ry="28" />
      <ellipse class="escuro" cx="124" cy="146" rx="14" ry="8" />
      <ellipse class="corpo" cx="44" cy="174" rx="14" ry="12" />
      <ellipse class="corpo" cx="62" cy="176" rx="13" ry="10" />
      <path class="escuro" d="M52 128 C36 124 28 144 40 156 C48 150 56 136 54 130 Z" />
      <circle class="corpo" cx="54" cy="150" r="26" />
      <ellipse class="claro" cx="34" cy="158" rx="14" ry="10" />
      <ellipse class="tinta" cx="22" cy="156" rx="6" ry="5" />
      <path class="linha" d="M40 140 Q50 130 60 140" />
      <path class="linha" d="M58 138 Q68 128 78 138" />
      <path class="linha" d="M26 166 Q34 172 42 166" />
      <circle class="rosa" cx="44" cy="156" r="5" />
      </g>
    </g>
  {/if}
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

  .corpo {
    fill: var(--caramelo);
  }

  .escuro {
    fill: var(--caramelo-escuro);
  }

  .claro {
    fill: var(--amarelo);
  }

  .branco {
    fill: var(--branco);
  }

  .rosa {
    fill: var(--rosa);
  }

  .tinta {
    fill: var(--tinta);
  }

  .suor {
    fill: var(--verde-agua);
  }

  .linha {
    fill: none;
  }

  .pula {
    transform-box: fill-box;
    transform-origin: 50% 100%;
    animation: pular 0.55s ease-in-out infinite;
  }

  .respira-sentado,
  .respira-deitado {
    transform-box: fill-box;
    transform-origin: 50% 100%;
  }

  .respira-sentado {
    animation: respirar-sentado 2.8s ease-in-out infinite;
  }

  .respira-deitado {
    animation: respirar-deitado 3.6s ease-in-out infinite;
  }

  .rabo-sentado {
    transform-box: fill-box;
    transform-origin: left center;
    animation: abanar-sentado 1.4s ease-in-out infinite;
  }

  .rabo-rapido {
    transform-box: fill-box;
    transform-origin: left bottom;
    animation: abanar 0.24s ease-in-out infinite;
  }

  .orelha {
    transform-box: fill-box;
    transform-origin: center top;
    animation: balancar-orelha 0.55s ease-in-out infinite;
  }

  .orelha-frente {
    animation-duration: 0.62s;
    animation-delay: -0.2s;
  }

  .treme {
    animation: tremer 0.12s linear infinite;
  }

  .rabo-micro {
    transform-box: fill-box;
    transform-origin: left center;
    animation: micro 0.32s ease-in-out infinite;
  }

  .apoio {
    transform-box: view-box;
    transform: translateY(-5.7%);
  }

  .gira {
    transform-box: view-box;
    transform-origin: 54% 58%;
    transform: scale(0.85);
    animation: girar 0.9s linear infinite;
  }

  .rabo-lento {
    transform-box: fill-box;
    transform-origin: left bottom;
    animation: lento 1.8s ease-in-out infinite;
  }

  @keyframes pular {
    0%,
    100% {
      transform: translateY(0) scale(1.06, 0.94);
    }
    30% {
      transform: translateY(-3.5%) scale(0.96, 1.05);
    }
    50% {
      transform: translateY(-6%) scale(1, 1);
    }
    75% {
      transform: translateY(-2%) scale(0.98, 1.03);
    }
  }

  @keyframes respirar-sentado {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.025);
    }
  }

  @keyframes respirar-deitado {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.03);
    }
  }

  @keyframes abanar-sentado {
    0%,
    100% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(8deg);
    }
  }

  @keyframes abanar {
    0%,
    100% {
      transform: rotate(-18deg);
    }
    50% {
      transform: rotate(22deg);
    }
  }

  @keyframes balancar-orelha {
    0%,
    100% {
      transform: rotate(-7deg);
    }
    50% {
      transform: rotate(9deg);
    }
  }

  @keyframes tremer {
    0%,
    100% {
      transform: translateX(-1px);
    }
    50% {
      transform: translateX(1px);
    }
  }

  @keyframes micro {
    0%,
    100% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(5deg);
    }
  }

  @keyframes girar {
    from {
      transform: rotate(0deg) scale(0.85);
    }
    to {
      transform: rotate(360deg) scale(0.85);
    }
  }

  @keyframes lento {
    0%,
    100% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(10deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pula,
    .respira-sentado,
    .respira-deitado,
    .rabo-sentado,
    .rabo-rapido,
    .orelha,
    .treme,
    .rabo-micro,
    .gira,
    .rabo-lento {
      animation: none;
    }
  }
</style>

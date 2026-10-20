<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { PoseGatinha } from '../../lib/tipos';

  type Props = {
    pose: PoseGatinha;
  };

  let { pose }: Props = $props();

  const rotulos: Record<PoseGatinha, string> = {
    quieta: 'Gatinha quieta, sentada em pãozinho',
    encolhida: 'Gatinha encolhida em bolinha',
    virada: 'Gatinha virada de costas, focinho empinado',
    escondida: 'Gatinha escondida atrás do sofá',
    piscando: 'Gatinha piscando devagar',
  };

  const rotulo = $derived(rotulos[pose]);
</script>

<svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label={rotulo}>
  {#if pose === 'quieta'}
    <g class="respira" aria-hidden="true" transition:fade={{ duration: 250 }}>
      <path class="corpo" d="M58 152 C48 160 50 174 64 174 C72 174 68 162 58 158 Z" />
      <ellipse class="corpo" cx="94" cy="160" rx="44" ry="26" />
      <ellipse class="branco" cx="98" cy="170" rx="20" ry="11" />
      <circle class="corpo" cx="124" cy="130" r="28" />
      <path class="corpo" d="M106 118 C100 90 116 76 124 110 C118 120 110 122 106 118 Z" />
      <path class="corpo" d="M124 110 C130 76 152 82 146 118 C138 124 128 118 124 110 Z" />
      <path class="rosa" d="M110 114 C106 96 118 86 122 110 Z" />
      <path class="rosa" d="M128 108 C132 88 144 92 140 114 Z" />
      <path class="fino" d="M116 106 L115 114" />
      <path class="fino" d="M124 104 L124 114" />
      <path class="fino" d="M132 106 L133 114" />
      <path class="linha" d="M108 128 Q116 120 124 128" />
      <path class="linha" d="M128 126 Q136 118 144 126" />
      <circle class="rosa" cx="110" cy="138" r="4" />
      <circle class="rosa" cx="138" cy="136" r="4.5" />
      <ellipse class="branco" cx="130" cy="140" rx="8" ry="6.5" />
      <path class="rosa" d="M126 137 L134 137 L130 143 Z" />
      <path class="linha" d="M124 146 Q127 150 130 146 Q133 150 136 146" />
      <path class="fino" d="M122 136 L108 132" />
      <path class="fino" d="M122 140 L106 141" />
      <path class="fino" d="M123 144 L110 148" />
      <path class="fino" d="M138 135 L150 131" />
      <path class="fino" d="M138 139 L152 140" />
      <path class="fino" d="M137 143 L150 147" />
      <ellipse class="corpo" cx="114" cy="176" rx="11" ry="8" />
      <ellipse class="corpo" cx="128" cy="174" rx="10" ry="7" />
      <path
        class="corpo"
        fill-rule="evenodd"
        d="M94 172 a14 14 0 1 1 28 0 a14 14 0 1 1 -28 0 z m8 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0"
      />
    </g>
  {:else if pose === 'encolhida'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <path class="corpo" d="M72 158 C54 154 52 176 68 182 C78 186 76 168 70 162 Z" />
      <circle class="corpo" cx="108" cy="152" r="34" />
      <path class="corpo" d="M86 124 C64 112 48 124 56 136 C66 130 78 128 88 132 Z" />
      <path class="corpo" d="M84 136 C60 134 46 150 56 160 C68 152 78 146 86 144 Z" />
      <path class="rosa" d="M78 126 C66 120 58 128 68 132 C74 128 78 128 80 128 Z" />
      <path class="rosa" d="M76 140 C64 140 56 150 66 152 C72 146 76 142 78 142 Z" />
      <path class="linha" d="M102 144 L90 152 L102 160" />
      <path class="linha" d="M114 144 L126 152 L114 160" />
      <circle class="rosa" cx="94" cy="158" r="4" />
      <circle class="rosa" cx="116" cy="156" r="4" />
      <path class="rosa" d="M112 164 L120 164 L116 170 Z" />
      <path class="linha" d="M110 172 Q113 175 116 172 Q119 175 122 172" />
    </g>
  {:else if pose === 'virada'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <path
        class="corpo"
        d="M128 150 C150 144 156 114 142 100 C134 92 122 102 130 114 C138 124 140 138 122 150 Z"
      />
      <ellipse class="corpo" cx="112" cy="158" rx="36" ry="28" />
      <circle class="corpo" cx="78" cy="132" r="28" />
      <path class="corpo" d="M60 118 C54 92 70 78 78 112 C72 120 64 122 60 118 Z" />
      <path class="corpo" d="M78 112 C84 80 104 86 98 118 C90 124 82 118 78 112 Z" />
      <path class="rosa" d="M64 114 C60 98 70 88 74 112 Z" />
      <path class="rosa" d="M82 110 C86 94 96 96 94 114 Z" />
      <path class="fino" d="M70 108 L69 116" />
      <path class="fino" d="M78 106 L78 116" />
      <path class="fino" d="M86 108 L87 116" />
      <path class="linha" d="M60 126 Q66 120 72 126" />
      <path class="linha" d="M76 124 Q82 118 88 124" />
      <circle class="rosa" cx="86" cy="136" r="4" />
      <ellipse class="branco" cx="66" cy="140" rx="8" ry="6.5" />
      <path class="rosa" d="M62 134 L70 134 L66 140 Z" />
      <path class="linha" d="M60 148 Q63 152 66 148 Q69 152 72 148" />
      <path class="fino" d="M58 136 L48 132" />
      <path class="fino" d="M58 140 L46 141" />
      <path class="fino" d="M60 144 L50 148" />
      <path class="fino" d="M74 136 L86 132" />
      <path class="fino" d="M74 140 L88 141" />
      <path class="fino" d="M72 144 L84 148" />
    </g>
  {:else if pose === 'escondida'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <path class="corpo" d="M84 112 C80 74 98 72 100 112 Z" />
      <path class="corpo" d="M104 112 C108 70 126 74 122 112 Z" />
      <path class="rosa" d="M88 108 C86 84 96 82 98 108 Z" />
      <path class="rosa" d="M106 108 C110 80 120 82 116 108 Z" />
      <path
        class="sofa"
        d="M40 186 L40 136 C40 104 66 90 100 90 C134 90 160 104 160 136 L160 186 Z"
      />
      <ellipse class="sofa" cx="44" cy="158" rx="20" ry="28" />
      <ellipse class="sofa" cx="156" cy="158" rx="20" ry="28" />
      <ellipse class="sofa" cx="100" cy="164" rx="46" ry="16" />
      <g class="rabo-sofa">
        <path
          class="corpo"
          d="M166 146 C186 138 190 114 174 106 C164 102 158 116 166 124 C176 132 172 144 158 148 Z"
        />
      </g>
    </g>
  {:else if pose === 'piscando'}
    <g aria-hidden="true" transition:fade={{ duration: 250 }}>
      <g class="respira">
        <path class="corpo" d="M58 152 C48 160 50 174 64 174 C72 174 68 162 58 158 Z" />
        <ellipse class="corpo" cx="94" cy="160" rx="44" ry="26" />
        <ellipse class="branco" cx="98" cy="170" rx="20" ry="11" />
        <circle class="corpo" cx="124" cy="130" r="28" />
        <path class="corpo" d="M106 118 C100 90 116 76 124 110 C118 120 110 122 106 118 Z" />
        <path class="corpo" d="M124 110 C130 76 152 82 146 118 C138 124 128 118 124 110 Z" />
        <path class="rosa" d="M110 114 C106 96 118 86 122 110 Z" />
        <path class="rosa" d="M128 108 C132 88 144 92 140 114 Z" />
        <path class="fino" d="M116 106 L115 114" />
        <path class="fino" d="M124 104 L124 114" />
        <path class="fino" d="M132 106 L133 114" />
        <g class="olho-pisca">
          <path class="linha" d="M108 128 Q116 120 124 128" />
        </g>
        <g class="olho-pisca">
          <path class="linha" d="M128 126 Q136 118 144 126" />
        </g>
        <circle class="rosa" cx="110" cy="138" r="6.5" />
        <circle class="rosa" cx="138" cy="136" r="7" />
        <ellipse class="branco" cx="130" cy="140" rx="8" ry="6.5" />
        <path class="rosa" d="M126 137 L134 137 L130 143 Z" />
        <path class="linha" d="M124 146 Q127 150 130 146 Q133 150 136 146" />
        <path class="fino" d="M122 136 L108 132" />
        <path class="fino" d="M122 140 L106 141" />
        <path class="fino" d="M123 144 L110 148" />
        <path class="fino" d="M138 135 L150 131" />
        <path class="fino" d="M138 139 L152 140" />
        <path class="fino" d="M137 143 L150 147" />
        <ellipse class="corpo" cx="114" cy="176" rx="11" ry="8" />
        <ellipse class="corpo" cx="128" cy="174" rx="10" ry="7" />
        <path
          class="corpo"
          fill-rule="evenodd"
          d="M94 172 a14 14 0 1 1 28 0 a14 14 0 1 1 -28 0 z m8 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0"
        />
      </g>
      <g class="coracao">
        <path
          class="rosa"
          d="M124 70 C124 70 114 60 114 54 C114 49 118 46 122 50 C123 51 124 54 124 54 C124 54 125 51 126 50 C130 46 134 49 134 54 C134 60 124 70 124 70 Z"
        />
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
    fill: var(--cinza-gato);
  }

  .branco {
    fill: var(--branco);
  }

  .rosa {
    fill: var(--rosa);
  }

  .sofa {
    fill: var(--sofa);
  }

  .linha {
    fill: none;
  }

  .fino {
    fill: none;
    stroke-width: calc(var(--traco) * 0.4);
  }

  .respira {
    transform-box: fill-box;
    transform-origin: center bottom;
    animation: respirar 3.8s ease-in-out infinite;
  }

  .olho-pisca {
    transform-box: fill-box;
    transform-origin: center;
    animation: piscar 3s ease-in-out infinite;
  }

  .coracao {
    transform-box: fill-box;
    transform-origin: center;
    animation: subir 3s ease-in-out infinite;
  }

  .rabo-sofa {
    transform-box: fill-box;
    transform-origin: left bottom;
    animation: balancar 2.6s ease-in-out infinite;
  }

  @keyframes respirar {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.02);
    }
  }

  @keyframes piscar {
    0%,
    73%,
    100% {
      transform: scaleY(1);
    }
    27%,
    47% {
      transform: scaleY(0.08);
    }
  }

  @keyframes subir {
    0% {
      transform: translateY(8%);
      opacity: 0;
    }
    16% {
      opacity: 1;
    }
    100% {
      transform: translateY(-150%);
      opacity: 0;
    }
  }

  @keyframes balancar {
    0%,
    100% {
      transform: rotate(-12deg);
    }
    50% {
      transform: rotate(14deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .respira,
    .olho-pisca,
    .coracao,
    .rabo-sofa {
      animation: none;
    }

    .coracao {
      opacity: 1;
      transform: none;
    }
  }
</style>

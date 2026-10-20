<script lang="ts">
  type Props = {
    vasoCaido?: boolean;
  };

  let { vasoCaido = false }: Props = $props();
</script>

<svg
  viewBox="0 0 400 300"
  preserveAspectRatio="xMidYMax slice"
  width="100%"
  height="100%"
  aria-hidden="true"
>
  <rect class="parede" x="0" y="0" width="400" height="230" />
  <rect class="piso" x="0" y="230" width="400" height="70" />
  <line class="rodape" x1="0" y1="230" x2="400" y2="230" />

  <circle class="janela" cx="70" cy="72" r="36" />
  <circle class="ceu" cx="70" cy="72" r="29" />
  <circle class="sol" cx="84" cy="58" r="7" />
  <line class="caixilho" x1="70" y1="43" x2="70" y2="101" />
  <line class="caixilho" x1="41" y1="72" x2="99" y2="72" />

  <ellipse class="tapete" cx="70" cy="268" rx="50" ry="16" />

  <path class="porta" d="M314 230 L314 150 Q314 108 348 108 Q382 108 382 150 L382 230 Z" />
  <circle class="macaneta" cx="330" cy="174" r="5" />

  <g class={['vaso', { tombado: vasoCaido }]}>
    <ellipse class="folha" cx="236" cy="172" rx="14" ry="8" />
    <ellipse class="folha" cx="264" cy="168" rx="15" ry="9" />
    <ellipse class="folha" cx="250" cy="180" rx="11" ry="7" />
    <rect class="folha" x="247" y="176" width="6" height="22" rx="3" />
    <path
      class="vaso-corpo"
      d="M230 198 C226 198 224 208 228 218 C230 224 234 228 240 228 L260 228 C266 228 270 224 272 218 C276 208 274 198 270 198 Z"
    />
    <ellipse class="vaso-corpo" cx="250" cy="198" rx="22" ry="7" />
  </g>

  <g class={['terra', { visivel: vasoCaido }]}>
    <ellipse class="barro" cx="220" cy="224" rx="9" ry="4" />
    <ellipse class="barro" cx="208" cy="228" rx="6" ry="3" />
    <ellipse class="barro" cx="230" cy="227" rx="5" ry="2.5" />
    <ellipse class="barro" cx="216" cy="226" rx="4" ry="2" />
  </g>
</svg>

<style>
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: none;
    stroke: var(--tinta);
    stroke-width: calc(var(--traco) * 0.8);
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .parede {
    fill: var(--fundo);
    stroke: none;
  }

  .piso {
    fill: var(--fundo-2);
    stroke: none;
  }

  .rodape {
    stroke: var(--tinta);
    stroke-width: calc(var(--traco) * 0.5);
  }

  .janela {
    fill: var(--branco);
  }

  .ceu {
    fill: var(--verde-agua);
    opacity: 0.45;
    stroke: none;
  }

  .caixilho {
    fill: none;
    stroke-width: calc(var(--traco) * 0.5);
  }

  .sol {
    fill: var(--amarelo);
  }

  .tapete {
    fill: var(--verde-agua);
  }

  .porta {
    fill: var(--laranja);
  }

  .macaneta {
    fill: var(--amarelo);
  }

  .folha {
    fill: var(--verde-agua-forte);
  }

  .vaso-corpo {
    fill: var(--laranja-forte);
  }

  .barro {
    fill: var(--caramelo-escuro);
  }

  .vaso {
    transform-box: fill-box;
    transform-origin: center bottom;
    transition: transform 400ms ease;
  }

  .tombado {
    transform: rotate(-76deg);
  }

  .terra {
    opacity: 0;
    transition: opacity 400ms ease;
  }

  .visivel {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .vaso,
    .terra {
      transition: none;
    }
  }
</style>

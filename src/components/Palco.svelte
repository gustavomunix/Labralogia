<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { PoseGatinha, PoseLabrador } from '../lib/tipos';
  import Cenario from './art/Cenario.svelte';
  import Gatinha from './art/Gatinha.svelte';
  import Labrador from './art/Labrador.svelte';

  type Props = {
    gatinha: PoseGatinha;
    labrador: PoseLabrador;
    posGatinha?: number;
    posLabrador?: number;
    vasoCaido?: boolean;
    bolha?: number | null;
    compacto?: boolean;
    children?: Snippet;
  };

  let {
    gatinha,
    labrador,
    posGatinha = 18,
    posLabrador = 82,
    vasoCaido = false,
    bolha = null,
    compacto = false,
    children
  }: Props = $props();

  const raioBolha = $derived(bolha === null ? 0 : Math.max(0, bolha - posGatinha));
</script>

<div class="palco" class:compacto>
  <div class="cenario">
    <Cenario {vasoCaido} />
  </div>

  {#if bolha !== null}
    <div
      class="bolha"
      style:left="{posGatinha}%"
      style:width="{raioBolha * 2}%"
      aria-hidden="true"
    ></div>
  {/if}

  <div class="bicho" style:left="{posGatinha}%">
    <Gatinha pose={gatinha} />
  </div>

  <div class="bicho" style:left="{posLabrador}%">
    <Labrador pose={labrador} />
  </div>

  <div class="camada">
    {@render children?.()}
  </div>
</div>

<style>
  .palco {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: var(--raio);
    overflow: hidden;
    border: 3px solid var(--tinta);
    background: var(--fundo-2);
  }

  .palco.compacto {
    aspect-ratio: 16 / 10;
  }

  .cenario,
  .camada {
    position: absolute;
    inset: 0;
  }

  .camada {
    pointer-events: none;
  }

  .bolha {
    position: absolute;
    bottom: 4%;
    height: 70%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: var(--verde-agua);
    opacity: 0.35;
    border: 3px dashed var(--verde-agua-forte);
    transition: width 400ms var(--ease-macio);
  }

  .bicho {
    position: absolute;
    bottom: 2%;
    width: 40%;
    aspect-ratio: 1;
    transform: translateX(-50%);
    transition: left 600ms var(--ease-macio);
  }
</style>

<script lang="ts">
  import { untrack, type Snippet } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { PoseGatinha, Stats } from '../../lib/tipos';
  import Palco from '../Palco.svelte';

  type Props = { stats: Stats; onRestart: () => void; children?: Snippet };

  let { stats, onRestart, children }: Props = $props();

  const { segundos, erros } = untrack(() => ({
    segundos: Math.round((Date.now() - stats.inicio) / 1000),
    erros: stats.erros
  }));

  let poseGatinha = $state<PoseGatinha>('quieta');
  let piscou = $state(false);
  let cartaVisivel = $state(false);
  let repeticao = $state(0);
  let cartao = $state<HTMLElement>();

  $effect(() => {
    const timers = [
      setTimeout(() => {
        poseGatinha = 'piscando';
        piscou = true;
      }, 1500),
      setTimeout(() => {
        cartaVisivel = true;
      }, 4000)
    ];
    return () => timers.forEach(clearTimeout);
  });

  function lerDeNovo() {
    cartao?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    repeticao += 1;
  }
</script>

<section class="juntos">
  <Palco gatinha={poseGatinha} labrador="deitado" posGatinha={30} posLabrador={64} />

  <p class="texto" aria-live="polite">
    {#if piscou}
      Ela piscou devagar. Em gatês, isso quer dizer: eu confio em você.
    {:else}
      Lado a lado. Ninguém invadiu ninguém.
    {/if}
  </p>

  {#if cartaVisivel}
    <div class="area" bind:this={cartao} in:fade={{ duration: 900 }}>
      {#key repeticao}
        <article class="carta" in:fly={{ y: 16, duration: 900 }}>
          {@render children?.()}
        </article>
      {/key}

      <p class="resumo">
        {segundos}s juntos · ele se empolgou {erros}
        {erros === 1 ? 'vez' : 'vezes'}
      </p>

      <div class="acoes">
        <button type="button" class="secundario" onclick={lerDeNovo}>Ler de novo</button>
        <button type="button" class="secundario" onclick={onRestart}>Jogar de novo</button>
      </div>
    </div>
  {/if}
</section>

<style>
  .juntos {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-3);
  }

  .texto {
    margin: 0;
    min-height: 3.2em;
    text-align: center;
    font-size: 1.05rem;
  }

  .area {
    display: flex;
    flex-direction: column;
    gap: var(--espaco-2);
    scroll-margin-top: var(--espaco-2);
  }

  .carta {
    background: var(--branco);
    border: 3px solid var(--tinta);
    border-radius: var(--raio);
    padding: var(--espaco-3);
    font-family: var(--fonte-texto);
  }

  .carta :global(p) {
    margin: 0 0 var(--espaco-2);
    line-height: 1.7;
  }

  .carta :global(p:last-child) {
    margin-bottom: 0;
  }

  .resumo {
    margin: 0;
    text-align: center;
    font-size: 0.85rem;
    color: var(--tinta-suave);
  }

  .acoes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--espaco-1);
  }

  .secundario {
    min-height: 48px;
    padding: 0 var(--espaco-3);
    border-radius: var(--raio-pilula);
    background: var(--branco);
    color: var(--tinta);
    font-family: var(--fonte-titulo);
    font-size: 1rem;
    font-weight: 500;
    border: 3px solid var(--tinta);
    box-shadow: 0 4px 0 var(--tinta);
    cursor: pointer;
  }

  .secundario:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--tinta);
  }

  .secundario:focus-visible {
    outline: 3px solid var(--laranja-forte);
    outline-offset: 3px;
  }
</style>

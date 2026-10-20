<script lang="ts">
  import type { PoseLabrador } from '../../lib/tipos';
  import Palco from '../Palco.svelte';

  type Props = { onStart: () => void };

  let { onStart }: Props = $props();

  let poseLabrador = $state<PoseLabrador>('animado');
  let timer: ReturnType<typeof setTimeout> | undefined;

  function carinho() {
    clearTimeout(timer);
    poseLabrador = 'girando';
    timer = setTimeout(() => {
      poseLabrador = 'animado';
    }, 1200);
  }

  $effect(() => () => clearTimeout(timer));
</script>

<section class="chegada">
  <h1>Labralogia</h1>

  <Palco gatinha="quieta" labrador={poseLabrador} posGatinha={18} posLabrador={76}>
    <button
      type="button"
      class="alvo"
      aria-label="fazer carinho no labrador"
      onclick={carinho}
    ></button>
  </Palco>

  <p class="texto">Ela gosta de ficar quietinha. Ele gosta de chegar.</p>

  <button type="button" class="principal" onclick={onStart}>Vamos tentar?</button>
</section>

<style>
  .chegada {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espaco-3);
    text-align: center;
  }

  h1 {
    font-size: clamp(2.5rem, 12vw, 3.5rem);
  }

  .chegada :global(.palco) {
    text-align: left;
  }

  .alvo {
    position: absolute;
    left: 76%;
    bottom: 2%;
    width: 32%;
    height: 60%;
    transform: translateX(-50%);
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
    pointer-events: auto;
    border-radius: var(--raio);
  }

  .alvo:focus-visible,
  .principal:focus-visible {
    outline: 3px solid var(--laranja-forte);
    outline-offset: 3px;
  }

  .texto {
    margin: 0;
    max-width: 30ch;
    font-size: 1.125rem;
  }

  .principal {
    min-height: 56px;
    padding: 0 var(--espaco-4);
    border-radius: var(--raio-pilula);
    background: var(--laranja);
    color: var(--tinta);
    font-family: var(--fonte-titulo);
    font-size: 1.25rem;
    font-weight: 600;
    border: 3px solid var(--tinta);
    box-shadow: 0 4px 0 var(--tinta);
    cursor: pointer;
  }

  .principal:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--tinta);
  }
</style>

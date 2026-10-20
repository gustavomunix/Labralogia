<script lang="ts">
  import type { Carinho as TipoCarinho, Opcao, PoseGatinha, PoseLabrador, Rodada } from '../../lib/tipos';
  import Palco from '../Palco.svelte';
  import Carinho from '../art/Carinho.svelte';

  type Props = { rodadas: Rodada[]; onComplete: (erros: number) => void };

  let { rodadas, onComplete }: Props = $props();

  let indice = $state(0);
  let erros = $state(0);
  let conquistados = $state<TipoCarinho[]>([]);
  let escolha = $state<Opcao | null>(null);
  let reacao = $state<PoseGatinha | null>(null);
  let poseEscolhida = $state<PoseLabrador | null>(null);
  let posLabrador = $state(70);
  let vasoCaido = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  const rodada = $derived(rodadas[indice]);
  const poseGatinha = $derived(reacao ?? rodada.sinal);
  const poseLabrador = $derived(poseEscolhida ?? 'animado');
  const texto = $derived(escolha ? escolha.resposta : rodada.legenda);

  function acertar(opcao: Opcao) {
    conquistados = [...conquistados, rodada.carinho];
    posLabrador = opcao.poseLabrador === 'deitado' ? 54 : 52;
    timer = setTimeout(() => {
      if (indice === rodadas.length - 1) {
        onComplete(erros);
        return;
      }
      indice += 1;
      escolha = null;
      poseEscolhida = null;
      posLabrador = 70;
    }, 1800);
  }

  function errar(opcao: Opcao) {
    reacao = opcao.reacao ?? 'virada';
    erros += 1;
    vasoCaido = opcao.poseLabrador === 'girando';
    timer = setTimeout(() => {
      reacao = null;
      poseEscolhida = null;
      vasoCaido = false;
      escolha = null;
    }, 2000);
  }

  function escolher(opcao: Opcao) {
    if (escolha) return;
    escolha = opcao;
    poseEscolhida = opcao.poseLabrador;
    if (opcao.correta) acertar(opcao);
    else errar(opcao);
  }

  $effect(() => () => clearTimeout(timer));
</script>

<section class="ritmo">
  <header>
    <h2>O manual da gatinha</h2>
    <p class="subtitulo">Leia o sinal dela. Escolha o que ele faz.</p>
  </header>

  <Palco gatinha={poseGatinha} labrador={poseLabrador} {posLabrador} {vasoCaido} compacto />

  <div class="linha">
    <div class="bandeja" aria-label="carinhos conquistados">
      {#each rodadas as item, i (i)}
        <span class="slot">
          <Carinho tipo={item.carinho} ativo={conquistados.includes(item.carinho)} />
        </span>
      {/each}
    </div>

    <p class="indicador">rodada {indice + 1} de {rodadas.length}</p>
  </div>

  <p class="texto" aria-live="polite">{texto}</p>

  <div class="opcoes">
    {#each rodada.opcoes as opcao (opcao.label)}
      <button
        type="button"
        class="secundario"
        disabled={escolha !== null}
        onclick={() => escolher(opcao)}
      >
        {opcao.label}
      </button>
    {/each}
  </div>
</section>

<style>
  .ritmo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espaco-1);
    text-align: center;
  }

  h2 {
    font-size: clamp(1.4rem, 1.2rem + 1vw, 1.8rem);
  }

  .subtitulo {
    margin: 0;
    font-size: 0.95rem;
    color: var(--tinta-suave);
  }

  .linha {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--espaco-1);
  }

  .bandeja {
    display: flex;
    gap: var(--espaco-1);
  }

  .slot {
    display: block;
    width: 32px;
    height: 32px;
  }

  .indicador {
    margin: 0;
    font-size: 0.85rem;
    color: var(--tinta-suave);
  }

  .texto {
    margin: 0;
    min-height: 1.5em;
    font-size: 1.05rem;
  }

  .opcoes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--espaco-1);
  }

  .secundario {
    width: 100%;
    min-height: 48px;
    padding: 0.55rem var(--espaco-2);
    border-radius: var(--raio-pilula);
    background: var(--branco);
    color: var(--tinta);
    font-family: var(--fonte-titulo);
    font-size: 1.1rem;
    font-weight: 500;
    border: 3px solid var(--tinta);
    box-shadow: 0 4px 0 var(--tinta);
    cursor: pointer;
  }

  .secundario:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--tinta);
  }

  .secundario:disabled {
    opacity: 0.55;
    cursor: default;
  }

  .secundario:focus-visible {
    outline: 3px solid var(--laranja-forte);
    outline-offset: 3px;
  }
</style>

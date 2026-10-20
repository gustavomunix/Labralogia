<script lang="ts">
  import type { PoseGatinha, PoseLabrador } from '../../lib/tipos';
  import Palco from '../Palco.svelte';
  import Carinho from '../art/Carinho.svelte';

  type Props = { onComplete: (erros: number) => void };

  type Fase = 'andando' | 'esperando' | 'recolhida' | 'pronto';

  let { onComplete }: Props = $props();

  const mensagensEspera = [
    'Ele sentou. Com muito esforço.',
    'O rabo tremeu, mas o bumbum ficou no chão.',
    'Ele esperou. Nem ele acredita.'
  ];

  const mensagensInvasao = [
    'Perto demais. Ela se encolheu toda.',
    'Opa. Ela abaixou as orelhas.',
    'Ela virou uma bolinha de pelo.'
  ];

  const mensagemFinal = 'Ela deixou ele chegar mais um pouquinho.';

  let posicao = $state(0);
  let confianca = $state(0);
  let erros = $state(0);
  let fase = $state<Fase>('andando');
  let poseGatinha = $state<PoseGatinha>('quieta');
  let poseLabrador = $state<PoseLabrador>('animado');
  let mensagem = $state('');

  const posLabrador = $derived(84 - Math.min(posicao, 100) * 0.5);
  const bloqueado = $derived(fase !== 'andando');

  function sortear(lista: string[]) {
    return lista[Math.floor(Math.random() * lista.length)];
  }

  function invadir() {
    fase = 'recolhida';
    poseGatinha = 'encolhida';
    poseLabrador = 'sentado';
    erros += 1;
    confianca = Math.max(0, confianca - 10);
    mensagem = sortear(mensagensInvasao);
  }

  function terminar() {
    fase = 'pronto';
    poseGatinha = 'quieta';
    poseLabrador = 'sentado';
    posicao = 55;
    mensagem = mensagemFinal;
  }

  function esperar() {
    if (fase !== 'andando') return;
    fase = 'esperando';
    poseLabrador = 'esforco';
    confianca = Math.min(100, confianca + 20);
    mensagem = sortear(mensagensEspera);
  }

  $effect(() => {
    const atual = fase;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const depois = (acao: () => void, ms: number) => {
      timers.push(setTimeout(acao, ms));
    };

    if (atual === 'andando') {
      const pular = () => {
        depois(
          () => {
            posicao += 12 + Math.floor(Math.random() * 7);
            poseLabrador = 'animado';
            if (posicao >= 70) invadir();
            else pular();
          },
          1200 + Math.random() * 800
        );
      };
      pular();
    } else if (atual === 'esperando') {
      depois(() => {
        poseLabrador = 'sentado';
      }, 700);
      depois(() => {
        if (confianca >= 100) terminar();
        else fase = 'andando';
      }, 1500);
    } else if (atual === 'recolhida') {
      depois(() => {
        posicao = 30;
      }, 300);
      depois(() => {
        poseGatinha = 'quieta';
        fase = 'andando';
      }, 1200);
    }

    return () => timers.forEach(clearTimeout);
  });
</script>

<section class="espaco">
  <p class="dica">
    Ele vem aos pulinhos. Toque em "Ainda não" antes de ele entrar no espaço dela. Cada espera
    vira confiança.
  </p>

  <Palco
    gatinha={poseGatinha}
    labrador={poseLabrador}
    posGatinha={18}
    {posLabrador}
    bolha={49}
  />

  <div class="medidor">
    <span class="rotulo">confiança</span>
    <div
      class="patinhas"
      role="meter"
      aria-label="confiança dela"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={confianca}
    >
      {#each [0, 1, 2, 3, 4] as i (i)}
        <span class="patinha">
          <Carinho tipo="patinha" ativo={confianca >= (i + 1) * 20} />
        </span>
      {/each}
    </div>
  </div>

  <p class="mensagem" aria-live="polite">{mensagem}</p>

  {#if fase === 'pronto'}
    <button type="button" class="principal" onclick={() => onComplete(erros)}>Continuar</button>
  {:else}
    <button
      type="button"
      class={['principal', { apagado: bloqueado }]}
      aria-disabled={bloqueado}
      onclick={esperar}
    >
      Ainda não<span class="icone" aria-hidden="true"><Carinho tipo="patinha" /></span>
    </button>
  {/if}
</section>

<style>
  .espaco {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espaco-2);
    text-align: center;
  }

  .dica {
    margin: 0;
    font-size: 0.95rem;
    color: var(--tinta-suave);
  }

  .medidor {
    display: flex;
    align-items: center;
    gap: var(--espaco-2);
  }

  .rotulo {
    font-family: var(--fonte-titulo);
    font-size: 0.95rem;
    color: var(--tinta-suave);
  }

  .patinhas {
    display: flex;
    gap: 0.25rem;
  }

  .patinha {
    display: block;
    width: 36px;
    height: 36px;
  }

  .mensagem {
    margin: 0;
    min-height: 3em;
    font-size: 1.05rem;
  }

  .principal {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4em;
    width: 100%;
    min-height: 64px;
    border-radius: var(--raio-pilula);
    background: var(--laranja);
    color: var(--tinta);
    font-family: var(--fonte-titulo);
    font-size: 1.4rem;
    font-weight: 600;
    border: 3px solid var(--tinta);
    box-shadow: 0 4px 0 var(--tinta);
    cursor: pointer;
  }

  .principal:active:not(.apagado) {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--tinta);
  }

  .principal.apagado {
    opacity: 0.55;
    cursor: default;
  }

  .principal:focus-visible {
    outline: 3px solid var(--laranja-forte);
    outline-offset: 3px;
  }

  .icone {
    display: inline-flex;
    width: 1.6em;
    height: 1.6em;
  }
</style>

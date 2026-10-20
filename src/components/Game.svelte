<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';
  import type { Cena, Stats } from '../lib/tipos';
  import { rodadas } from '../data/rodadas';
  import Chegada from './scenes/Chegada.svelte';
  import Espaco from './scenes/Espaco.svelte';
  import Ritmo from './scenes/Ritmo.svelte';
  import Juntos from './scenes/Juntos.svelte';

  type Props = { children?: Snippet };

  let { children }: Props = $props();

  let cena = $state<Cena>('chegada');
  let stats = $state<Stats>({ inicio: Date.now(), erros: 0 });

  function comecar() {
    stats = { inicio: Date.now(), erros: 0 };
    cena = 'espaco';
  }

  function fimEspaco(erros: number) {
    stats.erros += erros;
    cena = 'ritmo';
  }

  function fimRitmo(erros: number) {
    stats.erros += erros;
    cena = 'juntos';
  }
</script>

<div class="jogo">
  {#key cena}
    <div class="cena" in:fly={{ y: 12, duration: 350 }}>
      {#if cena === 'chegada'}
        <Chegada onStart={comecar} />
      {:else if cena === 'espaco'}
        <Espaco onComplete={fimEspaco} />
      {:else if cena === 'ritmo'}
        <Ritmo {rodadas} onComplete={fimRitmo} />
      {:else}
        <Juntos {stats} onRestart={comecar} {children} />
      {/if}
    </div>
  {/key}
</div>

<style>
  .jogo {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: var(--espaco-3);
  }

  .cena {
    width: 100%;
  }
</style>

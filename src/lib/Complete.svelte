<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('continue');
  }
</script>

<article class="flex flex-col items-center mx-auto space-y-10">
  <img src="/images/icon-complete.svg" alt="Checkmark" width="80" height="80" />
  <h2 class="text-3xl font-medium tracking-widest uppercase">Thank you!</h2>
  <p class="!mt-4 text-dark-grayish-violet font-medium tracking-wide"
    >We've added your card details</p
  >
  <button
    class="w-full p-3 rounded-lg bg-very-dark-violet text-white hover:scale-105 transition-transform"
    type="button"
    on:click={onClick}
  >
    Continue
  </button>
</article>

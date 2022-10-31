<script lang="ts">
  import type { CardInformationDTO } from '../../types/card-information.dto';
  import CardBack from './CardBack.svelte';
  import CardFront from './CardFront.svelte';

  export let information: Partial<CardInformationDTO>;
</script>

<figure class="absolute top-8 md:top-0 inset-0 mx-4 md:mx-0">
  <div
    class="z-10 absolute top-24 md:top-1/2 left-0 w-72 md:w-96 md:-translate-x-[1vw] lg:translate-x-[14vw] md:-translate-y-[110%] md:transition-transform ease-linear"
  >
    <CardFront {information} />
  </div>
  <div
    class="absolute top-0 md:top-1/2 right-0 w-72 md:w-96 md:translate-x-[4vw] lg:translate-x-[14vw] md:translate-y-[10%] md:transition-transform ease-linear"
  >
    <CardBack {information} />
  </div>

  <figcaption class="sr-only">Card Information</figcaption>
</figure>

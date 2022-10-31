<script lang="ts">
  import type { CardInformationDTO } from '../../types/card-information.dto';

  export let information: Pick<Partial<CardInformationDTO>, 'cvc'>;
</script>

<article
  class="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
>
  <h2 class="sr-only">Card back</h2>
  <picture>
    <img
      class="w-full scale-[1.02]"
      src="/images/bg-card-back.png"
      alt="Card back background"
      width="447"
      height="245"
    />
  </picture>
  <p
    class="absolute top-[49%] right-8 md:right-12 -translate-y-1/2 text-2xs md:text-sm tracking-wider text-white font-medium"
  >
    <span class="sr-only">Card CVC</span>
    {!!information.cvc ? information.cvc.slice(0, 3) : '000'}
  </p>
</article>

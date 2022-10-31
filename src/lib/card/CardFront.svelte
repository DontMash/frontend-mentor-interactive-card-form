<script lang="ts">
  import type { CardInformationDTO } from '../../types/card-information.dto';

  export let information: Partial<
    Pick<Partial<CardInformationDTO>, 'holder' | 'number' | 'expire'>
  >;
</script>

<article
  class="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
>
  <h2 class="sr-only">Card front</h2>
  <picture>
    <img
      class="w-full scale-[1.02]"
      src="/images/bg-card-front.png"
      alt="Card front background"
      width="447"
      height="245"
    />
  </picture>
  <div
    class="absolute inset-0 flex flex-col justify-between w-full h-full px-6 py-5 text-white"
  >
    <img
      class="w-16 md:w-20"
      src="/images/card-logo.svg"
      alt="Card logo"
      width="84"
      height="47"
    />
    <div class="tracking-widest">
      <p class="text-lg md:text-2xl overflow-hidden whitespace-nowrap text-ellipsis">
        <span class="sr-only">Card number</span>
        {#each (!!information.number ? information.number : '0000 0000 0000 0000').split(' ') as part}
          <span class="mr-[0.5em]">{part}</span>
        {/each}
      </p>
      <div class="flex justify-between mt-3 md:mt-5 text-2xs md:text-xs uppercase">
        <p class="w-9/12 text-ellipsis overflow-hidden whitespace-nowrap">
          <span class="sr-only">Card holder</span>
          {!!information.holder ? information.holder : 'Jane Appleseed'}
        </p>
        <p class="w-2/12 max-w-[5ch] text-right">
          <span class="sr-only">Card date</span>
          {!!information.expire.month
            ? information.expire.month.slice(0, 2)
            : '00'}/{!!information.expire.year
            ? information.expire.year.slice(0, 2)
            : '00'}
        </p>
      </div>
    </div>
  </div>
</article>

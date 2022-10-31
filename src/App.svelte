<script lang="ts">
  import { fade } from 'svelte/transition';
  import CardInformation from './lib/card/CardInformation.svelte';
  import Complete from './lib/Complete.svelte';
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import type { CardInformationDTO } from './types/card-information.dto';

  const card: Partial<CardInformationDTO> = { expire: { month: '', year: '' } };
  let done: boolean = false;

  let form: HTMLFormElement;
  const onFormSubmit = (event: Event) => {
    event.preventDefault();

    done = form.checkValidity();
  };

  const cardReset = () => {
    card.holder = '';
    card.number = '';
    card.expire = { month: '', year: '' };
    card.cvc = '';

    done = false;
  };
</script>

<div class="flex flex-col md:flex-row h-full">
  <Header>
    <CardInformation information={card} />
  </Header>

  <main class="md:m-auto">
    <section class="max-w-sm md:max-w-none md:w-96 px-6 md:px-10 py-8 mt-16 mx-auto">
      <h1 class="sr-only">Your credit card information</h1>
      {#if !done}
        <div in:fade={{ duration: 500, delay: 300 }}>
          <form
            class="group space-y-2"
            bind:this={form}
            on:submit={onFormSubmit}
          >
            <label class="space-y-1" for="holder">
              <span
                class="block text-xs text-very-dark-violet font-semibold tracking-widest uppercase"
              >
                Cardholder Name
              </span>
              <input
                class="peer block w-full px-3 py-2.5 border border-light-grayish-violet rounded-lg text-very-dark-violet leading-none font-medium placeholder:text-light-grayish-violet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-very-dark-violet empty-invalid:border-red"
                id="holder"
                name="holder"
                type="text"
                placeholder="e.g. Jane Appleseed"
                required
                pattern="^[a-z ]+$"
                bind:value={card.holder}
              />
              <small
                class="block invisible opacity-0 peer-empty-invalid:visible peer-empty-invalid:opacity-100 text-red text-xs transition-opacity"
              >
                Invalid format, no special characters or numbers
              </small>
            </label>
            <label class="space-y-1" for="number">
              <span
                class="block text-xs text-very-dark-violet font-semibold tracking-widest uppercase"
              >
                Card Number
              </span>
              <input
                class="peer block w-full px-3 py-2.5 border border-light-grayish-violet rounded-lg text-very-dark-violet leading-none font-medium placeholder:text-light-grayish-violet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-very-dark-violet empty-invalid:border-red"
                id="number"
                name="number"
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                required
                pattern={`^\\d{4} \\d{4} \\d{4} \\d{4}$`}
                bind:value={card.number}
              />
              <small
                class="block invisible opacity-0 peer-empty-invalid:visible peer-empty-invalid:opacity-100 text-red text-xs transition-opacity"
              >
                Invalid format, numbers only
              </small>
            </label>
            <div class="grid grid-cols-2 gap-3">
              <fieldset class="space-y-1">
                <span
                  class="block text-xs text-very-dark-violet font-semibold tracking-widest uppercase"
                >
                  Exp. Date (MM/YY)
                </span>
                <div class="grid grid-cols-2 gap-x-3 gap-y-1">
                  <label class="sr-only" for="exp-month">Month of expiration</label>
                  <input
                    class="peer block w-full px-3 py-2.5 border border-light-grayish-violet rounded-lg text-very-dark-violet leading-none font-medium placeholder:text-light-grayish-violet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-very-dark-violet empty-invalid:border-red"
                    id="exp-month"
                    name="exp-month"
                    type="text"
                    inputmode="numeric"
                    placeholder="MM"
                    required
                    pattern="0[1-9]|1[0-2]"
                    bind:value={card.expire.month}
                  />
                  <label class="sr-only" for="exp-year">Year of expiration</label>
                  <input
                    class="peer block w-full px-3 py-2.5 border border-light-grayish-violet rounded-lg text-very-dark-violet leading-none font-medium placeholder:text-light-grayish-violet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-very-dark-violet empty-invalid:border-red"
                    id="exp-year"
                    name="exp-year"
                    type="text"
                    inputmode="numeric"
                    placeholder="YY"
                    required
                    pattern={`\\d{2}`}
                    bind:value={card.expire.year}
                  />
                  <small
                    class="block col-span-2 invisible opacity-0 peer-empty-invalid:visible peer-empty-invalid:opacity-100 text-red text-xs transition-opacity"
                  >
                    Can't be blank
                  </small>
                </div>
              </fieldset>
              <label class="space-y-1" for="cvc">
                <span
                  class="block text-xs text-very-dark-violet font-semibold tracking-widest uppercase"
                >
                  CVC
                </span>
                <input
                  class="peer block w-full px-3 py-2.5 border border-light-grayish-violet rounded-lg text-very-dark-violet leading-none font-medium placeholder:text-light-grayish-violet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-very-dark-violet empty-invalid:border-red"
                  id="cvc"
                  name="cvc"
                  type="text"
                  inputmode="numeric"
                  placeholder="e.g. 123"
                  required
                  pattern={`\\d{3}`}
                  bind:value={card.cvc}
                />
                <small
                  class="block invisible opacity-0 peer-empty-invalid:visible peer-empty-invalid:opacity-100 text-red text-xs transition-opacity"
                >
                  Can't be blank
                </small>
              </label>
            </div>
            <button
              class="w-full p-3 !mt-6 rounded-lg bg-very-dark-violet text-white group-invalid:bg-dark-grayish-violet group-invalid:hover:scale-100 group-invalid:pointer-events-none hover:scale-105 transition-transform"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </div>
      {:else}
        <div in:fade={{ duration: 300, delay: 300 }}>
          <Complete on:continue={() => cardReset()} />
        </div>
      {/if}
    </section>

    <Footer />
  </main>
</div>

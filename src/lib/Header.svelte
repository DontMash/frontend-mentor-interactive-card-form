<header class="relative md:w-2/5 md:max-w-lg h-60 md:h-full">
  <picture class="block w-full h-full">
    <source srcset="/images/bg-main-desktop.png" media="(min-width: 768px)" />
    <source srcset="/images/bg-main-mobile.png" />
    <img
      class="w-full h-full object-cover"
      src="/images/bg-main-desktop.png"
      alt="Header background"
      width="375"
      height="240"
    />
  </picture>
  <slot />
</header>

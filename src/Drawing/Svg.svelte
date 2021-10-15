<script lang="ts">
  export let title: string;
  export let desc: string;
  export let width: string;
  export let height: string;
</script>

<svg
  {width}
  {height}
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>{title}</title>
  <desc>{desc}</desc>
  <slot />
</svg>

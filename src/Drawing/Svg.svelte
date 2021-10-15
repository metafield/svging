<script lang="ts">
  export let title: string;
  export let desc: string;
  export let width: string;
  export let height: string;
</script>

<svg {width} {height}>
  <title>{title}</title>
  <desc>{desc}</desc>
  <slot />
</svg>

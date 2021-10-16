<script lang="ts">
  import type { SVGProps } from '../types';
  export let props: SVGProps;
</script>

<svg
  width={props.width}
  height={props.height}
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>{props.title}</title>
  <desc>{props.desc}</desc>
  <slot />
</svg>

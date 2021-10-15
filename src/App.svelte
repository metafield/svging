<script lang="ts">
  import Circle from './Drawing/Circle.svelte';
  import Svg from './Drawing/Svg.svelte';
  import { circle } from './Drawing/utils';

  const catsHead = circle(70, 95, 20, 'stroke:black; fill: none');
</script>

<main>
  <Svg width="140" height="170" title="Cat" desc="A cat">
    <Circle attrs={catsHead} />
  </Svg>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

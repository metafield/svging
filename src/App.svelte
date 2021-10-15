<script lang="ts">
  import Svg from './Drawing/Svg.svelte';
  import Cat from './Prefabs/Cat.svelte';
</script>

<main>
  <Cat />

  <svg width="140" height="170" xmlns="http://www.w3.org/2000/svg">
    <title>Cat</title>
    <desc>Stick Figure of a Cat</desc>
    <circle cx="70" cy="95" r="50" style="stroke: black; fill: none;" />
    <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" />
    <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" />
    <g id="whiskers">
      <line x1="75" y1="95" x2="135" y2="85" style="stroke: black;" />
      <line x1="75" y1="95" x2="135" y2="105" style="stroke: black;" />
    </g>
  </svg>
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

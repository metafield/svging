<script lang="ts">
  import Svg from '../Drawing/Svg.svelte';
</script>

<Svg props={{ title: 'Cat', desc: 'A cat', style: 'background-color: #222;' }}>
  <g id="lines" style="stroke: white; fill: none;">
    <g id="whiskers">
      <line x1="75" y1="95" x2="135" y2="85" />
      <line x1="75" y1="95" x2="135" y2="105" />
    </g>
    <!-- head -->
    <circle cx="70" cy="95" r="50" style="#339933;" />
    <!-- eyes -->
    <circle cx="55" cy="80" r="5" style="#339933;" />
    <circle cx="85" cy="80" r="5" style="#339933;" />
    <!-- ears -->
    <polyline points="108 62, 90 10, 70 45, 50, 10, 32, 62" />
    <!-- mouth -->
    <polyline points="35 110, 45 120, 70, 115, 95 120, 105, 110" />
    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)" />
  </g>
</Svg>

<style>
</style>

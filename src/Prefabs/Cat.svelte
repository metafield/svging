<script lang="ts">
  import Circle from '../Drawing/Circle.svelte';
  import Line from '../Drawing/Line.svelte';
  import Svg from '../Drawing/Svg.svelte';
  import { circle, line } from '../Drawing/utils';

  const head = circle(70, 95, 50, 'stroke:black; fill: none');
  const leftEye = circle(55, 80, 5, 'stroke:black; fill: #339933');
  const rightEye = circle(85, 80, 5, 'stroke:black; fill: #339933');
  const leftWhisker = line(75, 95, 135, 85, 'stroke:black;');
  const rightWhisker = line(75, 95, 135, 105, 'stroke:black;');
</script>

<Svg props={{ title: 'Cat', desc: 'A cat' }}>
  <Circle props={head} />
  <Circle props={leftEye} />
  <Circle props={rightEye} />
  <g id="whiskers">
    <Line props={leftWhisker} />
    <Line props={rightWhisker} />
  </g>
  <!-- ears -->
  <polyline
    points="108 62, 90 10, 70 45, 50, 10, 32, 62"
    style="stroke: black; fill: none;"
  />
  <!-- mouth -->
  <polyline
    points="35 110, 45 120, 70, 115, 95 120, 105, 110"
    style="stroke: black; fill: none;"
  />
  <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)" />
</Svg>

<script lang="ts">
  import Circle from '../Drawing/Circle.svelte';
  import Group from '../Drawing/Group.svelte';
  import Line from '../Drawing/Line.svelte';
  import Svg from '../Drawing/Svg.svelte';
  import { circle, line } from '../Drawing/utils';

  const head = circle(70, 95, 50, 'stroke:black; fill: none');
  const leftEye = circle(55, 80, 5, 'stroke:black; fill: #339933');
  const rightEye = circle(85, 80, 5, 'stroke:black; fill: #339933');
  const leftWhisker = line(75, 95, 135, 85, 'stroke:black;');
  const rightWhisker = line(75, 95, 135, 105, 'stroke:black;');
</script>

<Svg width="140" height="170" title="Cat" desc="A cat">
  <Circle attrs={head} />
  <Circle attrs={leftEye} />
  <Circle attrs={rightEye} />
  <Group id="whiskers">
    <Line attrs={leftWhisker} />
    <Line attrs={rightWhisker} />
  </Group>
  <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)" />
</Svg>

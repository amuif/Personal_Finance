<script lang="ts">
  import { scaleBand } from "d3-scale";
  import { BarChart, type ChartContextValue } from "layerchart";
  import * as Chart from "$lib/components/ui/chart/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { cubicInOut } from "svelte/easing";

  let {
    chartConfig,
    chartData,
    title,
    description,
  }: {
    chartConfig: Chart.ChartConfig;
    chartData: { month: string; desktop: number }[];
    title: string;
    description?: string;
  } = $props();

  let context = $state<ChartContextValue>();
</script>

<Card.Root class="h-fullj">
  <Card.Header>
    <Card.Title>{title}</Card.Title>
  </Card.Header>
  <Card.Content>
    <Chart.Container config={chartConfig}>
      <BarChart
        bind:context
        data={chartData}
        xScale={scaleBand().padding(0.25)}
        x="month"
        axis="x"
        series={[
          {
            key: "desktop",
            label: "Desktop",
            color: chartConfig.desktop.color,
          },
        ]}
        props={{
          bars: {
            stroke: "none",
            rounded: "all",
            radius: 8,
            // use the height of the chart to animate the bars
            initialY: context?.height,
            initialHeight: 0,
            motion: {
              x: { type: "tween", duration: 500, easing: cubicInOut },
              width: { type: "tween", duration: 500, easing: cubicInOut },
              height: { type: "tween", duration: 500, easing: cubicInOut },
              y: { type: "tween", duration: 500, easing: cubicInOut },
            },
          },
          highlight: { area: { fill: "none" } },
          xAxis: { format: (d) => d.slice(0, 3) },
        }}
      >
        {#snippet tooltip()}
          <Chart.Tooltip hideLabel />
        {/snippet}
      </BarChart>
    </Chart.Container>
  </Card.Content>
</Card.Root>

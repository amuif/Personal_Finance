<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Chart from "$lib/components/ui/chart/index.js";
  import { scaleBand } from "d3-scale";
  import { BarChart, Highlight, type ChartContextValue } from "layerchart";
  import { cubicInOut } from "svelte/easing";

  let {
    chartConfig,
    chartData,
    title,
    description,
  }: {
    chartConfig: Chart.ChartConfig;
    chartData: { month: string; desktop: number; mobile: number }[];
    title: string;
    description?: string;
  } = $props();
  let context = $state<ChartContextValue>();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Header>
  <Card.Content>
    <Chart.Container config={chartConfig}>
      <BarChart
        bind:context
        data={chartData}
        xScale={scaleBand().padding(0.25)}
        x="month"
        axis="x"
        rule={false}
        series={[
          {
            key: "desktop",
            label: "Desktop",
            color: chartConfig.desktop.color,
            props: { rounded: "bottom" },
          },
          {
            key: "mobile",
            label: "Mobile",
            color: chartConfig.mobile.color,
          },
        ]}
        seriesLayout="stack"
        props={{
          bars: {
            stroke: "none",
            initialY: context?.height,
            initialHeight: 0,
            motion: {
              y: { type: "tween", duration: 500, easing: cubicInOut },
              height: { type: "tween", duration: 500, easing: cubicInOut },
            },
          },
          highlight: { area: false },
          xAxis: { format: (d) => d.slice(0, 3) },
        }}
        legend
      >
        {#snippet belowMarks()}
          <Highlight area={{ class: "fill-muted" }} />
        {/snippet}

        {#snippet tooltip()}
          <Chart.Tooltip />
        {/snippet}
      </BarChart>
    </Chart.Container>
  </Card.Content>
</Card.Root>

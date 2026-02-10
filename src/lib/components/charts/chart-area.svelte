<script lang="ts">
  import { AreaChart } from "layerchart";
  import { curveNatural } from "d3-shape";
  import { scaleUtc } from "d3-scale";
  import * as Chart from "$lib/components/ui/chart/index.js";
  import * as Card from "$lib/components/ui/card/index.js";

  let {
    chartData,
    title,
    description,
    chartConfig,
  }: {
    chartData: { date: Date; desktop: number }[] | undefined[];
    title: string;
    description?: string;
    chartConfig: Chart.ChartConfig;
  } = $props();
</script>

<Card.Root class='h-full'>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Header>
  <Card.Content>
    <Chart.Container config={chartConfig}>
      <AreaChart
        data={chartData}
        x="date"
        xScale={scaleUtc()}
        series={[
          {
            key: "desktop",
            label: "Desktop",
            color: chartConfig.desktop.color,
          },
        ]}
        axis="x"
        props={{
          area: {
            curve: curveNatural,
            "fill-opacity": 0.4,
            line: { class: "stroke-1" },
            motion: "tween",
          },
          xAxis: {
            format: (v: Date) =>
              v.toLocaleDateString("en-US", { month: "short" }),
          },
        }}
      >
        {#snippet tooltip()}
          <Chart.Tooltip
            labelFormatter={(v: Date) =>
              v.toLocaleDateString("en-US", { month: "long" })}
            indicator="line"
          />
        {/snippet}
      </AreaChart>
    </Chart.Container>
  </Card.Content>
</Card.Root>

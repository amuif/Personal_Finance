<script>
  import ChartArea from "@/components/charts/chart-area.svelte";
  import BarChartDefault from "@/components/charts/bar-chart-default.svelte";
</script>

<div class="flex flex-1 flex-col">
  <div class="@container/main flex flex-1 flex-col gap-2">
    <div class="flex sm:flex-row gap-4 py-4 md:gap-6 md:py-6 px-4">
      <div class="w-1/2">
        <ChartArea
          title="Income"
          chartData={[
            { date: new Date("2024-01-01"), desktop: 186 },
            { date: new Date("2024-02-01"), desktop: 305 },
            { date: new Date("2024-03-01"), desktop: 237 },
            { date: new Date("2024-04-01"), desktop: 73 },
            { date: new Date("2024-05-01"), desktop: 209 },
            { date: new Date("2024-06-01"), desktop: 214 },
          ]}
          chartConfig={{
            desktop: { label: "Desktop", color: "var(--primary)" },
          }}
        />
      </div>
      <div class=" w-1/2">
        <BarChartDefault
          chartData={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          chartConfig={{
            desktop: { label: "Desktop", color: "var(--primary)" },
          }}
          title="Expense strategy"
        />
      </div>
    </div>
    <div class="bg-muted/50 rounded-xl"></div>
  </div>
</div>

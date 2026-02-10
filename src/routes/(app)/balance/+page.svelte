<script lang="ts">
  import * as Card from "@/components/ui/card";

  const datas = [
    {
      id: 1,
      title: "Current balance",
      value: 5000,
    },
    {
      id: 2,
      title: "Current Income",
      value: 8000,
    },
    {
      id: 3,
      title: "Current expense",
      value: 3000,
    },
    {
      id: 4,
      title: "Savings",
      value: 5000,
    },
  ];
</script>

<main class="px-4">
  <section class="grid sm:grid-cols-4 gap-4">
    {#each datas as data (data.id)}
      <Card.Root
        ><Card.CardHeader class="capitalize text-lg font-bold"
          >{data.title}</Card.CardHeader
        >
        <Card.CardContent>{data.value.toLocaleString()} ETB</Card.CardContent>
      </Card.Root>
    {/each}
  </section>
</main>

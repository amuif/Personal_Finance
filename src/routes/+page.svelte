<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    goto("/login");
  });
</script>

<h1>Landing</h1>
<button>Sign in</button>

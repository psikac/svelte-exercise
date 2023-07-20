<script lang="ts">
  import { onMount } from "svelte";
  import Home from "./lib/routes/Home.svelte";
  import Settings from "./lib/routes/Settings.svelte";

  let page = "";

  function onRouteChange() {
    page = window.location.hash.slice(2);
  }

  onMount(onRouteChange);
</script>

<svelte:window on:hashchange={onRouteChange} />

<main>
  <div>
    <nav class="navbar bg-base-100">
      <a class="btn btn-ghost normal-case text-xl" href="#/">Home</a>
      <a class="btn btn-ghost normal-case text-xl" href="#/settings">Settings</a>
    </nav>

    {#if page === ""}
      <Home />
    {:else if page === "settings"}
      <Settings />
    {/if}
  </div>
</main>

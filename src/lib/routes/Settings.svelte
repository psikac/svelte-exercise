<script lang="ts">
  import { settings } from "../../state/settings";

  function toggleColourScheme() {
    $settings.colourScheme = $settings.colourScheme === "dark" ? "light" : "dark";
  }
</script>

<div class="w-full mx-6">
  <h1 class="text-center text-2xl font-bold">Settings</h1>

  <div class="card w-96 bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Colour scheme</h2>
      <div class="flex gap-3">
        <button class="btn btn-primary" on:click={toggleColourScheme}>Toggle Colour Scheme</button>
        <label class="font-semibold">
          <input
            class="radio-primary"
            type="radio"
            name="colorScheme"
            value="dark"
            bind:group={$settings.colourScheme}
          /> Dark
        </label>
        <label class="font-semibold">
          <input
            class="radio-primary"
            type="radio"
            name="colorScheme"
            value="light"
            bind:group={$settings.colourScheme}
          /> Light
        </label>
      </div>
    </div>
  </div>
</div>

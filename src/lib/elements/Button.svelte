<script context="module">
  let totalButtons = 0;

  export function getTotalButtonsNumber() {
    return totalButtons;
  }
</script>

<script>
  import { onDestroy } from "svelte";

  totalButtons += 1;

  onDestroy(() => {
    totalButtons -= 1;
  });
</script>

{totalButtons}
<button class="bg-orange-600 px-5 py-4 text-gray-100 font-semibold rounded-md">
  <slot>
    <p>Click me!</p>
  </slot>
</button>

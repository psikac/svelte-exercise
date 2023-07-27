<script lang="ts">
  import { createEventDispatcher, setContext } from "svelte";
  import { formKey } from "./form-key";
  import { writable } from "svelte/store";

  export let initalValues = {};
  const formStore = writable({
    values: initalValues,
    errors: {},
    showErrors: false,
  });

  setContext(formKey, formStore);

  const dispatcher = createEventDispatcher();

  function onSubmit() {
    if (Object.keys($formStore.errors).length === 0) {
      dispatcher("submit", $formStore.values);
    } else {
      $formStore.showErrors = true;
    }
  }
</script>

<pre> 
    {JSON.stringify($formStore, null, 2)}
</pre>

<form class="w-1/3" on:submit|preventDefault={onSubmit}>
  <slot
    hasErrors={Object.keys($formStore.errors).length > 0}
    values={$formStore.values}
    errors={$formStore.errors}
  />
</form>

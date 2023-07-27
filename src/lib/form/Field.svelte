<script lang="ts">
  import { v4 as uuid } from "uuid";
  import { formKey } from "./form-key";
  import type { Writable } from "svelte/store";
  import { onMount, getAllContexts, hasContext, getContext } from "svelte";

  export let label: string = undefined;
  export let name: string;
  export let type: string = "text";
  export let validate = undefined;
  export let isDirty: boolean = false;

  const id = uuid();

  const formStore: Writable<{
    values: {};
    errors: {};
    showErrors: boolean;
  }> = getContext(formKey);

  onMount(() => {
    if (validate && validate($formStore.values[name])) {
      $formStore.errors[name] = validate($formStore.values[name], label);
    }
  });
</script>

<div class="form-control">
  {#if label}
    <label class="label" for={id}>{label}</label>
  {/if}
  <input
    class="input input-primary"
    {id}
    {name}
    {type}
    placeholder={label}
    value={$formStore.values[name] || ""}
    on:input={(e) => {
      isDirty = true;
      const value = e.currentTarget.value;
      if (validate && validate(value)) {
        $formStore.errors[name] = validate(value, label);
      } else {
        delete $formStore.errors[name];
      }
      $formStore.values[name] = value;
    }}
  />
  {#if $formStore.errors[name] && (isDirty || $formStore.showErrors)}
    <slot name="error" error={$formStore.errors[name]}>
      <p class="label text-red-600">{$formStore.errors[name]}</p>
    </slot>
  {/if}
</div>

<script lang="ts">
  import Konva from "konva";
  import { layerKey } from "./context-keys";
  import Layer from "./Layer.svelte";
  import { createEventDispatcher, getContext, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const layer: Layer = getContext(layerKey);

  export const rect = new Konva.Rect($$props);

  layer.add(rect);

  rect.on("click mousedown", (e) => {
    dispatch(e.type, e);
  });

  $: rect.setAttrs($$props);

  onDestroy(() => {
    rect.destroy();
  });
</script>

<script lang="ts">
  import Konva from "konva";
  import { createEventDispatcher, getContext, onDestroy, setContext } from "svelte";
  import { layerKey, stageKey } from "./context-keys";

  //   export let draggable: boolean = false;

  const { getStage }: { getStage } = getContext(stageKey);
  const layer = new Konva.Layer({
    $$props,
  });
  const stage = getStage();
  const dispatch = createEventDispatcher();

  layer.on("dragmove click mousedown", (e) => {
    dispatch(e.type, e);
  });

  $: layer.setAttrs($$props);

  setContext(layerKey, layer);

  stage.add(layer);

  onDestroy(() => {
    if (layer) {
      layer.destroy();
    }
  });
</script>

<slot />

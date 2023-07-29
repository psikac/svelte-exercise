<script lang="ts">
  import { Stage, Layer, Rect } from "../konva";
  let showCanvas = true;
  let x = 20;
  let width = 300;

  let rect1, rect2;
</script>

<!-- <div bind:this={container} /> -->
<label>
  Show canvas
  <input type="checkbox" bind:checked={showCanvas} />
</label>
<input type="range" bind:value={x} min={0} max={300} />
<input type="range" bind:value={width} min={0} max={1000} />

<button
  class="btn btn-primary"
  on:click={() => {
    console.log(rect1.rect.getAttrs());
  }}>Get Rect Info</button
>

<Stage {width} height={400}>
  {#if showCanvas}
    <Layer
      draggable
      on:dragmove={(e) => {
        console.log(e.detail);
      }}
      on:click={() => console.log("click")}
    >
      <Rect bind:this={rect1} x={20} y={20} fill="purple" width={100} height={100} />
      <Rect {x} y={90} fill="blue" width={200} height={100} />
    </Layer>
    <Layer {x}>
      <Rect
        Rect
        bind:this={rect2}
        x={50}
        y={20}
        fill="red"
        width={100}
        height={100}
        stroke="white"
        strokeWidth="4"
        on:click={() => console.log("red clicked")}
        on:mousedown={() => console.log("red down")}
      />
    </Layer>
  {/if}
</Stage>

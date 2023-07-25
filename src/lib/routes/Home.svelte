<script>
  import { boxProps } from "../../state/scale";
</script>

<h2>Home</h2>

<button
  class="btn btn-primary"
  on:click={async () => {
    await boxProps.set(
      {
        width: Math.random() * 500,
        height: Math.random() * 500,
      },
      {
        soft: 2,
      }
    );
    console.log("done");
  }}>Generate random size!</button
>

<div style="width: {$boxProps.width}px; height: {$boxProps.height}px; background-color:  purple;" />

<!-- <div>
  <p>{$settings.colourScheme}</p>
</div> -->

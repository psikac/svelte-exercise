<script lang="ts" context="module">
  let allVideos: Set<HTMLVideoElement> = new Set();

  export function playAll() {
    allVideos.forEach((v) => {
      v.play();
    });
  }

  export function pauseAll() {
    allVideos.forEach((v) => {
      v.pause();
    });
  }
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  let paused = true;
  let video: HTMLVideoElement;

  export let src = undefined;

  onMount(() => {
    allVideos.add(video);
  });

  onDestroy(() => {
    allVideos.delete(video);
  });
</script>

<!-- <video
  bind:this={video}
  class={!paused ? "border-4 border-cyan-500" : ""}
  {src}
  controls
  muted
  bind:paused
  on:play={() => {
    allVideos.forEach((v) => {
      if (v !== video) {
        v.pause();
      }
    });
  }}
/> -->
<video
  bind:this={video}
  class={!paused ? "border-4 border-cyan-500" : ""}
  {src}
  controls
  muted
  bind:paused
/>

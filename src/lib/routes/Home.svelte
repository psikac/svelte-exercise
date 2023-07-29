<script>
  import VideoPlayer, { pauseAll, playAll } from "../elements/VideoPlayer.svelte";
</script>

<div class="flex gap-4">
  <button
    class="btn btn-secondary"
    on:click={() => {
      playAll();
    }}>Play all</button
  >
  <button
    class="btn btn-secondary"
    on:click={() => {
      pauseAll();
    }}>Pause all</button
  >
</div>

<VideoPlayer src={"src/assets/SampleVideo_360x240_1mb.mp4"} />
<VideoPlayer src={"src/assets/SampleVideo_360x240_1mb.mp4"} />
<VideoPlayer src={"src/assets/SampleVideo_360x240_1mb.mp4"} />

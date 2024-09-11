<script>
  import { onMount } from "svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/waf-group-01.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
  };

  onMount(() => {
    playVideo("loading-mobile");
    playVideo("loading-desktop");
  });
</script>

<div
  class="hidden sm:flex flex-col items-center justify-center w-full overflow-hidden pb-32"
>
  <video class="w-[50rem]" id="loading-desktop" muted autoplay loop playsinline>
    <source src="" type="video/webm" />
  </video>
  <div
    class="-mt-20 text-gray-600 h-font font-semibold tracking-widest animate-pulse text-sm text-center uppercase"
  >
    veuillez patienter...
  </div>
</div>

<div
  class="sm:hidden flex flex-col items-center justify-center w-full overflow-hidden pb-32"
>
  <video
    class="w-[100vh] scale-150"
    id="loading-mobile"
    muted
    autoplay
    loop
    playsinline
  >
    <source src="" type="video/webm" />
  </video>
  <div
    class="text-gray-600 h-font font-semibold tracking-widest animate-pulse text-sm text-center uppercase"
  >
    veuillez patienter...
  </div>
</div>

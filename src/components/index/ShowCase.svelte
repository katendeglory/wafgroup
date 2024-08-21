<script>
  import { onMount } from "svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/trailer-02.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
  };

  onMount(() => {
    playVideo("showcase-vid");
  });
</script>

<div id="showcase" />

<div class="pb-16 hidden" />

<div class="h-[75vh] relative">
  <div class="media-overlay z-10 absolute top-0 left-0 right-0 bottom-0">
    <div class="absolute top-0 left-0 w-full right-0">
      <div class="pt-10 max-w-[76rem] mx-auto px-4 lg:px-2 flex justify-end">
        <img src="/images/logo.png" class="h-10 object-cover" alt="home" />
      </div>
    </div>
  </div>

  <div class="video-container">
    <video id="showcase-vid" muted autoplay loop playsinline>
      <source type="video/mp4" />
    </video>
  </div>

  <div class="text-white h-full bg-black/10 relative z-20">
    <div class="h-full flex flex-col justify-between">
      <div class="h-full" />
      <!--  -->
      <!--  -->
      <div class="bottom-part">
        <div class="max-w-[76rem] mx-auto px-4 lg:px-2 mb-8">
          <div class="w-full flex flex-col md:flex-row md:justify-between">
            <div
              class="tracking-wider font-extralight text-white glassmorph-thin px-4 py-4 sm:px-6 sm:py-6 rounded-md border border-white/10 text-base lg:text-lg md:text-center"
            >
              Nous sommes impatients de vous aider à atteindre vos objectifs
              financiers et à assurer la prospérité de votre entreprise.
              <div class="mb-2 sm:hidden" />
              N'hésitez pas à nous contacter pour discuter de vos besoins et de la
              manière dont nous pouvons vous assister.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 sm:py-5" />

<style>
  /* TODO, Fallback background here */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color)
      url("./https://traversymedia.com/downloads/cover.jpg") no-repeat center
      center/cover;
  }

  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  .video-container:after {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    position: absolute;
  }

  .bottom-part {
    /* box-shadow: none; */
  }

  .media-overlay {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
</style>

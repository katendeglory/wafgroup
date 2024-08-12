<script>
  import { onMount } from "svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/01.mp4";
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

<div class="h-screen relative">
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
              class="k-font tracking-wider font-extralight uppercase text-white glassmorph-thin px-2 py-2 sm:px-4 sm:py-4 rounded-md border border-white/10 text-xl lg:text-2xl md:mr-8"
            >
              WAF Group est à votre disposition pour emmener à la vie vos rêves
              de Groupation et rendre vos événements inoubliables.
            </div>
            <div class="w-full md:w-[7.5rem] flex flex-col justify-between">
              <span
                class="hidden md:inline text-base md:mb-3 lg:mb-2 k-font font-thin uppercase tracking-widest"
              >
                L'équipe
              </span>
              <a
                href="/#team"
                class="btn btn-primary mt-4 md:mt-0 !py-2 !px-2 !w-full !h-full !shadow-none"
              >
                <span
                  class="material-symbols-outlined text-4xl hidden md:inline"
                >
                  enable
                </span>
                <span class="material-symbols-outlined text-3xl md:hidden">
                  enable
                </span>
                <span class="md:hidden ml-2 capitalize">
                  Voir Notre équipe
                </span>
              </a>
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

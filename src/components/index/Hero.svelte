<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { onMount } from "svelte";
  import Container from "../utils/Container.svelte";

  // let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/trailer-01.mp4" /* Put a source here... */;
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
    console.log(vid);
  };

  onMount(() => {
    playVideo("hero");
  });
</script>

<section class="showcase" id="home">
  <div class="video-container">
    <video id="hero" muted autoplay loop playsinline>
      <source type="video/mp4" />
    </video>
  </div>

  <div class="content text-gray-300">
    <Container>
      <div class="relative flex flex-col md:flex-row">
        <!--  -->
        <!--  -->
        <div class="relative z-10 h-screen w-full lg:w-3/5 flex items-center">
          <div
            class="w-[3rem] flex flex-col justify-center space-y-2 md:space-y-3"
          >
            <a href="https://instagram.com/waf.group" about="_blank">
              <img src="/images/icons/icon-fb.png" class="w-8" alt="" />
            </a>
            <a href="https://instagram.com/waf.group" about="_blank">
              <img src="/images/icons/icon-ig.png" class="w-8" alt="" />
            </a>
            <a href="https://wa.me/+1438354-2509" about="_blank">
              <img src="/images/icons/icon-w.png" class="w-8" alt="" />
            </a>
            <a href="https://x.com/waf.group" about="_blank">
              <img src="/images/icons/icon-x.png" class="w-8" alt="" />
            </a>
            <a href="https://linkedin.com/waf.group" about="_blank">
              <img src="/images/icons/icon-in.png" class="w-8" alt="" />
            </a>
          </div>
          <!--  -->
          <div class="relative z-10 h-full w-full flex flex-col justify-center">
            <div class="text-xs sm:text-sm flex items-center pl-1 mb-2">
              <div class="h-[1px] w-[2rem] bg-brand-green mr-2" />
              Experts en Solutions Financières
            </div>

            <h1
              class="mt-6 mb-6 sm:mt-0 sm:mb-2 text-center sm:text-left text-brand-green text-[8rem] sm:text-6xl md:text-[6rem] lg:text-[9rem] leading-[4rem] h-font font-bold"
            >
              WAF
            </h1>

            <p class="mb-5">
              Bienvenue sur le site officiel de <span
                class="h-font font-semibold"
              >
                WAF
              </span> (World Accounting & Finance). Bénéficiez d'une expertise financière
              sur mesure pour optimiser toutes vos activités.
            </p>

            <div
              class="flex flex-col md:flex-row justify-center md:justify-start md:items-center"
            >
              <a href="/#about" class="btn btn-primary !w-[90%] sm:!w-min">
                A propos de nous
                <span class="material-symbols-outlined text-3xl ml-2">
                  help
                </span>
              </a>
              <a
                href="/#contact"
                about="_blank"
                class="btn btn-dimmed ml-0 md:ml-4 mt-2 md:mt-0 !w-[90%] sm:!w-min h-[3.2rem] !font-normal"
              >
                Nous Contacter
                <span class="material-symbols-outlined text-3xl ml-2">
                  trending_flat
                </span>
              </a>
            </div>
          </div>
        </div>
        <!--  -->
        <!--  -->

        <div
          class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 hidden md:flex items-center justify-center relative z-10"
        >
          <!-- <LottiePlayer
            src="/images/hero-5.json"
            autoplay={true}
            loop={true}
            controls={false}
            renderer="svg"
            background="transparent"
            width={500}
          /> -->

          <!-- <img src="/images/logo-green-black.png" class="w-56" alt="fav" /> -->
        </div>
      </div>
    </Container>
  </div>
</section>

<style>
  .showcase {
    height: 100vh;
    position: relative;
  }

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

  .content {
    box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-image: linear-gradient(
      to right top,
      #00000020,
      #00000020,
      #00000020,
      #00000020,
      #00000020
    );
  }
</style>

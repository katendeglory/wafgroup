<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { onMount } from "svelte";
  import Container from "../utils/Container.svelte";

  // let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/04.mp4" /* Put a source here... */;
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
          <div class="w-[3rem] flex flex-col justify-center text-brand-yellow">
            <a href="https://wa.me/+243993040340" about="_blank">
              <ion-icon name="logo-whatsapp" class="text-xl md:text-2xl mb-5" />
            </a>
            <a href="https://instagram.com/nourane_decor" about="_blank">
              <ion-icon name="logo-facebook" class="text-xl md:text-2xl mb-5" />
            </a>
            <a href="https://instagram.com/nourane_decor" about="_blank">
              <ion-icon
                name="logo-instagram"
                class="text-xl md:text-2xl mb-5"
              />
            </a>
            <a href="mailto:benitha@nourane.net" about="_blank">
              <ion-icon name="mail" class="text-xl md:text-2xl mb-0" />
            </a>
          </div>
          <!--  -->
          <div class="relative z-10 h-full w-full flex flex-col justify-center">
            <div class="flex items-center pl-1">
              <div class="h-[1px] w-[2rem] bg-brand-yellow mr-2" />
              Achetez vos rêves chez nous
            </div>

            <h1
              class="mb-5 h-font font-bold text-[2.75rem] leading-[3.75rem] sm:text-6xl md:text-6xl lg:text-8xl"
            >
              <span
                class="text-brand-yellow flex items-center text-[3.75rem] md:text-[4.5rem] lg:text-[7rem]"
              >
                Nourane
              </span>
              <div class="lg:!-mt-4">
                <span> Décor</span>
              </div>
            </h1>

            <p class="mb-5">
              <span class="h-font font-semibold"> WAF Group™ </span>
              est une entreprise qui œuvre dans la décoration des évènements ainsi
              que la déco d'interieur.
            </p>

            <div
              class="flex flex-col md:flex-row justify-center md:justify-start md:items-center"
            >
              <a href="/#about" class="btn btn-primary !w-[90%] sm:!w-min">
                A Propos
                <span class="material-symbols-outlined text-3xl ml-2">
                  trending_flat
                </span>
              </a>
              <a
                href="https://wa.me/+243993040340"
                about="_blank"
                class="btn btn-dimmed ml-0 md:ml-4 mt-2 md:mt-0 !w-[90%] sm:!w-min h-[3.2rem]"
              >
                Nous Contacter
                <ion-icon name="logo-whatsapp" class="text-2xl ml-2" />
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
            src="/images/hero.json"
            autoplay={true}
            loop={true}
            controls={false}
            renderer="svg"
            background="transparent"
            width={500}
          /> -->
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

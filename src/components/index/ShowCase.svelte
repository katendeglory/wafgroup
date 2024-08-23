<script>
  import Container from "./../utils/Container.svelte";
  import { onMount } from "svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/trailer-05.mp4";
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

<div class="h-[150vh] md:h-[100vh] relative">
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
    <Container>
      <div class="h-full flex flex-col justify-center pt-10 pb-4">
        <div class="">
          <!--  -->
          <div class="text-2xl md:text-3xl font-thin">Nos Engagements:</div>
          <!--  -->

          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <!--  -->
            <div class="glassmorph-1 px-4 py-4 rounded-md">
              <div
                class="font-extralight flex uppercase text-xl md:text-xl items-center align-middle"
              >
                <ion-icon
                  name="checkmark-circle"
                  class="text-2xl text-brand-green mr-2"
                />
                Transparence
              </div>
              <div class="mt-3 text-sm text-gray-300">
                Nous vous garantissons une transparence totale en fournissant
                des informations claires sur les services, les frais et les
                processus, tout en tenant les clients informés à chaque étape.
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="glassmorph-1 px-4 py-4 rounded-md">
              <div
                class="font-extralight flex uppercase text-xl md:text-xl items-center align-middle"
              >
                <ion-icon
                  name="checkmark-circle"
                  class="text-2xl text-brand-green mr-2"
                />
                Confidentialité
              </div>
              <div class="mt-3 text-sm text-gray-300">
                La confidentialité des clients est primordiale, avec des normes
                de sécurité élevées pour protéger toutes les données financières
                et personnelles.
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="glassmorph-1 px-4 py-4 rounded-md">
              <div
                class="font-extralight flex uppercase text-xl md:text-xl items-center align-middle"
              >
                <ion-icon
                  name="checkmark-circle"
                  class="text-2xl text-brand-green mr-2"
                />
                Excellence
              </div>
              <div class="mt-3 text-sm text-gray-300">
                Nous nous engageons l'excellence en se perfectionnant sans
                cesse, offrant ainsi des solutions toujours innovantes et à la
                pointe de l'efficacité.
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="glassmorph-1 px-4 py-4 rounded-md">
              <div
                class="font-extralight flex uppercase text-xl md:text-xl items-center align-middle"
              >
                <ion-icon
                  name="checkmark-circle"
                  class="text-2xl text-brand-green mr-2"
                />
                Retour d'Expérience
              </div>
              <div class="mt-3 text-sm text-gray-300">
                Les retours des clients sont essentiels pour améliorer les
                services, et WAF Group accueille volontiers et encourage vos
                suggestions et observations.
              </div>
            </div>
            <!--  -->
          </div>
          <!--  -->
        </div>
        <div
          class="mt-14 rounded-md md:text-center max-w-[50rem] text-sm mx-auto"
        >
          <!--  -->
        </div>
      </div>
    </Container>
  </div>
</div>

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

  .media-overlay {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
</style>

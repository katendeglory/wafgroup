<script>
  import Container from "./../utils/Container.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div class="bg-[#2b2b2b] min-h-screen">
  <div
    class="min-h-screen py-16"
    style="background-image: url(/images/mesh-2.svg); background-size: cover; background-position: left;"
  >
    <Container>
      <div class="h-font text-white text-4xl md:text-6xl font-bold">
        Une team d'experts,
        <div class="mt-4 text-brand-green">A votre disposition...</div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="text-gray-300">
          WAF™ met à votre disposition une équipe d'experts qui couvre
          l'ensemble de vos besoins digitaux de la conception à la réalisation.
          <div class="pt-4 flex items-center">
            Voici notre procedé en quelques étapes :
            <span
              class="material-symbols-outlined ml-2 text-4xl text-brand-green"
            >
              trending_flat
            </span>
          </div>
        </div>
      </div>

      <div class="mt-10 text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-brand-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              webhook
            </span>
            Consultation
          </div>
          <div class="">
            Elle consiste à une étude approfondie des besoins numériques de
            votre entreprise dans le but de préparer une suite de solutions
            digitales.
          </div>
        </div>
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-brand-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              emoji_objects
            </span>
            Conception
          </div>
          <div class="">
            Élaboration sur "papier" des diverses approches pour la résolution
            des problèmes numériques identifiés durant la phase initiale de
            consultation.
          </div>
        </div>
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-brand-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              devices
            </span>
            Implementation
          </div>
          <div class="">
            Durant cette phase, les solutions conçues sur "papier" vont pendre
            vie. Un produit tangible sera développé, testé puis lancé dans votre
            entreprise.
          </div>
        </div>
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-brand-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              engineering
            </span>
            Maintenance
          </div>
          <div class="">
            Maintenance de la solution implémentée pour s'assurer son bon
            fonctionnement continuel & mises à jour régulières selons les
            standards les plus récents de l'industrie.
          </div>
        </div>
      </div>
    </Container>
  </div>
</div>

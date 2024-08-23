<script>
  import Container from "./../utils/Container.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div id="about" />
<div class="text-gray-900 min-h-screen relative">
  <div class="min-h-screen py-16">
    <Container>
      <div class="text-4xl md:text-6xl">
        <div
          class="text-sm sm:text-base flex items-center pl-1 mb-2 text-brand-green"
        >
          <div class="h-[1px] w-[2rem] bg-brand-green mr-2" />
          Qui Nous Sommes
        </div>
        À Propos de Nous
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          Chez WAF Group, notre mission est de fournir des solutions financières
          complètes et personnalisées qui répondent aux besoins uniques de
          chaque client. Nous nous engageons à offrir des services de la plus
          haute qualité, basés sur une expertise approfondie et une
          compréhension des défis financiers modernes. Notre objectif est de
          vous aider à atteindre vos objectifs financiers en vous libérant des
          tracas comptables et fiscaux.
          <div class="my-4" />

          Notre équipe est constituée de professionnels expérimentés en
          comptabilité, fiscalité et gestion financière. Avec une combinaison de
          compétences techniques et d'une approche orientée client, nous
          assurons un service de conseil et de gestion qui va au-delà des
          attentes. Chaque membre de notre équipe est dédié à fournir des
          solutions efficaces et adaptées à votre situation spécifique.

          <!-- <div class="my-4" />
          <a
            href="/#galerie"
            class="btn btn-secondary !w-[90%]-sm:!w-min !shadow-none"
          >
            Voir notre Galerie
            <span class="material-symbols-outlined text-3xl ml-2">
              trending_flat
            </span>
          </a> -->
        </div>
        <div
          class="flex items-center justify-center px-2 md:px-4 mx-auto max-w-[25rem] min-h-[60vh] md:min-h-min"
        >
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>
    </Container>
  </div>
</div>

<script>
  import Container from "./../utils/Container.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div id="about" />
<div class="text-gray-800 min-h-screen relative">
  <div class="min-h-screen py-16">
    <Container>
      <div class="h-font text-4xl md:text-6xl font-bold">
        <div class="mb-2 text-brand-green text-3xl md:text-5xl">
          A propos...
        </div>
        WAF Group
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          WAF Group est une entreprise qui œuvre dans la Groupation des
          évènements ainsi que la déco d'interieur.
          <div class="my-4" />

          Nous sommes une entreprise de design d'intérieur axée sur le client,
          proposant des solutions de design originales et raffinées pour des
          projets résidentiels et commerciaux de toutes tailles.
          <div class="my-4" />

          Une attention méticuleuse aux détails et une compréhension approfondie
          de la façon dont les gens vivent sont au cœur de tous nos projets.
          <div class="my-4" />

          Nous collaborons avec des artisans et des spécialistes pour créer des
          intérieurs élégants et qui travaillent dur. Une bonne communication
          avec nos clients et fournisseurs est à la base de tout notre travail.
          <div class="my-4" />

          <div class="my-4" />
          <a
            href="/#galerie"
            class="btn btn-secondary !w-[90%]-sm:!w-min !shadow-none"
          >
            Voir notre Galerie
            <span class="material-symbols-outlined text-3xl ml-2">
              trending_flat
            </span>
          </a>
        </div>
        <div
          class="flex items-center justify-center px-2 md:px-4 mx-auto max-w-[30rem] min-h-[65vh] md:min-h-min"
        >
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>
    </Container>
  </div>
</div>

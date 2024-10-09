<script>
  import WhyCard from "../shared/WhyCard.svelte";
  import Container from "../utils/Container.svelte";

  let people = [
    {
      t1: "Grande",
      t2: "Expertise",
      icon: "workspace_premium",
      desc: `Notre équipe est composée de professionnels expérimentés avec une connaissance approfondie en comptabilité, fiscalité et gestion financière.`,
    },
    {
      t1: "Service",
      t2: "Personnalisé",
      icon: "architecture",
      desc: `Nous adaptons nos services pour répondre à vos besoins uniques, assurant ainsi un soutien efficace et pertinent.`,
    },
    {
      t1: "Solutions",
      t2: "Complètes",
      icon: "finance",
      desc: `De la configuration logicielle à la consultation fiscale, nous fournissons un ensemble complet de services financiers sous un même toit.`,
    },
  ];
</script>

<div id="why-us" />

<div class="bg-pattern">
  <div class="min-h-screen w-screen pt-12 pb-8">
    <!--  -->
    <Container>
      <div class="h-font text-2xl md:text-3xl lg:text-4xl">
        <span class="">Pourquoi choisir </span>
        <span class="text-brand-green/80">WAF ?</span>
      </div>

      <div class="mt-4">
        Vous en avez assez de naviguer seul dans vos finances ? Vous n'êtes pas
        satisfait de vos gestionnaires actuels ? Avec WAF, faites l'expérience
        d'un véritable partenaire financier à vos côtés. Simplifiez votre
        quotidien grâce à nos solutions sur mesure et atteignez vos objectifs
        plus rapidement. Découvrez la différence dès aujourd'hui !
      </div>
    </Container>

    <div class="mt-6 relative">
      <Container>
        <div class="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {#each people as person}
            <WhyCard {...person} />
          {/each}
        </div>
      </Container>
    </div>
  </div>
</div>

<style>
  .bg-pattern {
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 2rem;
  }
</style>

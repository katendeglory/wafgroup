<script>
  import About1 from "./../components/index/About1.svelte";
  import About2 from "./../components/index/About2.svelte";
  import ShowCase from "./../components/index/ShowCase.svelte";
  import Hero from "../components/index/Hero.svelte";
  import Contact1 from "../components/index/Contact1.svelte";
  import Contact2 from "../components/index/Contact2.svelte";
  import config from "../stores/config";
  import Services from "../components/index/Services.svelte";
  import Team from "../components/index/Team.svelte";
</script>

<svelte:head>
  <title>WAF Group — Acceuil</title>
</svelte:head>

<Hero />
<About1 />
<Services />
<ShowCase />
<Team />

<!-- <About2 /> -->

<Contact2 />
<Contact1 />

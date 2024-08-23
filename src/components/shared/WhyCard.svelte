<script>
  export let t1 = "Jane";
  export let t2 = "DOE";
  export let icon = "award_star";
  export let desc = "C.E.O.";
</script>

<div class="bg-white rounded-md border-t-8 border-gray-400/20">
  <!-- Photo -->
  <div class="flex items-center justify-center pt-4 relative">
    <span class="material-symbols-outlined text-9xl text-brand-red">
      {icon}
    </span>
  </div>
  <!-- Info -->
  <div class="mt-2 px-2 pb-6">
    <div
      class="font-thin text-xl md:text-2xl text-center uppercase text-gray-600"
    >
      {t1}
      <span class="font-medium">{t2}</span>
    </div>
    <div
      class="mt-4 text-sm text-gray-600 flex items-center justify-center text-center"
    >
      {desc}
    </div>
  </div>
</div>

<style>
  .pr-circle {
    background-image: linear-gradient(50deg, #000000 50%, #d1a45a 50%);
  }

  .pr-circle:hover .pr-bg {
    transition: 100ms all;
  }

  .pr-circle:hover .pr-bg {
    height: 9.3rem;
    width: 9.3rem;
  }
</style>

<script>
  export let text = "Aucun Contenu";
</script>

<div class="w-full h-80 my-8 flex flex-col items-center justify-center">
  <h1 class="mb-4 text-gray-500 flex items-center uppercase">
    <span class="flex items-center">
      <ion-icon
        name="information-circle"
        class="text-3xl text-brand-green mr-2"
      />
    </span>
    {text}
  </h1>
  <img src="/images/logo.png" alt="notfound" class="max-w-[15rem]" />
</div>

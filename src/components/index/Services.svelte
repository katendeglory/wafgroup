<script>
  const bloc1 = [
    "Quickbooks",
    "Dext",
    "Sage 50",
    "Sage 50 Cloud",
    "Odoo",
    "Acomba",
    "Microsoft dynamic 360",
    "Sage 100",
    "Bien d'autres",
  ];

  const bloc2 = [
    "Configuration de logiciels",
    "Tenue de livres",
    "Assistance comptable personnalisée",
    "Migration de logiciels comptable",
    "Services conseils",
    "Optimisation des processus comptables",
    "Réorganisation administrative",
    "Réajustement des comptes",
  ];

  const bloc3 = [
    "Accompagnement lors des vérifications fiscales",
    "Vérification interne de la comptabilité",
    "Représentation auprès de l'agence revenu Canada et revenu Québec",
    "Rapport de taxes",
    "Service de paie",
    "Préparation de déclaration de revenus:",
  ];

  const bloc3Sub = [
    "Impôts personnel, des travailleurs autonomes, des non résidents, PME & propriétaires immobiliers.",
  ];
</script>

<div id="services" />

<div class="great-container">
  <main class="main flow">
    <h1 class="main__heading">
      Nos Services
      <div class="text-sm mt-4 text-center font-light">
        WAF mets a votre disposition une variété de services
      </div>
    </h1>
    <div class="main__cards waf-groupCards">
      <div class="cards__inner">
        <div class="cards__card waf-groupCard shadow-xl">
          <h2
            class="card__heading px-2 py-1 bg-brand-green text-white rounded-md w-min whitespace-nowrap"
          >
            Bloc 1
          </h2>
          <p class="card__price">
            Logiciels de <span class="hidden sm:block" /> Gestion
          </p>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list" class="card__bullets flow">
            {#each bloc1 as item}
              <li class="flex items-start text-[0.9rem]">
                <span class="mt-[0.15rem] items-center justify-center">
                  <ion-icon
                    name="checkmark-circle-outline"
                    class="text-lg mr-2 text-brand-green"
                  />
                </span>
                {item}
              </li>
            {/each}
          </ul>
          <a href="/#contact" class="card__cta waf-groupCta">Nous Contacter</a>
        </div>

        <div class="cards__card waf-groupCard shadow-xl">
          <h2
            class="card__heading px-2 py-1 bg-brand-green text-white rounded-md w-min whitespace-nowrap"
          >
            Bloc 2
          </h2>
          <p class="card__price">Comptabilité & Solutions Cloud</p>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list" class="card__bullets flow">
            {#each bloc2 as item}
              <li class="flex items-start text-[0.9rem]">
                <span class="mt-[0.15rem] items-center justify-center">
                  <ion-icon
                    name="checkmark-circle-outline"
                    class="text-lg mr-2 text-brand-green"
                  />
                </span>
                {item}
              </li>
            {/each}
          </ul>
          <a href="/#contact" class="card__cta waf-groupCta">Nous Contacter</a>
        </div>

        <div class="cards__card waf-groupCard shadow-xl">
          <h2
            class="card__heading px-2 py-1 bg-brand-green text-white rounded-md w-min whitespace-nowrap"
          >
            Bloc 3
          </h2>
          <p class="card__price">
            Services de <span class="hidden sm:block" /> Fiscalité
          </p>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list" class="card__bullets flow">
            {#each bloc3 as item}
              <li class="flex items-start text-[0.9rem]">
                <span class="mt-[0.15rem] items-center justify-center">
                  <ion-icon
                    name="checkmark-circle-outline"
                    class="text-lg mr-2 text-brand-green"
                  />
                </span>
                {item}
              </li>
            {/each}
            {#each bloc3Sub as item}
              <li
                class="mt-2 ml-7 flex items-start justify-center text-[0.75rem] rounded-md px-2 py-2 bg-gray-200/50"
              >
                {item}
              </li>
            {/each}
          </ul>
          <a href="/#contact" class="card__cta waf-groupCta">Nous Contacter</a>
        </div>
      </div>

      <div class="waf-groupOverlay cards__inner" />
    </div>
  </main>
</div>

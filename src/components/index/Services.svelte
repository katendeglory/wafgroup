<script>
  import { onMount } from "svelte";

  onMount(async () => {
    // console.clear();

    const cardsContainer = document.querySelector(".waf-groupCards");
    const cardsContainerInner = document.querySelector(".cards__inner");
    const wafGroupCards = Array.from(
      document.querySelectorAll(".waf-groupCard"),
    );
    const wafGroupOverlay = document.querySelector(".waf-groupOverlay");

    const applyOverlayMask = (e) => {
      const overlayEl = e.currentTarget;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const createOverlayCta = (overlayCard, ctaEl) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("waf-groupCta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", true);
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = wafGroupCards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          wafGroupOverlay.children[cardIndex].style.width = `${width}px`;
          wafGroupOverlay.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("waf-groupCard");
      createOverlayCta(overlayCard, cardEl.lastElementChild);
      wafGroupOverlay.append(overlayCard);
      observer.observe(cardEl);
    };

    wafGroupCards.forEach(initOverlayCard);

    document
      .querySelector(".great-container")
      .addEventListener("pointermove", applyOverlayMask);
  });
</script>

<div id="services" />

<div class="great-container">
  <main class="main flow">
    <h1 class="main__heading">
      Nos Services
      <div class="text-sm mt-4 text-center font-light">
        WAF Group mets a votre disposition une variété de services
      </div>
    </h1>
    <div class="main__cards waf-groupCards">
      <div class="cards__inner">
        <div class="cards__card waf-groupCard">
          <h2 class="card__heading">Events</h2>
          <p class="card__price capitalize">Déco des évènements</p>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list" class="card__bullets flow">
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Enterrement de vie de jeune fille (Bridal Shower)
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Demandes en mariage (Proposals)
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Fêtes d'anniversaire
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Mariages
            </li>
          </ul>
          <a href="/#contact" class="card__cta waf-groupCta">Nous Contacter</a>
        </div>

        <div class="cards__card waf-groupCard">
          <h2 class="card__heading">In-Design</h2>
          <p class="card__price capitalize">Groupation d'interieur</p>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list" class="card__bullets flow">
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Vente des matériaux de déco maison
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Conseil en arrangement des décos maison
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Accompagnement dans le choix de couleurs pour votre maison
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Et bien plus...
            </li>
          </ul>
          <a href="/#contact" class="card__cta waf-groupCta">Nous Contacter</a>
        </div>

        <div class="cards__card waf-groupCard">
          <h2 class="card__heading">Protection</h2>
          <p class="card__price capitalize">Vente des équipements E.P.I</p>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list" class="card__bullets flow">
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Jacket safety anti froid
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Chemise de site pour gestionnaire
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Chemise de site pour gestionnaire
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Boots PVC
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Casque PVC
            </li>
            <li class="flex items-start text-[0.9rem]">
              <span class="mt-[0.08rem] items-center justify-center">
                <ion-icon
                  name="checkmark-done-outline"
                  class="text-lg mr-2 text-gray-400"
                />
              </span>
              Et plus...
            </li>
          </ul>
          <a href="/#contact" class="card__cta waf-groupCta">Nous Contacter</a>
        </div>
      </div>

      <div class="waf-groupOverlay cards__inner" />
    </div>
  </main>
</div>

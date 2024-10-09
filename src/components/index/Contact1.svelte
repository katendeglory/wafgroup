<script>
  import Container from "../utils/Container.svelte";
</script>

<div class="relative showcase patt-bg bg-brand-white">
  <div class="content flex items-center text-gray-800 min-h-screen">
    <Container>
      <div class="mb-2 h-full flex flex-col justify-center">
        <div class="flex items-center justify-center mb-4">
          <img src="/favicon.png" class="h-28 md:h-48" alt="arc" />
        </div>

        <div
          class="text-brand-primary text-brand-green text-2xl md:text-3xl text-center mb-4 uppercase tracking-widest"
        >
          Canada / Cameroun - Douala
        </div>

        <div
          class="k-font tracking-widest text-lg mb-4 flex items-center justify-center"
        >
          <div
            class="text-base flex items-center justify-center tracking-wide text-center"
          >
            « Votre Partenaire de Solutions Financières Complètes »
          </div>
        </div>

        <div class="flex justify-center">
          <div
            class="text-gray-200 text-sm md:text-base text-center flex flex-col items-center"
          >
            <div
              class="mt-2 mb-2 text-gray-900 text-sm tracking-wide rounded-md shadow-sm bg-white px-6 py-3"
            >
              <div
                class="flex items-center justify-center text-brand-green uppercase"
              >
                <span class="material-symbols-outlined mr-2 text-2xl">
                  schedule
                </span>
                Horaire
              </div>
              <div class="">Lundi à mercredi: 10h00 à 18h00</div>
              <div class="">Jeudi et vendredi 11h00 à 19h00</div>
              <div class="">Samedi : 8h00 a 13h00</div>
            </div>

            <a href="tel:+14383542509" class="contact-box !text-gray-800">
              <span class="material-symbols-outlined mr-2 text-3xl">
                phone_callback
              </span>
              +1 (438) 354 2509
            </a>
            <a
              href="mail:info@wafbusiness.ca"
              class="contact-box !text-brand-green"
            >
              <span class="material-symbols-outlined mr-2 text-3xl">
                email
              </span>
              info@wafbusiness.ca
            </a>

            <!-- <a
              href="https://api.whatsapp.com/send?phone=14383542509"
              about="_blank"
              class="mt-4 btn btn-primary !px-12 !py-1 h-[2.75rem]"
            >
              <ion-icon name="logo-whatsapp" class="text-xl mr-2" />
              Whatsapp
            </a> -->
          </div>
        </div>
      </div>
    </Container>
  </div>
</div>

<style>
  .contact-box {
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .showcase {
    height: 100vh;
    position: relative;
  }

  .content {
    /* box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.05); */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .patt-bg {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>

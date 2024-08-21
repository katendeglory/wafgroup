<script>
  import Container from "../utils/Container.svelte";
</script>

<div class="relative showcase contact-bg">
  <div
    class="content overlay flex items-center text-gray-300 min-h-screen pt-14 pb-8 md:pt-0 md:pb-0"
  >
    <Container>
      <div class="mb-2">
        <div class="flex items-center justify-center mb-4">
          <img src="/images/logo-white.png" class="h-28 md:h-40" alt="arc" />
        </div>

        <div
          class="h-font text-brand-green text-2xl text-center mb-4 uppercase tracking-widest"
        >
          Canada - Quebec
        </div>

        <div
          class="k-font tracking-widest text-lg mb-4 flex items-center justify-center"
        >
          <div class="flex items-center justify-center tracking-wide">
            « Votre Partenaire de Solutions Financières Complètes »
          </div>
        </div>

        <div class="flex justify-center">
          <div class="text-gray-200 text-sm md:text-base text-center">
            <a href="tel:+243993040340" class="contact-box !text-gray-300">
              <span
                class="material-symbols-outlined mr-2 text-3xl text-brand-green"
              >
                phone_callback
              </span>
              +243993040340
            </a>
            <a href="mail:info@WAF.net" class="contact-box !text-gray-300">
              <span
                class="material-symbols-outlined mr-2 text-3xl text-brand-green"
              >
                alternate_email
              </span>
              info@WAF.net
            </a>
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
    box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.05);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .contact-bg {
    background-color: rgb(17, 24, 39);
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>

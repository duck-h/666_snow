<template>




  <div style="background: linear-gradient(#448FAF, #8EB7C8)">
    
      
    <Navbar />

    <div class="relative overflow-hidden">
      <div
        class="container mx-auto relative flex items-center md:py-18 py-8 mt-24"
        style="margin-top: 10vh"
      >
        <!-- <div class="absolute flex flex-col">
          <div class="flex flex-col w-full lg:px-52 px-0">
            <img src="../assets/images/logo.png" alt="text" srcset="" />
          </div>
        </div> -->
      </div>
      <session class="container mx-auto px-4  ">
        <div class="flex content-center items-center justify-center ">
          <div class="lg:w-1/3 w-5/6 lg:p-0 px-4 ">
            <div
              class="relative flex flex-col min-w-0 break-words w-full rounded-lg border-0"
            >
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div
                  class="text-white md:text-3xl text-2xl text-center mb-5 tracking-widest"
                >
                  <h1>會員登入</h1>
                </div>
                <form>
                  <div class="relative w-full my-5 pt-10">
                    <input
                      class="input_focus my-3 w-full rounded"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div class="relative w-full ">
                    <input
                      class="input_focus w-full rounded "
                      type="password"
                      placeholder="password"
                    />
                  </div>

                  <div class="flex justify-center py-5">
                    <label class="inline-flex items-center cursor-pointer">
                      <!-- <input
                        type="checkbox"
                        class="form-checkbox border-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      /> -->
                      <!-- <span class="ml-2 text-sm font-semibold text-white">
                        I agree with the
                        <a href="#" class="text-cyan-300"> Privacy Policy </a>
                      </span> -->
                    </label>
                  </div>

                  <div class="text-center md:my-2 mt-5">
                    <!-- <button class="btn btn_hover rounded">登入</button> -->
                    <router-link class="btn btn_hover rounded inline-block" to="/contestant_area">登入</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </session>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TheFooter from "../components/TheFooter.vue";
export default { components: { Navbar, TheFooter } };
</script>

<style lang="scss" scoped>
input {
  @apply bg-white bg-opacity-20 h-10 text-white px-4;
}
.input_focus {
  @apply focus:bg-opacity-50 focus:outline-none;
}
textarea {
  @apply bg-white bg-opacity-20 text-white px-4 pt-2;
}
::placeholder {
  @apply text-white;
}

.btn {
  @apply text-xl font-semibold border border-white py-1 px-4 text-white  ml-4 w-40;
}
.btn_hover {
  @apply hover:bg-[#ffffff] hover:text-[#4e4e4e];
}
</style>

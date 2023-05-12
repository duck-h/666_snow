<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let open = ref(false);
    let Links = [
      { name: "滑雪地圖", link: "/map" }, //Map
      { name: "教練", link: "/coach" }, //Coach
      { name: "課程", link: "/course" }, //Course
      { name: "討論區", link: "/forum" }, //Forum
      { name: "聊天室", link: "/chat" }, //Chat
      { name: "商城", link: "/shop" }, //Shop
      { name: "購物車", link: "/cart" }, //Cart
      { name: "會員中心", link: "/login" }, //Member
    ];
    function MenuOpen() {
      open.value = !open.value;
    }

    return { Links, open, MenuOpen };
  },
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 90) {
    header.style.backgroundColor = "rgba(0,0,0,0.8)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
  }
});
</script>

<template>
  <nav class="fixed w-full top-0 z-30" id="header">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/">
        <a class="flex items-center">
          <img
            src="../assets/images/Navicon.ico"
            class="h-12 mr-3"
            alt="Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Let's go skiing</span
          >
        </a>
      </router-link>

      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-10 h-10 rounded-full"
            src="https://tecdn.b-cdn.net/img/new/avatars/8.jpg"
            alt="user photo"
            loading="lazy"

          />
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >Bonnie Green</span
            >
            <span
              class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >name@flowbite.com</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        class="md:bg-transparent bg-gray-900 opacity-90 md:flex md:items-center md:px-0 md:py-0 py-5 md:static absolute md:w-auto w-full top-16 duration-300 ease-in pl-10"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links">
          <a
            class="text-l text-white hover:text-emerald-400 hover:underline underline-offset-8"
            :href="link.link"
            >{{ link.name }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss"></style>

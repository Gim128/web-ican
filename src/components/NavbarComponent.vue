<template>
    <div>
      <nav
        class="px-6 py-8 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="#"
            class="text-2xl font-bold text-white cursor-pointer md:text-2xl hover:text-indigo-900"
            >iCanlk
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col items-center mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-xl font-semibold text-white cursor-pointer hover:text-indigo-400">Home</li>
          <li>
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button
                @click="show = !show"
                class="flex items-center text-indigo-100 rounded-md focus:outline-none"
              >
                <span class="mr-4 text-xl font-semibold cursor-pointer">Poilicies</span>
                <svg
                  class="w-5 h-5 text-indigo-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
  
              <!-- Dropdown menu -->
              <div
                v-show="show"
                class="py-2 mt-2 bg-indigo-100 rounded-md shadow-xl cursor-pointer lg:absolute lg:right-0 w-44"
              >
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Payment Agreement
                </router-link>
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Privacy Agreement
                </router-link>
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Service Agreement
                </router-link>

                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Withdraw Agreement
                </router-link>

                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Account Purchase A
                </router-link>

                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Privacy Policy
                </router-link>

                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Refund & Return Policy
                </router-link>

                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-500 hover:text-indigo-100"
                >
                  Terms of Service
                </router-link>

              </div>
            </div>
          </li>
          <li class="text-xl font-semibold text-gray-100 cursor-pointer hover:text-indigo-400">Product</li>
        </ul>
      </nav>
    </div>
  </template>
  <script>
    import { ref } from 'vue';
    export default {
      setup() {
        let showMenu = ref(false);
        let show = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, show, toggleNav };
      },
    };
  </script>
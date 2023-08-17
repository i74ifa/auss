<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
      <div class="flex h-20 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <router-link class="block text-teal-600" to="/">
            <span class="sr-only">Home</span>
            <img src="/logo.png" alt="" />
          </router-link>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link
                  class="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  الرئيسية
                </router-link>
              </li>

              <li>
                <router-link
                  class="text-gray-500 transition hover:text-gray-500/75"
                  to="/about"
                >
                  عن المنصة
                </router-link>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="/contact-us"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Mobile menu -->
        <transition mode="in-out" name="fromTop">
          <div
            class="md:hidden"
            :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
          >
            <div class="grid bg-white absolute w-full left-0 top-20 mt-px z-30">
              <router-link
                @click="closeMenu"
                class="text-right block py-5 px-3 hover:bg-gray-100"
                to="/"
                >الرئيسية</router-link
              >
              <router-link
                @click="closeMenu"
                class="text-right block py-5 px-3 hover:bg-gray-100"
                to="/about"
                >عن المنصة</router-link
              >
              <router-link
                @click="closeMenu"
                class="text-right block py-5 px-3 hover:bg-gray-100"
                to="/contact-us"
                >تواصل معنا</router-link
              >
            </div>
          </div>
        </transition>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <router-link
              class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              to="/login"
            >
              دخول
            </router-link>

            <div class="hidden sm:flex">
              <router-link
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                to="/register"
              >
                إنشاء حساب
              </router-link>
            </div>
          </div>

          <div class="block md:hidden">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const isMenuOpen = ref(true);

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

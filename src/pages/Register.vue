<script setup>
import person from "./../components/icons/person.vue";
import phone from "./../components/icons/phone.vue";
</script>
<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="py-20 px-3">
      <h2 class="text-3xl mb-3">إنشاء حساب</h2>
      <form action="">
        <div class="relative mb-7">
          <person
            class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0"
          />
          <input
            type="text"
            class="input-default pr-11"
            placeholder="إسم المستخدم"
          />
        </div>
        <div class="grid md:grid-cols-2 mb-2 gap-x-4">
          <div class="relative mb-3">
            <phone
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0"
            />
            <input
              type="text"
              class="input-default pr-11"
              placeholder="رقم الجوال"
            />
          </div>
          <div class="relative mb-5">
            <Icon
              icon="octicon:number-16"
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0 text-gray-500"
            />
            <input
              type="text"
              class="input-default pr-11"
              placeholder="رقم السجل التجاري"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 mb-2 gap-x-4">
          <div class="relative mb-5">
            <Icon
              icon="mingcute:left-line"
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 ml-3 left-0 text-gray-600"
            />
            <Icon
              icon="fluent:city-16-regular"
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0 text-gray-600"
            />
            <input
              type="text"
              class="input-default pr-11"
              placeholder="المدينة"
            />
          </div>
          <div class="relative mb-5">
            <Icon
              icon="carbon:at"
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0 text-gray-600"
            />
            <input
              type="email"
              class="input-default pr-11"
              placeholder="البريد الالكتروني"
            />
          </div>
        </div>
        <div class="grid md:grid-cols-2 mb-2 gap-x-4">
          <div class="relative mb-5">
            <button type="button">
              <Icon
                icon="solar:eye-broken"
                class="w-7 h-7 absolute top-1/2 -translate-y-1/2 ml-3 left-0 text-gray-600"
              />
            </button>
            <Icon
              icon="solar:password-outline"
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0 text-gray-600"
            />
            <input
              type="text"
              class="input-default pr-11"
              placeholder="كلمة المرور"
            />
          </div>
          <div class="relative mb-5">
            <button type="button">
              <Icon
                icon="solar:eye-broken"
                class="w-7 h-7 absolute top-1/2 -translate-y-1/2 ml-3 left-0 text-gray-600"
              />
            </button>
            <Icon
              icon="solar:password-outline"
              class="w-7 h-7 absolute top-1/2 -translate-y-1/2 mr-2 right-0 text-gray-600"
            />
            <input
              type="email"
              class="input-default pr-11"
              placeholder="تاكيد كلمة المرور"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

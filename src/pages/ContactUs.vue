<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="py-20 px-3">
      <h2 class="text-3xl mb-3">تواصل معنا</h2>
      <form action="">
        <div class="relative mb-7">
          <input type="text" class="input-default" placeholder="الاسم" />
        </div>

        <div class="grid md:grid-cols-2 mb-2 gap-x-4">
          <div class="relative mb-5">
            <input
              type="email"
              class="input-default"
              placeholder="البريد الالكتروني"
            />
          </div>
          <div class="relative mb-5">
            <input
              type="text"
              class="input-default"
              placeholder="عنوان الرسالة"
            />
          </div>
        </div>
        <div class="mb-5">
          <textarea
            name=""
            class="w-full input-default"
            placeholder="محتوى الرسالة"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="py-2.5 px-4 bg-[#43A09D] hover:bg-[#36807d] focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-full"
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<template>
  <div class="">
    <section class="text-gray-600 body-font">
      <div
        class="max-w-screen-xl mx-auto px-5 pt-44 pb-10 md:flex-row flex-col"
      >
        <div
          class="flex flex-col md:items-start md:text-left md:mb-16 items-center text-center"
        >
          <h1
            class="title-font md:text-4xl text-2xl font-medium text-gray-700 mb-16"
          >
            مرحباً بعودتك
          </h1>
        </div>
        <div
          class="flex justify-between items-center py-5 md:flex-row flex-col"
        >
          <h1 class="title-big text-center md:text-inherit">
            سجّل الدخول<br />
            إلى منصة أسس
          </h1>
          <div class="w-96">
            <div>
              <form action="">
                <div class="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="input-default mb-6"
                    placeholder="إسم المستخدم"
                  />
                </div>

                <div class="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="input-default"
                    placeholder="كلمة المرور"
                  />
                </div>
                <button type="button" class="mb-6">
                  <small class="text-gray-500">إستعادة كلمة المرور</small>
                </button>
                <button
                  type="submit"
                  class="py-2 px-4 bg-[#43A09D] hover:bg-[#36807d] focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-full"
                >
                  دخول
                </button>
              </form>
              <div class="py-3">
                إذا لم يكن لديك حساب ، يمكنك
                <a href="/register" class="text-blue-400">إنشاء حساب</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

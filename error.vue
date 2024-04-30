<template>
  <div class="fixed w-full">
    <div
      class="w-full h-[120vh] flex flex-col items-center justify-center -mt-40 gap-10 bg-offwhite"
    >
      <img
        src="/illustrations/404.svg"
        alt="404 error"
        class="pointer-events-none select-none"
      />

      <div class="flex flex-col gap-5 items-center">
        <p>Страница не найдена</p>
        <AppButton text="Вернуться на главную" />
      </div>
    </div>
  </div>
</template>

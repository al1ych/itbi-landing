<script setup lang="ts">
  import { object, string, type InferType } from "yup"
  import type { FormSubmitEvent } from "#ui/types"

  const schema = object({
    name: string().required("Обязательное поле"),
    email: string()
      .email("Такой e-mail не существует")
      .required("Обязательное поле"),
  })

  type Schema = InferType<typeof schema>

  const state = reactive({
    email: undefined,
    name: undefined,
    captcha: undefined,
    description: undefined,
  })

  const isEmailSent = ref(false)
  const isHuman = ref(false)

  const isFilledOut = computed(() => {
    try {
      schema.validateSync(state, { abortEarly: false })
      return true
    } catch {
      return false
    }
  })

  const toast = useToast()
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
      await schema.validate(state, { abortEarly: false })

      const isCaptchaCorrect = await verifyCaptcha()
      if (isCaptchaCorrect) {
        isHuman.value = true
      }

      if (isEmailSent.value) {
        toast.add({
          title: "Мы уже занимаемся вашей заявкой :)",
          color: "green",
        })
        return
      }

      if (!isHuman.value) {
        toast.add({ title: "А вы точно человек?", color: "red" })
        return
      }

      await sendMail()
      isEmailSent.value = true
      resetForm()
      toast.add({
        title: "Заявка отправлена :)",
        description: "Мы свяжемся с вами очень скоро!",
        color: "green",
      })
    } catch (errors) {
      const errorList = (errors as any).inner
      errorList.forEach((error: any) => {
        toast.add({ title: "Заполните обязательные поля", color: "red" })
      })
    }
  }

  function resetForm() {
    Object.keys(state).forEach(key => {
      // @ts-ignore
      state[key] = undefined
    })
  }

  async function verifyCaptcha() {
    return await $fetch("/api/verify-captcha", {
      method: "POST",
      body: { token: state.captcha },
    })
  }

  async function sendMail() {
    const mail = useMail()
    try {
      await mail.send({
        from: "Semyon Kotovsky <semyon.kotovsky@mail.ru>",
        subject: "Заявка на разработку программного решения",
        text: `Поступила заявка на разработку программного решения.\n\nЗаказчик: ${
          state.name
        }.\n\nE-mail заказчика: ${state.email}.\n\nПожелания заказчика:\n${
          state.description || "нет"
        }.`,
      })
      console.log("Email sent successfully")
    } catch (error) {
      console.error("Error sending email:", error)
    }
  }
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <UFormGroup name="name">
      <UInput
        size="lg"
        icon="i-heroicons-user-20-solid"
        v-model="state.name"
        placeholder="Имя"
      />
    </UFormGroup>
    <UFormGroup name="email" class="mt-2">
      <UInput
        size="lg"
        icon="i-heroicons-inbox-20-solid"
        v-model="state.email"
        placeholder="Почта"
      />
    </UFormGroup>

    <div
      class="mt-4 transition-all flex gap-2 max-h-0 opacity-0"
      :class="{
        'max-h-96': isFilledOut,
        'opacity-100': isFilledOut,
      }"
    >
      <UFormGroup name="description" class="flex-auto">
        <UTextarea
          size="lg"
          icon="i-heroicons-user-20-solid"
          v-model="state.description"
          placeholder="Краткое описание проекта"
        />
      </UFormGroup>

      <NuxtHCaptcha v-if="isFilledOut && !isHuman" v-model="state.captcha" />
    </div>

    <AppButton class="w-1/2 mx-auto mt-4" @click="onSubmit"> </AppButton>
  </UForm>
</template>

<script setup lang="ts">
  import { object, string, type InferType } from "yup"
  import type { FormSubmitEvent } from "#ui/types"

  const schema = object({
    name: string().required("Обязательное поле"),
    email: string().email("Invalid email").required("Обязательное поле"),
  })

  type Schema = InferType<typeof schema>

  const state = reactive({
    email: undefined,
    name: undefined,
  })

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
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

    <AppButton class="w-1/2 mx-auto mt-4"> </AppButton>
  </UForm>
</template>

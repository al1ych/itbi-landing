export const useMultisectionStore = defineStore("multisection-store", () => {
  const initSectionIndex = 0

  const currentSectionIndex = ref(initSectionIndex)

  return {
    currentSectionIndex,
    initSectionIndex,
  }
})

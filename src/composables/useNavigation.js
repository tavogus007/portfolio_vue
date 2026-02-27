import { ref } from 'vue'

// Estado global compartido entre todos los componentes
const currentView = ref('home')
const direction = ref('forward')

export function useNavigation() {
  function navigateTo(view) {
    direction.value = view === 'home' ? 'backward' : 'forward'
    currentView.value = view
  }

  return { currentView, direction, navigateTo }
}
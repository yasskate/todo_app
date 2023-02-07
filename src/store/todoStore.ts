import { create } from 'zustand'

interface TodoState {
  counter: number,
  increaseCounter: () => void
}

export const useTodoStore = create<TodoState>(set => ({
  counter: 0,
  increaseCounter: () => set(state => ({ counter: state.counter++ }))
}))


import { create } from 'zustand'

 const useStore = create((set) => ({
        gratitude: false,
        slowdown: false,
        reponsibility: false,
        setGratitude: (state) => set(() => ({ gratitude: state })),
        setSlowdown: (state) =>  set(() => ({ slowdown: state })),
        setResponsibility: (state) =>  set(() => ({responsibility: state })),
    }))

export default useStore
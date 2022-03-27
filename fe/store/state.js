import create from "zustand";

const useStore = create((set) => ({
  isOpenOverlay: false,
  urlYoutube: "",
  urlImg: "",
  setIsOpenOverlay: (isOpenOverlay) =>
    set((state) => ({ ...state, isOpenOverlay })),
  setUrlYoutube: (urlYoutube) => set((state) => ({ ...state, urlYoutube })),
  setUrlImg: (urlImg) => set((state) => ({ ...state, urlImg })),
}));

export { useStore };

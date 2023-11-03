import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useCity = create((set) => ({
  city: null,
  setCity: (city) => {
    set(() => ({ city }));
  },
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("city Store", useCity);
export default useCity;

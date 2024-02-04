import { useAppSelector } from "../../hooks"


export const usePizzaSelector = () => {
  return useAppSelector(state => state.pizza)
}

import { AppProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <AppProvider>
       <AppRouter/>
    </AppProvider>
  )
}

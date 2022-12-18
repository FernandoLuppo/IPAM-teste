//  NPM
import { Routes } from "./routes";
import { Provider } from "react-redux"
import { store } from "./shared/redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

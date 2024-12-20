import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/index.jsx";
import './index.css';
import {StrictMode} from "react";
import store from "./redux/store.js";

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
)

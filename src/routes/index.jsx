import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import { ModelS, Model3, ModelX, ModelY, SolarRoof, SolarPanels } from '@pages';


const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<ModelS />} />
                <Route path="model-3/:name" element={<Model3 />} />
                <Route path="model-x/:name" element={<ModelX />} />
                <Route path="model-y/:name" element={<ModelY />} />
                <Route path="solar-roof/:name" element={<SolarRoof />} />
                <Route path="solar-panels/:name" element={<SolarPanels />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default Index
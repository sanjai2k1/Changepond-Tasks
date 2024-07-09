// eslint-disable-next-line 
import { createBrowserRouter } from "react-router-dom";
import ReactHook from "../Hooks/ReactHook";
import UseEffectHook from "../Hooks/UseEffectHook";
import UseStateHooks from "../Hooks/UseStateHooks";
import ToggleImgComp from "../Tasks/ToggleImgComp";
import ToggleMultiImgComp from "../Tasks/ToggleMultiImgComp";
import Chart from "../components/Chart";
import ClickCounterComp from "../components/ClickCounterComp";
import Dashboard from "../components/Dashboard";
import HoverCounterComp from "../components/HoverCounterComp";
import MyImagesComp from "../components/MyImagesComp";
import MySliderComp from "../components/MySliderComp";
import PageNotFound from "../components/PageNotFound";
import ParentComp from "../components/ParentComp";
import VirtualDomComp from "../components/VirtualDomComp";
import MainDashBoard from "../layout/MainDashBoard";
import FormValComp from "../components/FormValComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginComp from "../layout/LoginComp";

const router = createBrowserRouter([{
path:"",
element:<LoginComp/>
},
  {
    path: "maindashboard",
    element: <MainDashBoard />,
    children: [
      {
        path: "",
        element: <MySliderComp />,
      },
      {
        path: "myslider",
        element: <MySliderComp />,
      },
      {
        path: "myimages",
        element: <MyImagesComp />,
      },
      {
        path: "parent",
        element: <ParentComp />,
      },

      {
        path: "reacthook",
        element: <ReactHook />,
        children: [
          { path: "usestate", element: <UseStateHooks /> },
          { path: "useeffect", element: <UseEffectHook /> },
        ],
      },
      {
        path: "productdash", element: <ProductDashComp />
      },
      {
        path: "addproduct", element: <ProductAddComp />
      },
      {
        path: "updateproduct/:id", element: <ProductUpdateComp />
      }
    ],
  },
  {
    path: "material",
    element: <Dashboard />, children: [
      {
        path: "parent", element: <ParentComp />
      }, {
        path: "maindashboard", element: <>
          <Chart />
          <MainDashBoard /></>, children: [

            {
              path: "",
              element: <MySliderComp />,
            },
            {
              path: "myslider",
              element: <MySliderComp />,
            },
            {
              path: "myimages",
              element: <MyImagesComp />,
            },
            {
              path: "parent",
              element: <ParentComp />,
            },

            {
              path: "reacthook",
              element: <ReactHook />,
              children: [
                { path: "usestate", element: <UseStateHooks /> },
                { path: "useeffect", element: <UseEffectHook /> },
              ],
            }, , {
              path: "virtualdom", element: <VirtualDomComp />
            }



          ]
      }, {
        path: "parentchild",
        element: <ParentComp />

      }, {
        path: "clickcounter",
        element: <ClickCounterComp />
      },
      {
        path: "hovercounter",
        element: <HoverCounterComp />
      },
      {
        path: "myslider",
        element: <MySliderComp />,
      },
      {
        path: "myimages",
        element: <MyImagesComp />,
      },
      {
        path: "reacthook",
        element: <ReactHook />,
        children: [
          { path: "usestate", element: <UseStateHooks /> },
          { path: "useeffect", element: <UseEffectHook /> },
        ],
      }, {
        path: "toggleimg", element: <ToggleImgComp />
      }
      , {
        path: "togglemulti", element: <ToggleMultiImgComp />
      }, {
        path: "virtualdom", element: <VirtualDomComp />
      }, , {
        path: "formval", element: <FormValComp />
      }


    ]
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

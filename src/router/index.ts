import {
  createRouter,
  createWebHashHistory,
  type RouteLocationNormalized,
} from "vue-router";
import routes from "./routes";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
  };
}

router.beforeEach((to: toRouteType, from, next) => {
  // 页面 title
  next();
});

export default router;

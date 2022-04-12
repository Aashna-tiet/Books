import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ImportDataView from "../views/ImportDataView.vue"
import BookView from "../views/BookView.vue"
import TaxonomyView from "../views/TaxonomyView.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/importData",
      name: "ImportData",
      component: ImportDataView,
    },
    {
      path: "/book",
      name: "book",
      component: BookView,
    },
    {
      path: "/taxon",
      name: "taxonomy",
      component: TaxonomyView,
    },
  ],
});

export default router;

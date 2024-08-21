import Layout from "@/layout";

const containerRouter = {
  path: "/container",
  component: Layout,
  redirect: "/alh_container/index.vue",
  meta: {
    title: "容器监控",
    icon: "nested",
  },
  children: [
    {
      path: "alh_container",
      component: () => import("@/views/alh_container/index.vue"),
      name: "alh_container",
      meta: { title: "容器监控" },
    },
  ],
};

export default containerRouter;

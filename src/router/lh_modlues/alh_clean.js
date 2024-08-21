import Layout from "@/layout";

const alhcleanRouter = {
  path: "/alhclean",
  component: Layout,
  redirect: "/alh_clean/index.vue",
  meta: {
    title: "数据配置策略",
    icon: "nested",
  },
  children: [
    {
      path: "alh_clean",
      component: () => import("@/views/alh_clean/index.vue"),
      name: "alh_clean",
      meta: { title: "数据配置策略" },
    },
  ],
};

export default alhcleanRouter;

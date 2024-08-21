import Layout from "@/layout";

const gatewayGroupRouter = {
  path: "/gatewayGroup",
  component: Layout,
  redirect: "/alh_gatewayGroup/index.vue",
  meta: {
    title: "网关组",
    icon: "nested",
  },
  children: [
    {
      path: "alh_gatewayGroup",
      component: () => import("@/views/alh_gatewayGroup/index.vue"),
      name: "alh_gatewayGroup",
      meta: { title: "网关组" },
    },
  ],
};

export default gatewayGroupRouter;

import Layout from "@/layout";

const ConfigurationRouter = {
  path: "/Configuration",
  component: Layout,
  redirect: "/alh_Configuration/index.vue",
  meta: {
    title: "设备配置信息",
    icon: "nested",
  },
  children: [
    {
      path: "alh_Configuration",
      component: () => import("@/views/alh_Configuration/index.vue"),
      name: "alh_Configuration",
      meta: { title: "设备配置信息" },
    },
  ],
};

export default ConfigurationRouter;

import Layout from "@/layout";

const wangguanRouter = {
  path: "/wangguan",
  component: Layout,
  redirect: "/alh_wangguan/index.vue",
  meta: {
    title: "网关设备配置",
    icon: "nested",
  },
  children: [
    {
      path: "alh_wangguan",
      component: () => import("@/views/alh_wangguan/index.vue"),
      name: "alh_wangguan",
      meta: { title: "网关设备配置" },
    },
  ],
};

export default wangguanRouter;

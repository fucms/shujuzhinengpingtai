import Layout from "@/layout";

const wangguanInfomessageRouter = {
  path: "/wangguanInfomessage",
  component: Layout,
  redirect: "/alh_wangguanInfomessage/index.vue",
  meta: {
    title: "网关信息管理",
    icon: "nested",
  },
  children: [
    {
      path: "alh_wangguanInfomessage",
      component: () => import("@/views/alh_wangguanInfomessage/index.vue"),
      name: "alh_wangguanInfomessage",
      meta: { title: "网关信息管理" },
    },
  ],
};

export default wangguanInfomessageRouter;

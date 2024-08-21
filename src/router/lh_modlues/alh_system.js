import Layout from "@/layout";

const alhSystemRouter = {
  path: "/alhSystem",
  component: Layout,
  redirect: "/alh_system/userView/index",
  meta: { title: "系统管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "userView",
      component: () => import("@/views/alh_system/userView/index.vue"),
      name: "userView",
      meta: { title: "用户管理" },
    },
    {
      path: "roleView",
      component: () => import("@/views/alh_system/roleView/index.vue"),
      name: "roleView",
      meta: { title: "角色权限" },
    },
    {
      path: "logView",
      component: () => import("@/views/alh_system/logView/index.vue"),
      name: "logView",
      meta: { title: "日志管理" },
    },
    {
      path: "ziyuanView",
      component: () => import("@/views/alh_system/ziyuanView/index.vue"),
      name: "ziyuanView",
      meta: { title: "资源管理" },
    },
  ],
};

export default alhSystemRouter;

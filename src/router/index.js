import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Coach from "@/views/Coach.vue";
import Register from "@/views/Register.vue";
import Map from "@/views/Map.vue";
import Course from "@/views/Course.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coach",
    name: "Coach",
    component: Coach,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  { path: "/course", name: "Course", component: Course },
  { path: "/map", name: "Map", component: Map },
  {
    path: "/Member_info",
    component: () => import("@/views/Member_info.vue"),
    children: [
      {
        path: "",
        name: "Member_info",
        component: () => import("@/components/memberArea/index.vue"),
      },
      {
        path: "learning_platform",
        name: "LearningPlatform",
        component: () =>
          import("@/components/memberArea/LearningPlatform.vue"),
      },
      {
        path: "course/:id",
        component: () => import("@/components/memberArea/SingleCourse.vue"),
      },
      {
        path: "quiz/:id",
        component: () => import("@/components/memberArea/SingleQuiz.vue"),
      },
      {
        path: "support",
        name: "Support",
        component: () => import("@/components/memberArea/Support.vue"),
      },
    ],
  },
  // {
  //   path: "/axios",
  //   name: "Axios",
  //   component: () => import("@/views/axios.vue"), // 懶加載組件
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

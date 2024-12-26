// 重置路由表
export const resetRouterMap = function ({ commit }) {
  return new Promise(async (resolve, reject) => {
    const asyncRouterMap = await filterAsyncRouter();
    commit("SET_ADDROUTER", asyncRouterMap);
    resolve();
  });
};

async function filterAsyncRouter() {
//     let menus = store.getters.navMenus;
//     let pageRoutes = [];
//     const { ifTriageEventPerson, ifCommon, templateMenuConfig } = store.getters.organizationVO;
//     const roles = store.getters.roles;
  
//     menus.push('not-found');
//     let _asyncRouterMap = cloneDeep(changeRoute());
//     // menus = changeMenus(menus, roles);
//     for (let i = 0; i < _asyncRouterMap.length; i++) {
//       const route = _asyncRouterMap[i];
//       if (route.path === '*') break;
//       if (route.path === '/' && !route.authority) {
//         // 只有V5机构，用于YS版本的才需要这个病历模板的菜单，故此判断
//         if(templateMenuConfig){
//           route.children.push(
//             {
//               menu: {
//                 order: 7,
//                 title: '系统管理',
//                 iconClass: 'resource-manage',
//                 children: {
//                   title: '病历模板',
//                 },
//               },
//               path: 'resourceManage/emrTemplate',
//               name: '病历模板管理页面',
//               meta: { title: '病历模板管理页面' },
//               authority: 'resource-manage/elecFence',
//               component: () => import(/* webpackChunkName: "chunk-resourceManageV5-emrTemplate" */'@/views/business/pages/resourceManageV5/emrTemplate.vue'),
//             }
//           );
//         }
//         route.children.forEach((item) => {
//           if (menus.includes(item.authority)) {
//             pageRoutes.push(item);
//           } else if (ifTriageEventPerson && item.authority.includes('triage')) {
//             // 根据机构配置添加“检伤分类”路由
//             pageRoutes.push(item);
//           } else if (ifCommon && !map(roles, 'roleName').includes('department-doctor')) { // 非科室会诊医生
//             if (item.authority.includes('abnormal-task')) {
//               pageRoutes.push(item);
//             }
//             if (item.authority.includes('operation-data')) {
//               pageRoutes.push(item);
//             }
//           }
//         });
//         route.children = pageRoutes;
//       }
//     }
//     return _asyncRouterMap;
  }
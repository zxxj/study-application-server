export const MENU_LIST = `[
  {
      "path":"/:path(.*)*",
      "name":"PageNotFound",
      "meta":{
          "title":"ErrorPage",
          "hideBreadcrumb":true,
          "hideMenu":true
      },
      "children":[
          {
              "path":"/:path(.*)*",
              "name":"PageNotFound",
              "meta":{
                  "title":"ErrorPage",
                  "hideBreadcrumb":true,
                  "hideMenu":true
              }
          }
      ]
  },
  {
      "path":"/about",
      "name":"About",
      "redirect":"/about/index",
      "meta":{
          "hideChildrenInMenu":true,
          "icon":"simple-icons:about-dot-me",
          "title":"routes.dashboard.about",
          "orderNo":100000
      },
      "children":[
          {
              "path":"index",
              "name":"AboutPage",
              "meta":{
                  "title":"routes.dashboard.about",
                  "icon":"simple-icons:about-dot-me",
                  "hideMenu":true
              }
          }
      ]
  },
  {
      "path":"/dashboard",
      "name":"Dashboard",
      "redirect":"/dashboard/analysis",
      "meta":{
          "orderNo":10,
          "icon":"ion:grid-outline",
          "title":"routes.dashboard.dashboard"
      },
      "children":[
          {
              "path":"analysis",
              "name":"Analysis",
              "meta":{
                  "title":"routes.dashboard.analysis"
              }
          },
          {
              "path":"workbench",
              "name":"Workbench",
              "meta":{
                  "title":"routes.dashboard.workbench"
              }
          }
      ]
  },
  {
      "path":"/charts",
      "name":"Charts",
      "redirect":"/charts/echarts/map",
      "meta":{
          "orderNo":500,
          "icon":"ion:bar-chart-outline",
          "title":"routes.demo.charts.charts"
      },
      "children":[
          {
              "path":"baiduMap",
              "name":"BaiduMap",
              "meta":{
                  "title":"routes.demo.charts.baiduMap"
              }
          },
          {
              "path":"aMap",
              "name":"AMap",
              "meta":{
                  "title":"routes.demo.charts.aMap"
              }
          },
          {
              "path":"googleMap",
              "name":"GoogleMap",
              "meta":{
                  "title":"routes.demo.charts.googleMap",
                  "roles": "[\\"super\\"]"
              }
          },
          {
              "path":"echarts",
              "name":"Echarts",
              "meta":{
                  "title":"Echarts"
              },
              "redirect":"/charts/echarts/map",
              "children":[
                  {
                      "path":"map",
                      "name":"Map",
                      "meta":{
                          "title":"routes.demo.charts.map"
                      }
                  },
                  {
                      "path":"line",
                      "name":"Line",
                      "meta":{
                          "title":"routes.demo.charts.line"
                      }
                  },
                  {
                      "path":"pie",
                      "name":"Pie",
                      "meta":{
                          "title":"routes.demo.charts.pie"
                      }
                  }
              ]
          }
      ]
  }]`;

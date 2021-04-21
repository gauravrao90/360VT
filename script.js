TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "mapLocations": [
   {
    "y": 942,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F.jpeg",
        "height": 1027,
        "class": "ImageResourceLevel",
        "width": 1600
       },
       {
        "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_lq.jpeg",
        "height": 513,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 800
       }
      ]
     },
     "class": "Map",
     "initialZoomFactor": 1,
     "label": "1 BHK-Type A_For VR Plan-01",
     "minimumZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "maximumZoomFactor": 1.8,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_1.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 96,
        "x": 300,
        "height": 110,
        "y": 386
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 386,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_1_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "width": 96,
        "x": 300
       },
       "id": "overlay_F948E75A_F030_6729_41EA_6A5026B8F91C",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_0.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 96,
        "x": 146,
        "height": 110,
        "y": 887
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 887,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_0_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "width": 96,
        "x": 146
       },
       "id": "overlay_F9297370_F030_1FF9_41E7_6151A6ECB275",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_2.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 96,
        "x": 812,
        "height": 110,
        "y": 547
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 547,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_2_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "width": 96,
        "x": 812
       },
       "id": "overlay_F91E7EBC_F030_2969_41ED_5C110CDA0B5D",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_3.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 96,
        "x": 1334,
        "height": 110,
        "y": 278
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 278,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_3_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "width": 96,
        "x": 1334
       },
       "id": "overlay_F950402A_F030_1969_41E1_4390F4A3943E",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_4.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 96,
        "x": 670,
        "height": 110,
        "y": 818
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 818,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_4_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "width": 96,
        "x": 670
       },
       "id": "overlay_F983A36A_F030_3FE8_41E3_B6B14CE527F7",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_5.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 96,
        "x": 1260,
        "height": 110,
        "y": 814
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 814,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_5_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "width": 96,
        "x": 1260
       },
       "id": "overlay_F9B5008D_F030_1928_41E9_5810C3D9F624",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.1,
     "height": 1108,
     "width": 1725,
     "thumbnailUrl": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_t.jpg",
     "id": "map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
     "fieldOfViewOverlayInsideColor": "#FFFFFF"
    },
    "angle": 37.69,
    "x": 194
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "Dining Area",
  "hfovMax": 120,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "mapLocations": [
      {
       "y": 602,
       "class": "PanoramaMapLocation",
       "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
       "angle": 0,
       "x": 860
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "Kitchen",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 873,
          "class": "PanoramaMapLocation",
          "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
          "angle": 94.83,
          "x": 718
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Bathroom",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
          "class": "AdjacentPanorama",
          "backwardYaw": 177.38,
          "yaw": -115.58,
          "distance": 1
         }
        ],
        "id": "panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_r_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_f_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_b_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_u_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_E7684F7F_EFF8_EB29_41E3_7D7F25CF606A",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_0_HS_0_0.png",
                 "height": 120,
                 "class": "ImageResourceLevel",
                 "width": 120
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.49,
              "pitch": 2.92,
              "yaw": -115.58
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_0_HS_0_0_0_map.gif",
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 60
                }
               ]
              },
              "pitch": 2.92,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -115.58,
              "hfov": 7.49
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_d_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_l_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -180,
       "yaw": -148.88,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 333,
          "class": "PanoramaMapLocation",
          "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
          "angle": 0,
          "x": 1382
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Master Bedroom",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
          "class": "AdjacentPanorama",
          "backwardYaw": 177.38,
          "yaw": -131.33,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 869,
             "class": "PanoramaMapLocation",
             "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
             "angle": 97.47,
             "x": 1308
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Master Bathroom",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
             "class": "AdjacentPanorama",
             "backwardYaw": 179.13,
             "yaw": -103.26,
             "distance": 1
            }
           ],
           "id": "panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_r_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_f_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_b_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_u_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_FE97D570_F021_A4EE_41AA_082AA1BB9B30",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_0_HS_0_0.png",
                    "height": 135,
                    "class": "ImageResourceLevel",
                    "width": 135
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.44,
                 "pitch": 0.01,
                 "yaw": -103.26
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_0_HS_0_0_0_map.gif",
                    "height": 67,
                    "class": "ImageResourceLevel",
                    "width": 67
                   }
                  ]
                 },
                 "pitch": 0.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -103.26,
                 "hfov": 8.44
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_d_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_l_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -180,
          "yaw": -172.47,
          "distance": 1
         }
        ],
        "id": "panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_r_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_f_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_b_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_u_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_E80B84CE_EFF8_DD6B_41DB_E526FAAE9A41",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_0_0.png",
                 "height": 135,
                 "class": "ImageResourceLevel",
                 "width": 135
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.43,
              "pitch": -2.43,
              "yaw": -131.33
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "toolTip": "Kitchen"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_0_0_0_map.gif",
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 67
                }
               ]
              },
              "pitch": -2.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -131.33,
              "hfov": 8.43
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_FE2CA124_F023_DC76_41B6_3E3F14E5EB81",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_3_0.png",
                 "height": 135,
                 "class": "ImageResourceLevel",
                 "width": 135
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.43,
              "pitch": -2.26,
              "yaw": -172.47
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_3_0_0_map.gif",
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 67
                }
               ]
              },
              "pitch": -2.26,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -172.47,
              "hfov": 8.43
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_d_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_l_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 179.13,
       "yaw": 118.55,
       "distance": 1
      },
      {
       "panorama": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
       "class": "AdjacentPanorama",
       "backwardYaw": 153.15,
       "yaw": -125.52,
       "distance": 1
      }
     ],
     "id": "panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_r_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_f_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_b_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_u_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E936EB72_EFF8_AB3B_41C9_9CB4301CFBB9",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_1_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5,
           "pitch": -1.09,
           "yaw": -125.52
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_1_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ]
           },
           "pitch": -1.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -125.52,
           "hfov": 7.5
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E936DB73_EFF8_AB39_41EC_C4227B5962FC",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_0_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5,
           "pitch": 0.3,
           "yaw": 118.55
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "toolTip": "Master Bedroom"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_0_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ]
           },
           "pitch": 0.3,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 118.55,
           "hfov": 7.5
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E936CB73_EFF8_AB39_41DE_3A2EFE5E3494",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_2_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5,
           "pitch": -0.57,
           "yaw": -148.88
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 4)",
           "toolTip": "Bathroom"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_2_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ]
           },
           "pitch": -0.57,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -148.88,
           "hfov": 7.5
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_d_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_l_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 177.38,
    "yaw": 24.06,
    "distance": 1
   },
   {
    "panorama": {
     "mapLocations": [
      {
       "y": 441,
       "class": "PanoramaMapLocation",
       "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
       "angle": -178.35,
       "x": 348
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "Living Room",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
       "class": "AdjacentPanorama",
       "backwardYaw": 153.15,
       "yaw": 15.69,
       "distance": 1
      }
     ],
     "id": "panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_r_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_f_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_b_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_u_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E7A27DDD_EFF8_AF69_419C_63A63CD53A02",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_1_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5,
           "pitch": -0.39,
           "yaw": -55.96
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "toolTip": "Kitchen"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_1_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ]
           },
           "pitch": -0.39,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -55.96,
           "hfov": 7.5
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E7A24DDD_EFF8_AF69_41D8_E073BAB2B12B",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_0_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5,
           "pitch": -1.09,
           "yaw": 15.69
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_0_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ]
           },
           "pitch": -1.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 15.69,
           "hfov": 7.5
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_d_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_l_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 2.88,
    "yaw": -22.66,
    "distance": 1
   }
  ],
  "id": "panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8AD5E57_EFF8_6D79_41D0_3B137C831715",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_2_0.png",
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 120
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.49,
        "pitch": -2.83,
        "yaw": -22.66
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "toolTip": "Living Room"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_2_0_0_map.gif",
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 60
          }
         ]
        },
        "pitch": -2.83,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.66,
        "hfov": 7.49
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8AD4E57_EFF8_6D79_41E4_6F5EADF5F351",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_3_0.png",
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 120
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.49,
        "pitch": -2.14,
        "yaw": 24.06
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "toolTip": "Kitchen"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_3_0_0_map.gif",
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 60
          }
         ]
        },
        "pitch": -2.14,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 24.06,
        "hfov": 7.49
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_t.jpg"
   }
  ]
 },
 {
  "buttonMoveRight": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "buttonZoomIn": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveDown": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonZoomOut": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonRestart": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonPlayRight": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonPlayPause": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "toggle",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration"
 },
 {
  "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "viewerArea": "this.MapViewer",
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
 },
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_9CBE2AFD_B9B2_4C0B_41C1_8D5261CE77E8",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9CBE2AFD_B9B2_4C0B_41C1_8D5261CE77E8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.35,
   "class": "PanoramaCameraPosition",
   "yaw": -26.85
  },
  "id": "panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_camera",
  "timeToIdle": 1000
 },
 "this.panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B",
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_9C82F0BC_B9B3_DC09_41D8_49C835F012D5",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9C82F0BC_B9B3_DC09_41D8_49C835F012D5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 3.14,
   "class": "PanoramaCameraPosition",
   "yaw": -177.12
  },
  "id": "panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_camera",
  "timeToIdle": 1000
 },
 "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_9C4BA9DA_B9B3_CC0E_41E5_6A37EDF3E33C",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9C4BA9DA_B9B3_CC0E_41E5_6A37EDF3E33C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -1.57,
   "class": "PanoramaCameraPosition",
   "yaw": -2.62
  },
  "id": "panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_camera",
  "timeToIdle": 1000
 },
 "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_9C1E7ED8_B9B3_C409_41D3_9990B48B5D13",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9C1E7ED8_B9B3_C409_41D3_9990B48B5D13",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -1.92,
   "class": "PanoramaCameraPosition",
   "yaw": -0.87
  },
  "id": "panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_camera",
  "timeToIdle": 1000
 },
 "this.panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D",
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_9FF9BFBE_B9B2_4409_41E1_8FE54A8A67DC",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9FF9BFBE_B9B2_4409_41E1_8FE54A8A67DC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_camera",
  "timeToIdle": 1000
 },
 "this.panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6",
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F946E60E_F023_6432_41E7_F30843AD06F6",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_F946E60E_F023_6432_41E7_F30843AD06F6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_camera",
  "timeToIdle": 1000
 },
 {
  "items": [
   {
    "media": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_E735B8C8_F351_FF9A_41DE_4B6360CD432D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_camera",
    "id": "PanoramaPlayListItem_E735B8C8_F351_FF9A_41DE_4B6360CD432D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_E73638C8_F351_FF9A_41C3_D9DC50CA1CB7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_camera",
    "id": "PanoramaPlayListItem_E73638C8_F351_FF9A_41C3_D9DC50CA1CB7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_E73648C8_F351_FF9A_41AF_11E9B485A025, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_camera",
    "id": "PanoramaPlayListItem_E73648C8_F351_FF9A_41AF_11E9B485A025",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_E736E8C9_F351_FF9A_41D4_2B863DFC755F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_camera",
    "id": "PanoramaPlayListItem_E736E8C9_F351_FF9A_41D4_2B863DFC755F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_E73768C9_F351_FF9A_41EC_42596CAF0761, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_camera",
    "id": "PanoramaPlayListItem_E73768C9_F351_FF9A_41EC_42596CAF0761",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_E73798CA_F351_FF9E_41E3_2A261C462F5A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_camera",
    "id": "PanoramaPlayListItem_E73798CA_F351_FF9E_41E3_2A261C462F5A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
 {
  "items": [
   {
    "media": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "class": "PlayList",
  "id": "playList_E734E8C7_F351_FF96_41EC_B2FA8292B7F7"
 },
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC",
  "audio": {
   "oggUrl": "media/audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC.mp3"
  }
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "minHeight": 50,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 100,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 1,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "playbackBarHeadOpacity": 1,
  "progressHeight": 20,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 2,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBottom": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 20,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBorderRadius": 4,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderRadius": 4,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "horizontalAlign": "center",
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "horizontalAlign": "center",
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "layout": "vertical",
      "minHeight": 20,
      "borderSize": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "minWidth": 20,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "middle",
      "overflow": "hidden",
      "paddingTop": 0,
      "shadow": false,
      "paddingBottom": 0,
      "scrollBarColor": "#000000",
      "gap": 4,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "backgroundOpacity": 0,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "width": 40,
      "borderRadius": 0,
      "contentOpaque": false,
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "backgroundOpacity": 0,
      "minHeight": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": true,
      "cursor": "hand",
      "paddingBottom": 0,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "width": 40,
      "height": 40,
      "horizontalAlign": "center",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "borderRadius": 0,
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "layout": "horizontal",
    "minHeight": 20,
    "borderSize": 0,
    "paddingLeft": 0,
    "minWidth": 360,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "hidden",
    "paddingTop": 0,
    "shadow": false,
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "height": "95.07%",
    "backgroundOpacity": 0,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "width": 360,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingRight": 0
   }
  ],
  "minHeight": 1,
  "bottom": "0%",
  "layout": "horizontal",
  "borderSize": 0,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "middle",
  "overflow": "scroll",
  "paddingTop": 0,
  "shadow": false,
  "left": "0%",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 142,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "width": "100%",
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "minHeight": 1,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 1,
  "bottom": "1.89%",
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBorderSize": 2,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 1,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 2,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "playbackBarHeadOpacity": 1,
  "progressHeight": 20,
  "progressBackgroundColorDirection": "vertical",
  "height": "23.586%",
  "progressBorderSize": 2,
  "id": "MapViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBottom": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 20,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "21.267%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBorderRadius": 4,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "right": "1.27%",
  "playbackBarBorderRadius": 4,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "layout": "absolute",
 "minHeight": 20,
 "start": "this.playAudioList([this.audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC]); this.mainPlayList.set('selectedIndex', 0); this.playList_E734E8C7_F351_FF96_41EC_B2FA8292B7F7.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "shadow": false,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "unregisterKey": function(key){    delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){    return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){    window[key] = value; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){    return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); }
 },
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingRight": 0
})
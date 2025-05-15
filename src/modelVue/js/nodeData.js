export const nodeData =
    {
        "nodes": [
            {
                "id": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "type": "start-v",
                "x": 246.25,
                "y": 187.50000000000003,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "startInput": ""
                }
            },
            {
                "id": "2d627d7e-5095-41fd-b483-22f75f873695",
                "type": "know-v",
                "x": 745,
                "y": -210,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "cfb38e42-b8f8-4ab4-a1dc-308aa539800d",
                "type": "llm-v",
                "x": 745,
                "y": -110,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "79995efc-5c03-4659-8dc6-eca89a399c99",
                "type": "agent-v",
                "x": 745,
                "y": -10,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "01d3cf34-7afd-4c23-b1f7-5514105584cb",
                "type": "knowledge-v",
                "x": 745,
                "y": 90,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "95649741-6fba-4a07-88c6-4b8ab7d34844",
                "type": "code-v",
                "x": 745,
                "y": 190,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "1fef851f-b3e5-43e6-bc39-901b4cdb1afc",
                "type": "template-v",
                "x": 745,
                "y": 290,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "fd5f12b4-61c8-4ac8-bbe3-85330915f212",
                "type": "http-v",
                "x": 745,
                "y": 390,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "e766e3cb-2724-4ddd-b560-ea4f27798755",
                "type": "branch-v",
                "x": 745,
                "y": 490,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "26eb7d90-de4d-4f0e-9c6f-6cba94d34a03",
                "type": "update-v",
                "x": 745,
                "y": 590,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "b099605c-2e52-455f-bfb2-3012b74f27a1",
                "type": "end-v",
                "x": 1376.625,
                "y": 182.6249999999999,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            }
        ],
        "edges": [
            {
                "id": "7c76e7a4-f77a-4a08-9ca6-569c988a93df",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "2d627d7e-5095-41fd-b483-22f75f873695",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_2d627d7e-5095-41fd-b483-22f75f873695",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": -210
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": -210
                    },
                    {
                        "x": 625,
                        "y": -210
                    }
                ]
            },
            {
                "id": "ace148d6-0566-494a-9418-23e3452972a1",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "cfb38e42-b8f8-4ab4-a1dc-308aa539800d",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_cfb38e42-b8f8-4ab4-a1dc-308aa539800d",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": -110
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": -110
                    },
                    {
                        "x": 625,
                        "y": -110
                    }
                ]
            },
            {
                "id": "2402bfcf-2960-4c43-a0d9-df3137d16c8f",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "79995efc-5c03-4659-8dc6-eca89a399c99",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_79995efc-5c03-4659-8dc6-eca89a399c99",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": -10
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": -10
                    },
                    {
                        "x": 625,
                        "y": -10
                    }
                ]
            },
            {
                "id": "7dfcb66b-424f-449e-8690-8c093aa5d926",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "01d3cf34-7afd-4c23-b1f7-5514105584cb",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_01d3cf34-7afd-4c23-b1f7-5514105584cb",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": 90
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": 90
                    },
                    {
                        "x": 625,
                        "y": 90
                    }
                ]
            },
            {
                "id": "27b430c7-9621-4390-9121-1561d664939a",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "95649741-6fba-4a07-88c6-4b8ab7d34844",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_95649741-6fba-4a07-88c6-4b8ab7d34844",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": 190
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": 190
                    },
                    {
                        "x": 625,
                        "y": 190
                    }
                ]
            },
            {
                "id": "e0032328-f543-4845-949e-048f16c1f9a9",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "1fef851f-b3e5-43e6-bc39-901b4cdb1afc",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_1fef851f-b3e5-43e6-bc39-901b4cdb1afc",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": 290
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": 290
                    },
                    {
                        "x": 625,
                        "y": 290
                    }
                ]
            },
            {
                "id": "bfd024bd-245e-4732-aa12-3f689a783959",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "fd5f12b4-61c8-4ac8-bbe3-85330915f212",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_fd5f12b4-61c8-4ac8-bbe3-85330915f212",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": 390
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": 390
                    },
                    {
                        "x": 625,
                        "y": 390
                    }
                ]
            },
            {
                "id": "9112234e-3483-49bc-9f09-53980147a0ad",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "e766e3cb-2724-4ddd-b560-ea4f27798755",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_e766e3cb-2724-4ddd-b560-ea4f27798755",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": 490
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": 490
                    },
                    {
                        "x": 625,
                        "y": 490
                    }
                ]
            },
            {
                "id": "6d2dd7e2-e406-43af-b447-da1c52866c78",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "26eb7d90-de4d-4f0e-9c6f-6cba94d34a03",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_26eb7d90-de4d-4f0e-9c6f-6cba94d34a03",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 625,
                    "y": 590
                },
                "pointsList": [
                    {
                        "x": 366.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 466.25,
                        "y": 187.50000000000003
                    },
                    {
                        "x": 525,
                        "y": 590
                    },
                    {
                        "x": 625,
                        "y": 590
                    }
                ]
            },
            {
                "id": "adf7fe05-46cb-45ef-b13b-85e8cdf235c8",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "95649741-6fba-4a07-88c6-4b8ab7d34844",
                "targetNodeId": "b099605c-2e52-455f-bfb2-3012b74f27a1",
                "sourceAnchorId": "right_95649741-6fba-4a07-88c6-4b8ab7d34844",
                "targetAnchorId": "left_b099605c-2e52-455f-bfb2-3012b74f27a1",
                "startPoint": {
                    "x": 865,
                    "y": 190
                },
                "endPoint": {
                    "x": 1256.625,
                    "y": 182.6249999999999
                },
                "pointsList": [
                    {
                        "x": 865,
                        "y": 190
                    },
                    {
                        "x": 965,
                        "y": 190
                    },
                    {
                        "x": 1156.625,
                        "y": 182.6249999999999
                    },
                    {
                        "x": 1256.625,
                        "y": 182.6249999999999
                    }
                ]
            }
        ]
    }

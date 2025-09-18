export const nodeData =
    {
        "nodes": [
            {
                "id": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "type": "start-v",
                "x": 957.3749999999994,
                "y": -295.2339743589739,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "startInput": ""
                }
            },
            {
                "id": "b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "type": "branch-v",
                "x": 1327.8878205128199,
                "y": -293.95192307692264,
                "properties": {
                    "width": 240,
                    "height": 100,
                    "judgmentList": [
                        {
                            "name": "IF"
                        },
                        {
                            "name": "ELSE"
                        }
                    ],
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "224ede7b-51c4-4c67-9701-06bd3779e87d",
                "type": "llm-v",
                "x": 1777.8878205128199,
                "y": -410.6185897435893,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "type": "knowledge-v",
                "x": 1777.8878205128199,
                "y": -177.28525641025595,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "0ffad839-6dc8-420d-8a3e-d3fff18234c3",
                "type": "http-v",
                "x": 1327.8878205128199,
                "y": -193.95192307692264,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "4c5c3aaf-5515-4bf2-a0e9-00cc708368c0",
                "type": "code-v",
                "x": 1327.8878205128199,
                "y": -93.95192307692264,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "9f7b42f5-1cb5-4bf1-9115-992839c58bb1",
                "type": "agg-v",
                "x": 1327.8878205128199,
                "y": 6.04807692307736,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "9fcbbd74-ed53-4032-9480-2f3b69461c58",
                "type": "domEx-v",
                "x": 1327.8878205128199,
                "y": 106.04807692307736,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "c47fdf00-12b8-4ff2-a651-c7ca7754a177",
                "type": "end-v",
                "x": 2150.964743589743,
                "y": -179.84935897435852,
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
                "id": "c58e2e22-a405-4bb8-b943-a57ef4a9fc1a",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "startPoint": {
                    "x": 1077.374999999999,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": -293.95192307692264
                },
                "pointsList": [
                    {
                        "x": 1077.374999999999,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": -293.95192307692264
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": -293.95192307692264
                    }
                ]
            },
            {
                "id": "e492746c-e605-4a28-b1fd-08057fbf56ef",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "targetNodeId": "224ede7b-51c4-4c67-9701-06bd3779e87d",
                "sourceAnchorId": "right_0_b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "targetAnchorId": "left_224ede7b-51c4-4c67-9701-06bd3779e87d",
                "startPoint": {
                    "x": 1447.8878205128199,
                    "y": -310.6185897435893
                },
                "endPoint": {
                    "x": 1657.8878205128199,
                    "y": -410.6185897435893
                },
                "pointsList": [
                    {
                        "x": 1447.8878205128199,
                        "y": -310.6185897435893
                    },
                    {
                        "x": 1547.8878205128199,
                        "y": -310.6185897435893
                    },
                    {
                        "x": 1557.8878205128199,
                        "y": -410.6185897435893
                    },
                    {
                        "x": 1657.8878205128199,
                        "y": -410.6185897435893
                    }
                ]
            },
            {
                "id": "2fd81286-2e84-49d3-b784-e26f78667ae6",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "targetNodeId": "b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "sourceAnchorId": "right_1_b2d6ee63-3bf1-4905-a12d-fcf12eefbde5",
                "targetAnchorId": "left_b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "startPoint": {
                    "x": 1447.8878205128199,
                    "y": -277.28525641025595
                },
                "endPoint": {
                    "x": 1657.8878205128199,
                    "y": -177.28525641025595
                },
                "pointsList": [
                    {
                        "x": 1447.8878205128199,
                        "y": -277.28525641025595
                    },
                    {
                        "x": 1547.8878205128199,
                        "y": -277.28525641025595
                    },
                    {
                        "x": 1557.8878205128199,
                        "y": -177.28525641025595
                    },
                    {
                        "x": 1657.8878205128199,
                        "y": -177.28525641025595
                    }
                ]
            },
            {
                "id": "a386599b-f3ab-4e08-affc-2626bc36d484",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "0ffad839-6dc8-420d-8a3e-d3fff18234c3",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_0ffad839-6dc8-420d-8a3e-d3fff18234c3",
                "startPoint": {
                    "x": 1077.374999999999,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": -193.95192307692264
                },
                "pointsList": [
                    {
                        "x": 1077.374999999999,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": -193.95192307692264
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": -193.95192307692264
                    }
                ]
            },
            {
                "id": "9adf1541-39c0-43e6-8e39-dce7e2277abc",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "4c5c3aaf-5515-4bf2-a0e9-00cc708368c0",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_4c5c3aaf-5515-4bf2-a0e9-00cc708368c0",
                "startPoint": {
                    "x": 1077.374999999999,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": -93.95192307692264
                },
                "pointsList": [
                    {
                        "x": 1077.374999999999,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": -93.95192307692264
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": -93.95192307692264
                    }
                ]
            },
            {
                "id": "354d37d4-cf77-4b50-9bef-8f2dfba6110e",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "9f7b42f5-1cb5-4bf1-9115-992839c58bb1",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_9f7b42f5-1cb5-4bf1-9115-992839c58bb1",
                "startPoint": {
                    "x": 1077.374999999999,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": 6.04807692307736
                },
                "pointsList": [
                    {
                        "x": 1077.374999999999,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": 6.04807692307736
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": 6.04807692307736
                    }
                ]
            },
            {
                "id": "57b689ac-388d-43d3-a607-ae4122f6e67a",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "9fcbbd74-ed53-4032-9480-2f3b69461c58",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_9fcbbd74-ed53-4032-9480-2f3b69461c58",
                "startPoint": {
                    "x": 1077.374999999999,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": 106.04807692307736
                },
                "pointsList": [
                    {
                        "x": 1077.374999999999,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": 106.04807692307736
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": 106.04807692307736
                    }
                ]
            },
            {
                "id": "aa05ec5b-4190-4d07-bf5a-c82493cd2103",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "targetNodeId": "c47fdf00-12b8-4ff2-a651-c7ca7754a177",
                "sourceAnchorId": "right_b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "targetAnchorId": "left_c47fdf00-12b8-4ff2-a651-c7ca7754a177",
                "startPoint": {
                    "x": 1897.8878205128199,
                    "y": -177.28525641025595
                },
                "endPoint": {
                    "x": 2030.9647435897432,
                    "y": -179.84935897435852
                },
                "pointsList": [
                    {
                        "x": 1897.8878205128199,
                        "y": -177.28525641025595
                    },
                    {
                        "x": 1997.8878205128199,
                        "y": -177.28525641025595
                    },
                    {
                        "x": 1930.9647435897432,
                        "y": -179.84935897435852
                    },
                    {
                        "x": 2030.9647435897432,
                        "y": -179.84935897435852
                    }
                ]
            }
        ]
    }

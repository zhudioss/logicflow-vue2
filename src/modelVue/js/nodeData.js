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
                "id": "fa8941e6-2274-4aab-9c65-b8e7b43b1f95",
                "type": "end-v",
                "x": 2180.4519230769224,
                "y": -409.336538461538,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "0969ef03-e03f-4709-a4e2-05452c81a989",
                "type": "end-v",
                "x": 2180.451923076923,
                "y": -178.56730769230722,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "0cf771ff-6978-4e87-a6af-91da8a71dcdb",
                "type": "code-v",
                "x": 1327.8878205128199,
                "y": -163.95192307692264,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "359950e3-1452-46af-b654-96a1edc7771f",
                "type": "http-v",
                "x": 1327.8878205128199,
                "y": -63.95192307692264,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "678f3ada-8bcb-45b6-8903-f1c205ba30c1",
                "type": "agg-v",
                "x": 1327.8878205128199,
                "y": 36.04807692307736,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "0013e45d-d2f8-4bdb-99bc-c4e50db087a2",
                "type": "domEx-v",
                "x": 1327.8878205128199,
                "y": 136.04807692307736,
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
                "id": "05e1ce49-58ce-43f6-8ccf-ece68eef9018",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "224ede7b-51c4-4c67-9701-06bd3779e87d",
                "targetNodeId": "fa8941e6-2274-4aab-9c65-b8e7b43b1f95",
                "sourceAnchorId": "right_224ede7b-51c4-4c67-9701-06bd3779e87d",
                "targetAnchorId": "left_fa8941e6-2274-4aab-9c65-b8e7b43b1f95",
                "startPoint": {
                    "x": 1897.8878205128199,
                    "y": -410.6185897435893
                },
                "endPoint": {
                    "x": 2060.4519230769224,
                    "y": -409.336538461538
                },
                "pointsList": [
                    {
                        "x": 1897.8878205128199,
                        "y": -410.6185897435893
                    },
                    {
                        "x": 1997.8878205128199,
                        "y": -410.6185897435893
                    },
                    {
                        "x": 1960.4519230769224,
                        "y": -409.336538461538
                    },
                    {
                        "x": 2060.4519230769224,
                        "y": -409.336538461538
                    }
                ]
            },
            {
                "id": "64d7d312-913c-4104-9220-79461a76e875",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "targetNodeId": "0969ef03-e03f-4709-a4e2-05452c81a989",
                "sourceAnchorId": "right_b6df5279-3db7-4b49-af84-2ecca535dfb8",
                "targetAnchorId": "left_0969ef03-e03f-4709-a4e2-05452c81a989",
                "startPoint": {
                    "x": 1897.8878205128199,
                    "y": -177.28525641025595
                },
                "endPoint": {
                    "x": 2060.451923076923,
                    "y": -178.56730769230722
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
                        "x": 1960.4519230769229,
                        "y": -178.56730769230722
                    },
                    {
                        "x": 2060.451923076923,
                        "y": -178.56730769230722
                    }
                ]
            },
            {
                "id": "95e29d51-0271-44d6-a9c6-f4580c6bd22d",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "0cf771ff-6978-4e87-a6af-91da8a71dcdb",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_0cf771ff-6978-4e87-a6af-91da8a71dcdb",
                "startPoint": {
                    "x": 1077.3749999999995,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": -163.95192307692264
                },
                "pointsList": [
                    {
                        "x": 1077.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": -163.95192307692264
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": -163.95192307692264
                    }
                ]
            },
            {
                "id": "ac07f349-05cf-4eb7-96a9-e787ff045b8f",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "359950e3-1452-46af-b654-96a1edc7771f",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_359950e3-1452-46af-b654-96a1edc7771f",
                "startPoint": {
                    "x": 1077.3749999999995,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": -63.95192307692264
                },
                "pointsList": [
                    {
                        "x": 1077.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": -63.95192307692264
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": -63.95192307692264
                    }
                ]
            },
            {
                "id": "3e1e5072-9525-46db-9e74-2edb72426d4d",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "678f3ada-8bcb-45b6-8903-f1c205ba30c1",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_678f3ada-8bcb-45b6-8903-f1c205ba30c1",
                "startPoint": {
                    "x": 1077.3749999999995,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": 36.04807692307736
                },
                "pointsList": [
                    {
                        "x": 1077.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": 36.04807692307736
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": 36.04807692307736
                    }
                ]
            },
            {
                "id": "db273ac4-b5e6-4f56-8096-40e54c2e7406",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "0013e45d-d2f8-4bdb-99bc-c4e50db087a2",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_0013e45d-d2f8-4bdb-99bc-c4e50db087a2",
                "startPoint": {
                    "x": 1077.3749999999995,
                    "y": -295.2339743589739
                },
                "endPoint": {
                    "x": 1207.8878205128199,
                    "y": 136.04807692307736
                },
                "pointsList": [
                    {
                        "x": 1077.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1177.3749999999995,
                        "y": -295.2339743589739
                    },
                    {
                        "x": 1107.8878205128199,
                        "y": 136.04807692307736
                    },
                    {
                        "x": 1207.8878205128199,
                        "y": 136.04807692307736
                    }
                ]
            }
        ]
    }

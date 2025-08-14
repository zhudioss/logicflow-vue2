export const nodeData =
    {
        "nodes": [
            {
                "id": "1",
                "type": "start-v",
                "x": 86.62500000000003,
                "y": 348.75000000000017,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "startInput": ""
                }
            },
            {
                "id": "2",
                "type": "end-v",
                "x": 986.625,
                "y": 350.0000000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "3",
                "type": "http-v",
                "x": 536.625,
                "y": 348.75000000000017,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "4",
                "type": "agg-v",
                "x": 536.625,
                "y": 448.75000000000017,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            }
        ],
        "edges": [
            {
                "id": "ce632dc9-92ff-4ed4-b49e-211096a1e90e",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "1",
                "targetNodeId": "3",
                "sourceAnchorId": "right_1",
                "targetAnchorId": "left_3",
                "startPoint": {
                    "x": 206.62500000000003,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 416.625,
                    "y": 348.75000000000017
                },
                "pointsList": [
                    {
                        "x": 206.62500000000003,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 316.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 416.625,
                        "y": 348.75000000000017
                    }
                ]
            },
            {
                "id": "73e483ce-e4ed-40c4-ac7a-2e23809bae4d",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "3",
                "targetNodeId": "2",
                "sourceAnchorId": "right_3",
                "targetAnchorId": "left_2",
                "startPoint": {
                    "x": 656.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 656.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 756.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 766.625,
                        "y": 350.0000000000001
                    },
                    {
                        "x": 866.625,
                        "y": 350.0000000000001
                    }
                ]
            },
            {
                "id": "137b86d0-fae2-4eaf-86b0-d755acd01e0b",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "1",
                "targetNodeId": "4",
                "sourceAnchorId": "right_1",
                "targetAnchorId": "left_4",
                "startPoint": {
                    "x": 206.62500000000003,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 416.625,
                    "y": 448.75000000000017
                },
                "pointsList": [
                    {
                        "x": 206.62500000000003,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 316.625,
                        "y": 448.75000000000017
                    },
                    {
                        "x": 416.625,
                        "y": 448.75000000000017
                    }
                ]
            },
            {
                "id": "0a6ae2e8-fb45-4c8b-a5d8-22f42468cb51",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "4",
                "targetNodeId": "2",
                "sourceAnchorId": "right_4",
                "targetAnchorId": "left_2",
                "startPoint": {
                    "x": 656.625,
                    "y": 448.75000000000017
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 656.625,
                        "y": 448.75000000000017
                    },
                    {
                        "x": 756.625,
                        "y": 448.75000000000017
                    },
                    {
                        "x": 766.625,
                        "y": 350.0000000000001
                    },
                    {
                        "x": 866.625,
                        "y": 350.0000000000001
                    }
                ]
            }
        ]
    }

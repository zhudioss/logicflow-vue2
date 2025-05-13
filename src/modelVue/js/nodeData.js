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
                "id": "67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "type": "end-v",
                "x": 1263.75,
                "y": 185.00000000000003,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "2d627d7e-5095-41fd-b483-22f75f873695",
                "type": "know-v",
                "x": 745,
                "y": -78.75,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "c7564716-a644-4413-a150-7741f9c6b201",
                "type": "llm-v",
                "x": 746.25,
                "y": 63.75,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "e7524881-3552-42ea-af6a-a9d47af40390",
                "type": "agent-v",
                "x": 746.25,
                "y": 207.5,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "cab71c89-03bc-4068-9062-43ca7c983a35",
                "type": "knowledge-v",
                "x": 746.25,
                "y": 341.25,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "fbc3eb42-82fe-476c-a523-c9dff1b9d29a",
                "type": "code-v",
                "x": 746.25,
                "y": 487.5,
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
                    "y": -78.75
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
                        "y": -78.75
                    },
                    {
                        "x": 625,
                        "y": -78.75
                    }
                ]
            },
            {
                "id": "28187005-16dc-4560-93c6-34580c08abf8",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "c7564716-a644-4413-a150-7741f9c6b201",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_c7564716-a644-4413-a150-7741f9c6b201",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 626.25,
                    "y": 63.75
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
                        "x": 526.25,
                        "y": 63.75
                    },
                    {
                        "x": 626.25,
                        "y": 63.75
                    }
                ]
            },
            {
                "id": "39c4ae2a-a76e-4a1c-9725-758403e6ed02",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "e7524881-3552-42ea-af6a-a9d47af40390",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_e7524881-3552-42ea-af6a-a9d47af40390",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 626.25,
                    "y": 207.5
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
                        "x": 526.25,
                        "y": 207.5
                    },
                    {
                        "x": 626.25,
                        "y": 207.5
                    }
                ]
            },
            {
                "id": "44cc3b24-585b-4013-bf3f-3c274269ff71",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "cab71c89-03bc-4068-9062-43ca7c983a35",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_cab71c89-03bc-4068-9062-43ca7c983a35",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 626.25,
                    "y": 341.25
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
                        "x": 526.25,
                        "y": 341.25
                    },
                    {
                        "x": 626.25,
                        "y": 341.25
                    }
                ]
            },
            {
                "id": "51667b5d-6be8-4665-b1e4-a3db8435cff3",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetNodeId": "fbc3eb42-82fe-476c-a523-c9dff1b9d29a",
                "sourceAnchorId": "right_ec241ba9-79a2-47b3-8b64-23baecb093c9",
                "targetAnchorId": "left_fbc3eb42-82fe-476c-a523-c9dff1b9d29a",
                "startPoint": {
                    "x": 366.25,
                    "y": 187.50000000000003
                },
                "endPoint": {
                    "x": 626.25,
                    "y": 487.5
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
                        "x": 526.25,
                        "y": 487.5
                    },
                    {
                        "x": 626.25,
                        "y": 487.5
                    }
                ]
            },
            {
                "id": "44f5bc7b-9394-41ef-8642-e05a3e6ef0e2",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "2d627d7e-5095-41fd-b483-22f75f873695",
                "targetNodeId": "67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "sourceAnchorId": "right_2d627d7e-5095-41fd-b483-22f75f873695",
                "targetAnchorId": "left_67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "startPoint": {
                    "x": 865,
                    "y": -78.75
                },
                "endPoint": {
                    "x": 1143.75,
                    "y": 185.00000000000003
                },
                "pointsList": [
                    {
                        "x": 865,
                        "y": -78.75
                    },
                    {
                        "x": 965,
                        "y": -78.75
                    },
                    {
                        "x": 1043.75,
                        "y": 185.00000000000003
                    },
                    {
                        "x": 1143.75,
                        "y": 185.00000000000003
                    }
                ]
            },
            {
                "id": "215be29c-ab7a-4eb8-a1a5-9c78cd505388",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "c7564716-a644-4413-a150-7741f9c6b201",
                "targetNodeId": "67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "sourceAnchorId": "right_c7564716-a644-4413-a150-7741f9c6b201",
                "targetAnchorId": "left_67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "startPoint": {
                    "x": 866.25,
                    "y": 63.75
                },
                "endPoint": {
                    "x": 1143.75,
                    "y": 185.00000000000003
                },
                "pointsList": [
                    {
                        "x": 866.25,
                        "y": 63.75
                    },
                    {
                        "x": 966.25,
                        "y": 63.75
                    },
                    {
                        "x": 1043.75,
                        "y": 185.00000000000003
                    },
                    {
                        "x": 1143.75,
                        "y": 185.00000000000003
                    }
                ]
            },
            {
                "id": "c56b6153-825d-47ef-a5e2-b4e083f33142",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "e7524881-3552-42ea-af6a-a9d47af40390",
                "targetNodeId": "67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "sourceAnchorId": "right_e7524881-3552-42ea-af6a-a9d47af40390",
                "targetAnchorId": "left_67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "startPoint": {
                    "x": 866.25,
                    "y": 207.5
                },
                "endPoint": {
                    "x": 1143.75,
                    "y": 185.00000000000003
                },
                "pointsList": [
                    {
                        "x": 866.25,
                        "y": 207.5
                    },
                    {
                        "x": 966.25,
                        "y": 207.5
                    },
                    {
                        "x": 1043.75,
                        "y": 185.00000000000003
                    },
                    {
                        "x": 1143.75,
                        "y": 185.00000000000003
                    }
                ]
            },
            {
                "id": "e4b97087-c7b3-45dc-8dd9-8b43438c7d1a",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "cab71c89-03bc-4068-9062-43ca7c983a35",
                "targetNodeId": "67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "sourceAnchorId": "right_cab71c89-03bc-4068-9062-43ca7c983a35",
                "targetAnchorId": "left_67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "startPoint": {
                    "x": 866.25,
                    "y": 341.25
                },
                "endPoint": {
                    "x": 1143.75,
                    "y": 185.00000000000003
                },
                "pointsList": [
                    {
                        "x": 866.25,
                        "y": 341.25
                    },
                    {
                        "x": 966.25,
                        "y": 341.25
                    },
                    {
                        "x": 1043.75,
                        "y": 185.00000000000003
                    },
                    {
                        "x": 1143.75,
                        "y": 185.00000000000003
                    }
                ]
            },
            {
                "id": "f63863ed-fb76-49bf-b2f8-6ff005c875f8",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "fbc3eb42-82fe-476c-a523-c9dff1b9d29a",
                "targetNodeId": "67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "sourceAnchorId": "right_fbc3eb42-82fe-476c-a523-c9dff1b9d29a",
                "targetAnchorId": "left_67da2ea7-0ecb-41ae-ab60-14f8c2708f15",
                "startPoint": {
                    "x": 866.25,
                    "y": 487.5
                },
                "endPoint": {
                    "x": 1143.75,
                    "y": 185.00000000000003
                },
                "pointsList": [
                    {
                        "x": 866.25,
                        "y": 487.5
                    },
                    {
                        "x": 966.25,
                        "y": 487.5
                    },
                    {
                        "x": 1043.75,
                        "y": 185.00000000000003
                    },
                    {
                        "x": 1143.75,
                        "y": 185.00000000000003
                    }
                ]
            }
        ]
    }

export const nodeData = {
    "nodes": [
        {
            "id": "1",
            "type": "start-v",
            "x": 188,
            "y": 488,
            "properties": {
                "text": "Hello Vue2!",
                "width": 300,
                "height": 189,
            }
        },
        {
            "id": "a6776c04-6307-4c0a-81d2-39ebaf98773f",
            "type": "know-v",
            "x": 727,
            "y": 383,
            "properties": {
                "width": 300,
                "height": 600,
                "anchorsOffset": [
                    [
                        -150,
                        0
                    ],
                    [
                        150,
                        0
                    ]
                ],
            }
        },
        {
            "id": "6fe0b31e-09af-497b-8f23-dbe6ffca1f16",
            "type": "end-v",
            "x": 1256,
            "y": 272,
            "properties": {
                "width": 300,
                "height": 189,
                "anchorsOffset": [
                    [
                        -150,
                        0
                    ]
                ],
            }
        }
    ],
    "edges": [
        {
            "id": "5d7482d7-9a0f-438f-ab56-b83062ffc6dc",
            "type": "EDGE_BEZIER",
            "properties": {},
            "sourceNodeId": "1",
            "targetNodeId": "a6776c04-6307-4c0a-81d2-39ebaf98773f",
            "sourceAnchorId": "1_0",
            "targetAnchorId": "a6776c04-6307-4c0a-81d2-39ebaf98773f_0",
            "startPoint": {
                "x": 338,
                "y": 488
            },
            "endPoint": {
                "x": 577,
                "y": 383
            },
            "pointsList": [
                {
                    "x": 338,
                    "y": 488
                },
                {
                    "x": 438,
                    "y": 488
                },
                {
                    "x": 477,
                    "y": 383
                },
                {
                    "x": 577,
                    "y": 383
                }
            ]
        },
        {
            "id": "cb55a32d-8944-420e-a74e-1721c156b6fb",
            "type": "EDGE_BEZIER",
            "properties": {},
            "sourceNodeId": "a6776c04-6307-4c0a-81d2-39ebaf98773f",
            "targetNodeId": "6fe0b31e-09af-497b-8f23-dbe6ffca1f16",
            "sourceAnchorId": "a6776c04-6307-4c0a-81d2-39ebaf98773f_1",
            "targetAnchorId": "6fe0b31e-09af-497b-8f23-dbe6ffca1f16_0",
            "startPoint": {
                "x": 877,
                "y": 383
            },
            "endPoint": {
                "x": 1106,
                "y": 272
            },
            "pointsList": [
                {
                    "x": 877,
                    "y": 383
                },
                {
                    "x": 977,
                    "y": 383
                },
                {
                    "x": 1006,
                    "y": 272
                },
                {
                    "x": 1106,
                    "y": 272
                }
            ]
        }
    ]
}

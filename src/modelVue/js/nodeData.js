export const nodeData = {
    "nodes": [
        {
            "id": "1",
            "type": "start-v",
            "x": 236,
            "y": 363,
            "properties": {
                "text": "Hello Vue2!",
                "width": 300,
                "height": 189,
                "a": 1,
                "b": 2,
                "c": 3
            }
        },
        {
            "id": "a6776c04-6307-4c0a-81d2-39ebaf98773f",
            "type": "know-v",
            "x": 739,
            "y": 364,
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
                "a": 1,
                "b": 2,
                "c": 3
            }
        },
        {
            "id": "6fe0b31e-09af-497b-8f23-dbe6ffca1f16",
            "type": "end-v",
            "x": 1217,
            "y": 364,
            "properties": {
                "width": 300,
                "height": 189,
                "anchorsOffset": [
                    [
                        -150,
                        0
                    ]
                ],
                "a": 1,
                "b": 2,
                "c": 3
            }
        }
    ],
    "edges": [
        {
            "id": "5d7482d7-9a0f-438f-ab56-b83062ffc6dc",
            "type": "NotHighlighted",
            "properties": {},
            "sourceNodeId": "1",
            "targetNodeId": "a6776c04-6307-4c0a-81d2-39ebaf98773f",
            "sourceAnchorId": "1_0",
            "targetAnchorId": "a6776c04-6307-4c0a-81d2-39ebaf98773f_0",
            "startPoint": {
                "x": 386,
                "y": 363
            },
            "endPoint": {
                "x": 589,
                "y": 364
            },
            "pointsList": [
                {
                    "x": 386,
                    "y": 363
                },
                {
                    "x": 486,
                    "y": 363
                },
                {
                    "x": 489,
                    "y": 364
                },
                {
                    "x": 589,
                    "y": 364
                }
            ]
        },
        {
            "id": "cb55a32d-8944-420e-a74e-1721c156b6fb",
            "type": "NotHighlighted",
            "properties": {},
            "sourceNodeId": "a6776c04-6307-4c0a-81d2-39ebaf98773f",
            "targetNodeId": "6fe0b31e-09af-497b-8f23-dbe6ffca1f16",
            "sourceAnchorId": "a6776c04-6307-4c0a-81d2-39ebaf98773f_1",
            "targetAnchorId": "6fe0b31e-09af-497b-8f23-dbe6ffca1f16_0",
            "startPoint": {
                "x": 889,
                "y": 364
            },
            "endPoint": {
                "x": 1067,
                "y": 364
            },
            "pointsList": [
                {
                    "x": 889,
                    "y": 364
                },
                {
                    "x": 989,
                    "y": 364
                },
                {
                    "x": 967,
                    "y": 364
                },
                {
                    "x": 1067,
                    "y": 364
                }
            ]
        }
    ]
}

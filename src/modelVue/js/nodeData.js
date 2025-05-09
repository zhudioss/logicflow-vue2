export const nodeData = {
    "nodes": [
        {
            "id": "node-1",
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
            "id": "node-2",
            "type": "know-v",
            "x": 727,
            "y": 383,
            "properties": {
                "width": 300,
                "height": 600,
                "hideAnchor":'true',
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
            "id": "node-3",
            "type": "end-v",
            "x": 1256,
            "y": 272,
            "properties": {
                "width": 300,
                "height": 189,
                "hideAnchor":'true',
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
            "id": "edges1",
            "type": "EDGE_BEZIER",
            "properties": {},
            "sourceNodeId": "node-1",
            "targetNodeId": "node-2",
            "sourceAnchorId": "node-1_0",
            "targetAnchorId": "node-2_0",
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
            "id": "edges2",
            "type": "EDGE_BEZIER",
            "properties": {},
            "sourceNodeId": "node-2",
            "targetNodeId": "node-3",
            "sourceAnchorId": "node-2_1",
            "targetAnchorId": "node-3_0",
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

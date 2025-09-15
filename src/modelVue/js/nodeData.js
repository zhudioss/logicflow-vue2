export const nodeData =
    {
        "nodes": [
            {
                "id": "9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "type": "start-v",
                "x": 292.5,
                "y": 68.75,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "startInput": ""
                }
            },
            {
                "id": "b6d87207-a854-4471-b19c-a5c24457e25e",
                "type": "branch-v",
                "x": 644.9999999999999,
                "y": 68.75,
                "properties": {
                    "width": 240,
                    "height": 100,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "f402c9f8-a7a6-4575-a74f-1c2b884433f0",
                "type": "code-v",
                "x": 659.9999999999999,
                "y": -146.25,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "2b11a26e-df2b-4b6a-b5a2-c5bae225e7d1",
                "type": "http-v",
                "x": 1110,
                "y": -146.25,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "415d3826-e644-423b-8b21-9ccffd717191",
                "type": "agg-v",
                "x": 651.2499999999999,
                "y": 302.5,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "3b023a78-ecb3-4cf2-a103-2d015c5773c4",
                "type": "domEx-v",
                "x": 1123.75,
                "y": 300,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "9455991b-63a0-4335-bbb6-fda2e1a73573",
                "type": "end-v",
                "x": 1496.25,
                "y": -51.92307692307692,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "cf89e86c-8e35-4d7e-96a9-218ce26c494d",
                "type": "llm-v",
                "x": 1095,
                "y": -51.25,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "ebff2ff4-562d-4e72-a03d-c058fd46054d",
                "type": "knowledge-v",
                "x": 1095,
                "y": 178.75,
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
                "id": "b100cab4-be94-48b6-acc6-c2da416aafe7",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "targetNodeId": "b6d87207-a854-4471-b19c-a5c24457e25e",
                "sourceAnchorId": "right_9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "targetAnchorId": "left_b6d87207-a854-4471-b19c-a5c24457e25e",
                "startPoint": {
                    "x": 412.5,
                    "y": 68.75
                },
                "endPoint": {
                    "x": 524.9999999999999,
                    "y": 68.75
                },
                "pointsList": [
                    {
                        "x": 412.5,
                        "y": 68.75
                    },
                    {
                        "x": 512.5,
                        "y": 68.75
                    },
                    {
                        "x": 424.9999999999999,
                        "y": 68.75
                    },
                    {
                        "x": 524.9999999999999,
                        "y": 68.75
                    }
                ]
            },
            {
                "id": "c7a2e58e-ecf2-4d3c-a18c-416c9b26bb35",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "targetNodeId": "f402c9f8-a7a6-4575-a74f-1c2b884433f0",
                "sourceAnchorId": "right_9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "targetAnchorId": "left_f402c9f8-a7a6-4575-a74f-1c2b884433f0",
                "startPoint": {
                    "x": 412.5,
                    "y": 68.75
                },
                "endPoint": {
                    "x": 539.9999999999999,
                    "y": -146.25
                },
                "pointsList": [
                    {
                        "x": 412.5,
                        "y": 68.75
                    },
                    {
                        "x": 512.5,
                        "y": 68.75
                    },
                    {
                        "x": 439.9999999999999,
                        "y": -146.25
                    },
                    {
                        "x": 539.9999999999999,
                        "y": -146.25
                    }
                ]
            },
            {
                "id": "63166079-79d7-438e-9e8d-6bfdf3e39bdd",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "f402c9f8-a7a6-4575-a74f-1c2b884433f0",
                "targetNodeId": "2b11a26e-df2b-4b6a-b5a2-c5bae225e7d1",
                "sourceAnchorId": "right_f402c9f8-a7a6-4575-a74f-1c2b884433f0",
                "targetAnchorId": "left_2b11a26e-df2b-4b6a-b5a2-c5bae225e7d1",
                "startPoint": {
                    "x": 779.9999999999999,
                    "y": -146.25
                },
                "endPoint": {
                    "x": 990,
                    "y": -146.25
                },
                "pointsList": [
                    {
                        "x": 779.9999999999999,
                        "y": -146.25
                    },
                    {
                        "x": 879.9999999999999,
                        "y": -146.25
                    },
                    {
                        "x": 890,
                        "y": -146.25
                    },
                    {
                        "x": 990,
                        "y": -146.25
                    }
                ]
            },
            {
                "id": "cdf4026f-0d55-4e77-b6f4-68c332449dd8",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "targetNodeId": "415d3826-e644-423b-8b21-9ccffd717191",
                "sourceAnchorId": "right_9290a818-89c0-4c85-8b7e-4602b6d3b69c",
                "targetAnchorId": "left_415d3826-e644-423b-8b21-9ccffd717191",
                "startPoint": {
                    "x": 412.5,
                    "y": 68.75
                },
                "endPoint": {
                    "x": 531.2499999999999,
                    "y": 302.5
                },
                "pointsList": [
                    {
                        "x": 412.5,
                        "y": 68.75
                    },
                    {
                        "x": 512.5,
                        "y": 68.75
                    },
                    {
                        "x": 431.2499999999999,
                        "y": 302.5
                    },
                    {
                        "x": 531.2499999999999,
                        "y": 302.5
                    }
                ]
            },
            {
                "id": "18125828-c85e-4644-8266-0a919a99b768",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "415d3826-e644-423b-8b21-9ccffd717191",
                "targetNodeId": "3b023a78-ecb3-4cf2-a103-2d015c5773c4",
                "sourceAnchorId": "right_415d3826-e644-423b-8b21-9ccffd717191",
                "targetAnchorId": "left_3b023a78-ecb3-4cf2-a103-2d015c5773c4",
                "startPoint": {
                    "x": 771.2499999999999,
                    "y": 302.5
                },
                "endPoint": {
                    "x": 1003.75,
                    "y": 300
                },
                "pointsList": [
                    {
                        "x": 771.2499999999999,
                        "y": 302.5
                    },
                    {
                        "x": 871.2499999999999,
                        "y": 302.5
                    },
                    {
                        "x": 903.75,
                        "y": 300
                    },
                    {
                        "x": 1003.75,
                        "y": 300
                    }
                ]
            },
            {
                "id": "9d3bbba0-824e-4775-b24e-1063857660ba",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b6d87207-a854-4471-b19c-a5c24457e25e",
                "targetNodeId": "cf89e86c-8e35-4d7e-96a9-218ce26c494d",
                "sourceAnchorId": "right_0_b6d87207-a854-4471-b19c-a5c24457e25e",
                "targetAnchorId": "left_cf89e86c-8e35-4d7e-96a9-218ce26c494d",
                "startPoint": {
                    "x": 764.9999999999999,
                    "y": 48.75
                },
                "endPoint": {
                    "x": 975,
                    "y": -51.25
                },
                "pointsList": [
                    {
                        "x": 764.9999999999999,
                        "y": 48.75
                    },
                    {
                        "x": 864.9999999999999,
                        "y": 48.75
                    },
                    {
                        "x": 875,
                        "y": -51.25
                    },
                    {
                        "x": 975,
                        "y": -51.25
                    }
                ]
            },
            {
                "id": "2e27253a-118c-4df5-ba9b-dcbe512d8123",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "cf89e86c-8e35-4d7e-96a9-218ce26c494d",
                "targetNodeId": "9455991b-63a0-4335-bbb6-fda2e1a73573",
                "sourceAnchorId": "right_cf89e86c-8e35-4d7e-96a9-218ce26c494d",
                "targetAnchorId": "left_9455991b-63a0-4335-bbb6-fda2e1a73573",
                "startPoint": {
                    "x": 1215,
                    "y": -51.25
                },
                "endPoint": {
                    "x": 1376.25,
                    "y": -51.92307692307692
                },
                "pointsList": [
                    {
                        "x": 1215,
                        "y": -51.25
                    },
                    {
                        "x": 1315,
                        "y": -51.25
                    },
                    {
                        "x": 1276.25,
                        "y": -51.92307692307692
                    },
                    {
                        "x": 1376.25,
                        "y": -51.92307692307692
                    }
                ]
            },
            {
                "id": "16ea7dfe-9680-4f18-87da-d70ba9726337",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b6d87207-a854-4471-b19c-a5c24457e25e",
                "targetNodeId": "ebff2ff4-562d-4e72-a03d-c058fd46054d",
                "sourceAnchorId": "right_1_b6d87207-a854-4471-b19c-a5c24457e25e",
                "targetAnchorId": "left_ebff2ff4-562d-4e72-a03d-c058fd46054d",
                "startPoint": {
                    "x": 764.9999999999999,
                    "y": 78.75
                },
                "endPoint": {
                    "x": 975,
                    "y": 178.75
                },
                "pointsList": [
                    {
                        "x": 764.9999999999999,
                        "y": 78.75
                    },
                    {
                        "x": 864.9999999999999,
                        "y": 78.75
                    },
                    {
                        "x": 875,
                        "y": 178.75
                    },
                    {
                        "x": 975,
                        "y": 178.75
                    }
                ]
            }
        ]
    }

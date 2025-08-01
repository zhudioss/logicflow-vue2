export const nodeData =
    {
        "nodes": [
            {
                "id": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
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
                "id": "47d25d0b-e4d1-444f-a323-b414b1025ac4",
                "type": "llm-v",
                "x": 536.625,
                "y": 48.7500000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "b3c026e5-2970-44a5-8c4b-0a43dfc16c20",
                "type": "knowledge-v",
                "x": 535.375,
                "y": 252.5000000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "b77c43a8-4e76-4744-b5db-d4d1f7c147ef",
                "type": "code-v",
                "x": 531.625,
                "y": 352.5000000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "cfd8bf1a-187c-4175-af5d-a2ad4b8365a3",
                "type": "http-v",
                "x": 534.125,
                "y": 580.0000000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "b6434062-4df9-47a8-8fec-606c8c5098b7",
                "type": "branch-v",
                "x": 532.875,
                "y": 696.2500000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "06a699f4-4775-4150-a589-57a4dc6fe355",
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
                "id": "364d48a8-1a23-4689-8192-a27b40d6875f",
                "type": "agg-v",
                "x": 531.625,
                "y": 151.25000000000014,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "7f585eb9-4785-48cb-87b6-e4607a1bc5a2",
                "type": "domEx-v",
                "x": 532.875,
                "y": 470.0000000000001,
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
                "id": "dd77180a-f77a-4c5e-ad68-87adef9c6415",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "47d25d0b-e4d1-444f-a323-b414b1025ac4",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_47d25d0b-e4d1-444f-a323-b414b1025ac4",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 416.625,
                    "y": 48.7500000000001
                },
                "pointsList": [
                    {
                        "x": 206.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 316.625,
                        "y": 48.7500000000001
                    },
                    {
                        "x": 416.625,
                        "y": 48.7500000000001
                    }
                ]
            },
            {
                "id": "a1bc84bb-c3e0-46d4-af46-327a8781291b",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "b3c026e5-2970-44a5-8c4b-0a43dfc16c20",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_b3c026e5-2970-44a5-8c4b-0a43dfc16c20",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 415.375,
                    "y": 252.5000000000001
                },
                "pointsList": [
                    {
                        "x": 206.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 315.375,
                        "y": 252.5000000000001
                    },
                    {
                        "x": 415.375,
                        "y": 252.5000000000001
                    }
                ]
            },
            {
                "id": "11141c74-6a40-4275-9a27-32ab02275b3f",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "b77c43a8-4e76-4744-b5db-d4d1f7c147ef",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_b77c43a8-4e76-4744-b5db-d4d1f7c147ef",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 411.625,
                    "y": 352.5000000000001
                },
                "pointsList": [
                    {
                        "x": 206.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 311.625,
                        "y": 352.5000000000001
                    },
                    {
                        "x": 411.625,
                        "y": 352.5000000000001
                    }
                ]
            },
            {
                "id": "bd75275c-9ffd-447a-85bb-3f29ef205115",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "cfd8bf1a-187c-4175-af5d-a2ad4b8365a3",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_cfd8bf1a-187c-4175-af5d-a2ad4b8365a3",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 414.125,
                    "y": 580.0000000000001
                },
                "pointsList": [
                    {
                        "x": 206.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 314.125,
                        "y": 580.0000000000001
                    },
                    {
                        "x": 414.125,
                        "y": 580.0000000000001
                    }
                ]
            },
            {
                "id": "67dfdfc0-78eb-4588-a538-8169824eb32d",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "b6434062-4df9-47a8-8fec-606c8c5098b7",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_b6434062-4df9-47a8-8fec-606c8c5098b7",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 412.875,
                    "y": 696.2500000000001
                },
                "pointsList": [
                    {
                        "x": 206.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 306.625,
                        "y": 348.75000000000017
                    },
                    {
                        "x": 312.875,
                        "y": 696.2500000000001
                    },
                    {
                        "x": 412.875,
                        "y": 696.2500000000001
                    }
                ]
            },
            {
                "id": "638ac7d7-17e8-45f1-b358-7894601eafbd",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b77c43a8-4e76-4744-b5db-d4d1f7c147ef",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_b77c43a8-4e76-4744-b5db-d4d1f7c147ef",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 651.625,
                    "y": 352.5000000000001
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 651.625,
                        "y": 352.5000000000001
                    },
                    {
                        "x": 751.625,
                        "y": 352.5000000000001
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
                "id": "52895c89-6cc6-458f-974a-697615ccc2c4",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "364d48a8-1a23-4689-8192-a27b40d6875f",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_364d48a8-1a23-4689-8192-a27b40d6875f",
                "startPoint": {
                    "x": 206.62500000000003,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 411.625,
                    "y": 151.25000000000014
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
                        "x": 311.625,
                        "y": 151.25000000000014
                    },
                    {
                        "x": 411.625,
                        "y": 151.25000000000014
                    }
                ]
            },
            {
                "id": "ba72bec3-7e33-4001-b8e8-119931cc12c7",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "7f585eb9-4785-48cb-87b6-e4607a1bc5a2",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_7f585eb9-4785-48cb-87b6-e4607a1bc5a2",
                "startPoint": {
                    "x": 206.62500000000003,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 412.875,
                    "y": 470.0000000000001
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
                        "x": 312.875,
                        "y": 470.0000000000001
                    },
                    {
                        "x": 412.875,
                        "y": 470.0000000000001
                    }
                ]
            },
            {
                "id": "81f8427e-7589-48af-8e02-b927c08e7d1b",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "47d25d0b-e4d1-444f-a323-b414b1025ac4",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_47d25d0b-e4d1-444f-a323-b414b1025ac4",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 656.625,
                    "y": 48.7500000000001
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 656.625,
                        "y": 48.7500000000001
                    },
                    {
                        "x": 756.625,
                        "y": 48.7500000000001
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
                "id": "00299a03-1208-4a5e-b9db-40b8b2ce7055",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "364d48a8-1a23-4689-8192-a27b40d6875f",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_364d48a8-1a23-4689-8192-a27b40d6875f",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 651.625,
                    "y": 151.25000000000014
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 651.625,
                        "y": 151.25000000000014
                    },
                    {
                        "x": 751.625,
                        "y": 151.25000000000014
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
                "id": "23ffb8dc-3244-48d5-aba9-1562cab77dcc",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "b3c026e5-2970-44a5-8c4b-0a43dfc16c20",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_b3c026e5-2970-44a5-8c4b-0a43dfc16c20",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 655.375,
                    "y": 252.5000000000001
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 655.375,
                        "y": 252.5000000000001
                    },
                    {
                        "x": 755.375,
                        "y": 252.5000000000001
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
                "id": "3b56ed49-e6b6-42de-999b-9af623fbb97b",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "7f585eb9-4785-48cb-87b6-e4607a1bc5a2",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_7f585eb9-4785-48cb-87b6-e4607a1bc5a2",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 652.875,
                    "y": 470.0000000000001
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 652.875,
                        "y": 470.0000000000001
                    },
                    {
                        "x": 752.875,
                        "y": 470.0000000000001
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
                "id": "8f47611d-1dc3-491d-8bf1-738d107a7d9b",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "cfd8bf1a-187c-4175-af5d-a2ad4b8365a3",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_cfd8bf1a-187c-4175-af5d-a2ad4b8365a3",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 654.125,
                    "y": 580.0000000000001
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 654.125,
                        "y": 580.0000000000001
                    },
                    {
                        "x": 754.125,
                        "y": 580.0000000000001
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
                "id": "82411e5f-5da4-4a1a-a21f-0105c3f74fa6",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "b6434062-4df9-47a8-8fec-606c8c5098b7",
                "targetNodeId": "06a699f4-4775-4150-a589-57a4dc6fe355",
                "sourceAnchorId": "right_b6434062-4df9-47a8-8fec-606c8c5098b7",
                "targetAnchorId": "left_06a699f4-4775-4150-a589-57a4dc6fe355",
                "startPoint": {
                    "x": 652.875,
                    "y": 696.2500000000001
                },
                "endPoint": {
                    "x": 866.625,
                    "y": 350.0000000000001
                },
                "pointsList": [
                    {
                        "x": 652.875,
                        "y": 696.2500000000001
                    },
                    {
                        "x": 752.875,
                        "y": 696.2500000000001
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

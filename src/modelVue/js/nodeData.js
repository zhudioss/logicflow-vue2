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
                "x": 535.375,
                "y": 46.2500000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "29638607-396c-46d9-a4e4-e56967f8b74e",
                "type": "agent-v",
                "x": 535.375,
                "y": 146.2500000000001,
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
                "y": 246.2500000000001,
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
                "x": 535.375,
                "y": 346.2500000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "795cb65f-2c68-4d9c-ba9c-0c4459e62a07",
                "type": "template-v",
                "x": 535.375,
                "y": 446.2500000000001,
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
                "x": 535.375,
                "y": 546.2500000000001,
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
                "x": 535.375,
                "y": 646.2500000000001,
                "properties": {
                    "hideAnchor": true,
                    "startInput": "",
                    "width": 240,
                    "height": 50
                }
            },
            {
                "id": "c5a8635d-ed9e-4712-96d6-79fca0784d4d",
                "type": "update-v",
                "x": 535.375,
                "y": 746.2500000000001,
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
                "x": 985.375,
                "y": 346.2500000000001,
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
                    "x": 415.375,
                    "y": 46.2500000000001
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
                        "y": 46.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 46.2500000000001
                    }
                ]
            },
            {
                "id": "4d24604c-0ac1-4ad8-b567-908b5b70d2c9",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "29638607-396c-46d9-a4e4-e56967f8b74e",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_29638607-396c-46d9-a4e4-e56967f8b74e",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 415.375,
                    "y": 146.2500000000001
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
                        "y": 146.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 146.2500000000001
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
                    "y": 246.2500000000001
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
                        "y": 246.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 246.2500000000001
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
                    "x": 415.375,
                    "y": 346.2500000000001
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
                        "y": 346.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 346.2500000000001
                    }
                ]
            },
            {
                "id": "d4b4b7e9-d865-4e85-aa70-cf9bef2fe902",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "795cb65f-2c68-4d9c-ba9c-0c4459e62a07",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_795cb65f-2c68-4d9c-ba9c-0c4459e62a07",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 415.375,
                    "y": 446.2500000000001
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
                        "y": 446.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 446.2500000000001
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
                    "x": 415.375,
                    "y": 546.2500000000001
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
                        "y": 546.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 546.2500000000001
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
                    "x": 415.375,
                    "y": 646.2500000000001
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
                        "y": 646.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 646.2500000000001
                    }
                ]
            },
            {
                "id": "f0d87145-ea28-41b1-b907-d878787849ec",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetNodeId": "c5a8635d-ed9e-4712-96d6-79fca0784d4d",
                "sourceAnchorId": "right_a2ce2f3d-353a-4a5e-b893-3ea12ed5a33d",
                "targetAnchorId": "left_c5a8635d-ed9e-4712-96d6-79fca0784d4d",
                "startPoint": {
                    "x": 206.625,
                    "y": 348.75000000000017
                },
                "endPoint": {
                    "x": 415.375,
                    "y": 746.2500000000001
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
                        "y": 746.2500000000001
                    },
                    {
                        "x": 415.375,
                        "y": 746.2500000000001
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
                    "x": 655.375,
                    "y": 346.2500000000001
                },
                "endPoint": {
                    "x": 865.375,
                    "y": 346.2500000000001
                },
                "pointsList": [
                    {
                        "x": 655.375,
                        "y": 346.2500000000001
                    },
                    {
                        "x": 755.375,
                        "y": 346.2500000000001
                    },
                    {
                        "x": 765.375,
                        "y": 346.2500000000001
                    },
                    {
                        "x": 865.375,
                        "y": 346.2500000000001
                    }
                ]
            }
        ]
    }

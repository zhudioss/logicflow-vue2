export const nodeData =
    {
        "nodes": [
            {
                "id": "cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "type": "start-v",
                "x": 1062.5544871794866,
                "y": -177.8749999999994,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "className": "class_cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                    "startInput": ""
                }
            },
            {
                "id": "a960beb7-f3d2-4db5-b718-c38b1d9d8abc",
                "type": "llm-v",
                "x": 1512.5544871794866,
                "y": -177.8749999999994,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_a960beb7-f3d2-4db5-b718-c38b1d9d8abc",
                    "startInput": ""
                }
            },
            {
                "id": "f007d70e-8c6c-4872-8bf5-587e018ad555",
                "type": "branch-v",
                "x": 1512.5544871794866,
                "y": -47.8749999999994,
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
                    "className": "class_f007d70e-8c6c-4872-8bf5-587e018ad555",
                    "startInput": ""
                }
            },
            {
                "id": "4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "type": "http-v",
                "x": 1512.5544871794866,
                "y": 82.1250000000006,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                    "startInput": ""
                }
            },
            {
                "id": "5e338f41-f6eb-4eef-87bc-b8ab40cb1341",
                "type": "knowledge-v",
                "x": 1962.5544871794866,
                "y": -177.8749999999994,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_5e338f41-f6eb-4eef-87bc-b8ab40cb1341",
                    "startInput": ""
                }
            },
            {
                "id": "0cacb599-0de0-42cd-9ecb-03eb39b22bdc",
                "type": "end-v",
                "x": 2412.5544871794864,
                "y": -177.8749999999994,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_0cacb599-0de0-42cd-9ecb-03eb39b22bdc",
                    "startInput": ""
                }
            },
            {
                "id": "360bb3dd-6847-4d09-abdf-b212af865f01",
                "type": "code-v",
                "x": 1963.8365384615379,
                "y": -65.82371794871733,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_360bb3dd-6847-4d09-abdf-b212af865f01",
                    "startInput": ""
                }
            },
            {
                "id": "899945c3-ed04-4ac3-b560-36740ff9551b",
                "type": "end-v",
                "x": 2413.836538461538,
                "y": -65.82371794871733,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_899945c3-ed04-4ac3-b560-36740ff9551b",
                    "startInput": ""
                }
            },
            {
                "id": "ec65f6c1-ea1a-4449-9a5b-3dee6826bb35",
                "type": "agg-v",
                "x": 1962.5544871794866,
                "y": 82.1250000000006,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_ec65f6c1-ea1a-4449-9a5b-3dee6826bb35",
                    "startInput": ""
                }
            },
            {
                "id": "a35683fe-e6f8-485d-a574-5ca3bc84fb74",
                "type": "domEx-v",
                "x": 1962.5544871794866,
                "y": 182.1250000000006,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "className": "class_a35683fe-e6f8-485d-a574-5ca3bc84fb74",
                    "startInput": ""
                }
            }
        ],
        "edges": [
            {
                "id": "c80fe2fa-c625-4e7c-8377-e5b6274623fb",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "targetNodeId": "a960beb7-f3d2-4db5-b718-c38b1d9d8abc",
                "sourceAnchorId": "right_cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "targetAnchorId": "left_a960beb7-f3d2-4db5-b718-c38b1d9d8abc",
                "startPoint": {
                    "x": 1182.5544871794866,
                    "y": -177.8749999999994
                },
                "endPoint": {
                    "x": 1392.5544871794866,
                    "y": -177.8749999999994
                },
                "pointsList": [
                    {
                        "x": 1182.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1282.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1292.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1392.5544871794866,
                        "y": -177.8749999999994
                    }
                ]
            },
            {
                "id": "7ef5e151-9b6a-4f23-bf63-d050420b4e14",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "targetNodeId": "f007d70e-8c6c-4872-8bf5-587e018ad555",
                "sourceAnchorId": "right_cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "targetAnchorId": "left_f007d70e-8c6c-4872-8bf5-587e018ad555",
                "startPoint": {
                    "x": 1182.5544871794866,
                    "y": -177.8749999999994
                },
                "endPoint": {
                    "x": 1392.5544871794866,
                    "y": -47.8749999999994
                },
                "pointsList": [
                    {
                        "x": 1182.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1282.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1292.5544871794866,
                        "y": -47.8749999999994
                    },
                    {
                        "x": 1392.5544871794866,
                        "y": -47.8749999999994
                    }
                ]
            },
            {
                "id": "b5ee4fdc-a94f-4cee-b754-480ce9e1eb6e",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "targetNodeId": "4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "sourceAnchorId": "right_cabbaa5a-ea67-4f32-942d-456c27d2f3de",
                "targetAnchorId": "left_4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "startPoint": {
                    "x": 1182.5544871794866,
                    "y": -177.8749999999994
                },
                "endPoint": {
                    "x": 1392.5544871794866,
                    "y": 82.1250000000006
                },
                "pointsList": [
                    {
                        "x": 1182.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1282.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1292.5544871794866,
                        "y": 82.1250000000006
                    },
                    {
                        "x": 1392.5544871794866,
                        "y": 82.1250000000006
                    }
                ]
            },
            {
                "id": "103d8d89-af07-4ee4-84ac-3f44f0c25d6c",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "a960beb7-f3d2-4db5-b718-c38b1d9d8abc",
                "targetNodeId": "5e338f41-f6eb-4eef-87bc-b8ab40cb1341",
                "sourceAnchorId": "right_a960beb7-f3d2-4db5-b718-c38b1d9d8abc",
                "targetAnchorId": "left_5e338f41-f6eb-4eef-87bc-b8ab40cb1341",
                "startPoint": {
                    "x": 1632.5544871794866,
                    "y": -177.8749999999994
                },
                "endPoint": {
                    "x": 1842.5544871794866,
                    "y": -177.8749999999994
                },
                "pointsList": [
                    {
                        "x": 1632.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1732.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1742.5544871794866,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 1842.5544871794866,
                        "y": -177.8749999999994
                    }
                ]
            },
            {
                "id": "6f81373c-2bc5-4e04-be7d-19ba2af33190",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "5e338f41-f6eb-4eef-87bc-b8ab40cb1341",
                "targetNodeId": "0cacb599-0de0-42cd-9ecb-03eb39b22bdc",
                "sourceAnchorId": "right_5e338f41-f6eb-4eef-87bc-b8ab40cb1341",
                "targetAnchorId": "left_0cacb599-0de0-42cd-9ecb-03eb39b22bdc",
                "startPoint": {
                    "x": 2082.5544871794864,
                    "y": -177.8749999999994
                },
                "endPoint": {
                    "x": 2292.5544871794864,
                    "y": -177.8749999999994
                },
                "pointsList": [
                    {
                        "x": 2082.5544871794864,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 2182.5544871794864,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 2192.5544871794864,
                        "y": -177.8749999999994
                    },
                    {
                        "x": 2292.5544871794864,
                        "y": -177.8749999999994
                    }
                ]
            },
            {
                "id": "8fda0a3e-05d2-43d0-abe1-2c3e21e26708",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "f007d70e-8c6c-4872-8bf5-587e018ad555",
                "targetNodeId": "360bb3dd-6847-4d09-abdf-b212af865f01",
                "sourceAnchorId": "right_0_f007d70e-8c6c-4872-8bf5-587e018ad555",
                "targetAnchorId": "left_360bb3dd-6847-4d09-abdf-b212af865f01",
                "startPoint": {
                    "x": 1632.5544871794866,
                    "y": -64.54166666666606
                },
                "endPoint": {
                    "x": 1843.8365384615379,
                    "y": -65.82371794871733
                },
                "pointsList": [
                    {
                        "x": 1632.5544871794866,
                        "y": -64.54166666666606
                    },
                    {
                        "x": 1732.5544871794866,
                        "y": -64.54166666666606
                    },
                    {
                        "x": 1743.8365384615379,
                        "y": -65.82371794871733
                    },
                    {
                        "x": 1843.8365384615379,
                        "y": -65.82371794871733
                    }
                ]
            },
            {
                "id": "385fb8ab-9f91-473d-92eb-bad60a1a5f22",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "360bb3dd-6847-4d09-abdf-b212af865f01",
                "targetNodeId": "899945c3-ed04-4ac3-b560-36740ff9551b",
                "sourceAnchorId": "right_360bb3dd-6847-4d09-abdf-b212af865f01",
                "targetAnchorId": "left_899945c3-ed04-4ac3-b560-36740ff9551b",
                "startPoint": {
                    "x": 2083.836538461538,
                    "y": -65.82371794871733
                },
                "endPoint": {
                    "x": 2293.836538461538,
                    "y": -65.82371794871733
                },
                "pointsList": [
                    {
                        "x": 2083.836538461538,
                        "y": -65.82371794871733
                    },
                    {
                        "x": 2183.836538461538,
                        "y": -65.82371794871733
                    },
                    {
                        "x": 2193.836538461538,
                        "y": -65.82371794871733
                    },
                    {
                        "x": 2293.836538461538,
                        "y": -65.82371794871733
                    }
                ]
            },
            {
                "id": "a6296f11-0b93-40eb-9a10-5b36ef514646",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "targetNodeId": "ec65f6c1-ea1a-4449-9a5b-3dee6826bb35",
                "sourceAnchorId": "right_4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "targetAnchorId": "left_ec65f6c1-ea1a-4449-9a5b-3dee6826bb35",
                "startPoint": {
                    "x": 1632.5544871794866,
                    "y": 82.1250000000006
                },
                "endPoint": {
                    "x": 1842.5544871794866,
                    "y": 82.1250000000006
                },
                "pointsList": [
                    {
                        "x": 1632.5544871794866,
                        "y": 82.1250000000006
                    },
                    {
                        "x": 1732.5544871794866,
                        "y": 82.1250000000006
                    },
                    {
                        "x": 1742.5544871794866,
                        "y": 82.1250000000006
                    },
                    {
                        "x": 1842.5544871794866,
                        "y": 82.1250000000006
                    }
                ]
            },
            {
                "id": "de64ec7d-cd98-4f61-956a-169aad6d088a",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "targetNodeId": "a35683fe-e6f8-485d-a574-5ca3bc84fb74",
                "sourceAnchorId": "right_4cccbb6e-6757-49f0-84c6-dea0a50fd689",
                "targetAnchorId": "left_a35683fe-e6f8-485d-a574-5ca3bc84fb74",
                "startPoint": {
                    "x": 1632.5544871794866,
                    "y": 82.1250000000006
                },
                "endPoint": {
                    "x": 1842.5544871794866,
                    "y": 182.1250000000006
                },
                "pointsList": [
                    {
                        "x": 1632.5544871794866,
                        "y": 82.1250000000006
                    },
                    {
                        "x": 1732.5544871794866,
                        "y": 82.1250000000006
                    },
                    {
                        "x": 1742.5544871794866,
                        "y": 182.1250000000006
                    },
                    {
                        "x": 1842.5544871794866,
                        "y": 182.1250000000006
                    }
                ]
            }
        ]
    }

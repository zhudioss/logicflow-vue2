export const nodeData =
    {
        "nodes": [
            {
                "id": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "type": "start-v",
                "x": 959.939102564102,
                "y": -218.310897435897,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "startInput": ""
                }
            },
            {
                "id": "7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "type": "branch-v",
                "x": 1409.939102564102,
                "y": -218.310897435897,
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
                "id": "8e653078-c37b-4941-b936-54c63cf28f18",
                "type": "knowledge-v",
                "x": 1859.939102564102,
                "y": -334.97756410256363,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "4cb24858-f658-4fcf-9681-34048198bee8",
                "type": "end-v",
                "x": 2309.939102564102,
                "y": -334.97756410256363,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "bac2131e-7c81-48e7-99a3-053b20bc00c8",
                "type": "llm-v",
                "x": 1859.939102564102,
                "y": -101.64423076923032,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "9eab703f-6679-4e17-902c-9407e1e86f3d",
                "type": "end-v",
                "x": 2309.939102564102,
                "y": -101.64423076923032,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "ad4258d1-ee3d-48e5-8221-210f0d7f92dd",
                "type": "code-v",
                "x": 1409.939102564102,
                "y": -88.310897435897,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "7f74c18d-d0b6-4cd1-b230-2f1bb23629fd",
                "type": "http-v",
                "x": 1409.939102564102,
                "y": 11.689102564102996,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "da02f40d-31d6-46e6-8c40-2078bd8f2ee1",
                "type": "agg-v",
                "x": 1859.939102564102,
                "y": 11.689102564102996,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "0182ce8d-6c6e-452f-8e5a-31392f773e3c",
                "type": "end-v",
                "x": 2309.939102564102,
                "y": 11.689102564102996,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "e0d471cd-506d-4317-b39d-8353f4587040",
                "type": "domEx-v",
                "x": 1409.939102564102,
                "y": 111.689102564103,
                "properties": {
                    "width": 240,
                    "height": 50,
                    "hideAnchor": true,
                    "startInput": ""
                }
            },
            {
                "id": "cdced02f-2079-4790-9ddc-a3ac4557eaac",
                "type": "end-v",
                "x": 1859.939102564102,
                "y": 111.689102564103,
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
                "id": "998c3e47-47ed-4b40-9b2e-1d2a144a91aa",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "startPoint": {
                    "x": 1079.939102564102,
                    "y": -218.310897435897
                },
                "endPoint": {
                    "x": 1289.939102564102,
                    "y": -218.310897435897
                },
                "pointsList": [
                    {
                        "x": 1079.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1179.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1189.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1289.939102564102,
                        "y": -218.310897435897
                    }
                ]
            },
            {
                "id": "793a0c27-691e-40b4-8e00-f8786f320d9f",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "targetNodeId": "8e653078-c37b-4941-b936-54c63cf28f18",
                "sourceAnchorId": "right_0_7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "targetAnchorId": "left_8e653078-c37b-4941-b936-54c63cf28f18",
                "startPoint": {
                    "x": 1529.939102564102,
                    "y": -234.97756410256366
                },
                "endPoint": {
                    "x": 1739.939102564102,
                    "y": -334.97756410256363
                },
                "pointsList": [
                    {
                        "x": 1529.939102564102,
                        "y": -234.97756410256366
                    },
                    {
                        "x": 1629.939102564102,
                        "y": -234.97756410256366
                    },
                    {
                        "x": 1639.939102564102,
                        "y": -334.97756410256363
                    },
                    {
                        "x": 1739.939102564102,
                        "y": -334.97756410256363
                    }
                ]
            },
            {
                "id": "159d997e-011b-4dbb-a733-f9810fecd327",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "8e653078-c37b-4941-b936-54c63cf28f18",
                "targetNodeId": "4cb24858-f658-4fcf-9681-34048198bee8",
                "sourceAnchorId": "right_8e653078-c37b-4941-b936-54c63cf28f18",
                "targetAnchorId": "left_4cb24858-f658-4fcf-9681-34048198bee8",
                "startPoint": {
                    "x": 1979.939102564102,
                    "y": -334.97756410256363
                },
                "endPoint": {
                    "x": 2189.939102564102,
                    "y": -334.97756410256363
                },
                "pointsList": [
                    {
                        "x": 1979.939102564102,
                        "y": -334.97756410256363
                    },
                    {
                        "x": 2079.939102564102,
                        "y": -334.97756410256363
                    },
                    {
                        "x": 2089.939102564102,
                        "y": -334.97756410256363
                    },
                    {
                        "x": 2189.939102564102,
                        "y": -334.97756410256363
                    }
                ]
            },
            {
                "id": "cd3fb58b-2a3c-4bac-87af-f328202f314b",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "targetNodeId": "bac2131e-7c81-48e7-99a3-053b20bc00c8",
                "sourceAnchorId": "right_1_7fe8b733-aef3-4956-8ba6-6672f1e7538a",
                "targetAnchorId": "left_bac2131e-7c81-48e7-99a3-053b20bc00c8",
                "startPoint": {
                    "x": 1529.939102564102,
                    "y": -201.64423076923032
                },
                "endPoint": {
                    "x": 1739.939102564102,
                    "y": -101.64423076923032
                },
                "pointsList": [
                    {
                        "x": 1529.939102564102,
                        "y": -201.64423076923032
                    },
                    {
                        "x": 1629.939102564102,
                        "y": -201.64423076923032
                    },
                    {
                        "x": 1639.939102564102,
                        "y": -101.64423076923032
                    },
                    {
                        "x": 1739.939102564102,
                        "y": -101.64423076923032
                    }
                ]
            },
            {
                "id": "2c2da9d8-8388-4878-b6dd-e2589f299c62",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "bac2131e-7c81-48e7-99a3-053b20bc00c8",
                "targetNodeId": "9eab703f-6679-4e17-902c-9407e1e86f3d",
                "sourceAnchorId": "right_bac2131e-7c81-48e7-99a3-053b20bc00c8",
                "targetAnchorId": "left_9eab703f-6679-4e17-902c-9407e1e86f3d",
                "startPoint": {
                    "x": 1979.939102564102,
                    "y": -101.64423076923032
                },
                "endPoint": {
                    "x": 2189.939102564102,
                    "y": -101.64423076923032
                },
                "pointsList": [
                    {
                        "x": 1979.939102564102,
                        "y": -101.64423076923032
                    },
                    {
                        "x": 2079.939102564102,
                        "y": -101.64423076923032
                    },
                    {
                        "x": 2089.939102564102,
                        "y": -101.64423076923032
                    },
                    {
                        "x": 2189.939102564102,
                        "y": -101.64423076923032
                    }
                ]
            },
            {
                "id": "a96e6c1a-ad3f-45a2-9554-a780880a52c8",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "ad4258d1-ee3d-48e5-8221-210f0d7f92dd",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_ad4258d1-ee3d-48e5-8221-210f0d7f92dd",
                "startPoint": {
                    "x": 1079.939102564102,
                    "y": -218.310897435897
                },
                "endPoint": {
                    "x": 1289.939102564102,
                    "y": -88.310897435897
                },
                "pointsList": [
                    {
                        "x": 1079.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1179.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1189.939102564102,
                        "y": -88.310897435897
                    },
                    {
                        "x": 1289.939102564102,
                        "y": -88.310897435897
                    }
                ]
            },
            {
                "id": "ba68375d-591b-41d6-8eca-c461a0a02e2f",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "7f74c18d-d0b6-4cd1-b230-2f1bb23629fd",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_7f74c18d-d0b6-4cd1-b230-2f1bb23629fd",
                "startPoint": {
                    "x": 1079.939102564102,
                    "y": -218.310897435897
                },
                "endPoint": {
                    "x": 1289.939102564102,
                    "y": 11.689102564102996
                },
                "pointsList": [
                    {
                        "x": 1079.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1179.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1189.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 1289.939102564102,
                        "y": 11.689102564102996
                    }
                ]
            },
            {
                "id": "3ccd6989-a25b-47c5-85c3-d91b24b47527",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "7f74c18d-d0b6-4cd1-b230-2f1bb23629fd",
                "targetNodeId": "da02f40d-31d6-46e6-8c40-2078bd8f2ee1",
                "sourceAnchorId": "right_7f74c18d-d0b6-4cd1-b230-2f1bb23629fd",
                "targetAnchorId": "left_da02f40d-31d6-46e6-8c40-2078bd8f2ee1",
                "startPoint": {
                    "x": 1529.939102564102,
                    "y": 11.689102564102996
                },
                "endPoint": {
                    "x": 1739.939102564102,
                    "y": 11.689102564102996
                },
                "pointsList": [
                    {
                        "x": 1529.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 1629.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 1639.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 1739.939102564102,
                        "y": 11.689102564102996
                    }
                ]
            },
            {
                "id": "0fb0ea3b-15a2-421b-a066-be9320e4bf69",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "da02f40d-31d6-46e6-8c40-2078bd8f2ee1",
                "targetNodeId": "0182ce8d-6c6e-452f-8e5a-31392f773e3c",
                "sourceAnchorId": "right_da02f40d-31d6-46e6-8c40-2078bd8f2ee1",
                "targetAnchorId": "left_0182ce8d-6c6e-452f-8e5a-31392f773e3c",
                "startPoint": {
                    "x": 1979.939102564102,
                    "y": 11.689102564102996
                },
                "endPoint": {
                    "x": 2189.939102564102,
                    "y": 11.689102564102996
                },
                "pointsList": [
                    {
                        "x": 1979.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 2079.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 2089.939102564102,
                        "y": 11.689102564102996
                    },
                    {
                        "x": 2189.939102564102,
                        "y": 11.689102564102996
                    }
                ]
            },
            {
                "id": "1968d0f7-31a5-4e90-a188-1bf9ce155cf0",
                "type": "EDGE_BEZIER",
                "properties": {
                    "showAddMark": false
                },
                "sourceNodeId": "ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetNodeId": "e0d471cd-506d-4317-b39d-8353f4587040",
                "sourceAnchorId": "right_ce1ec1ec-5d59-4187-9699-da0785433775",
                "targetAnchorId": "left_e0d471cd-506d-4317-b39d-8353f4587040",
                "startPoint": {
                    "x": 1079.939102564102,
                    "y": -218.310897435897
                },
                "endPoint": {
                    "x": 1289.939102564102,
                    "y": 111.689102564103
                },
                "pointsList": [
                    {
                        "x": 1079.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1179.939102564102,
                        "y": -218.310897435897
                    },
                    {
                        "x": 1189.939102564102,
                        "y": 111.689102564103
                    },
                    {
                        "x": 1289.939102564102,
                        "y": 111.689102564103
                    }
                ]
            },
            {
                "id": "0f02f922-096e-45ed-9d99-7f17111c32ad",
                "type": "EDGE_BEZIER",
                "properties": {},
                "sourceNodeId": "e0d471cd-506d-4317-b39d-8353f4587040",
                "targetNodeId": "cdced02f-2079-4790-9ddc-a3ac4557eaac",
                "sourceAnchorId": "right_e0d471cd-506d-4317-b39d-8353f4587040",
                "targetAnchorId": "left_cdced02f-2079-4790-9ddc-a3ac4557eaac",
                "startPoint": {
                    "x": 1529.939102564102,
                    "y": 111.689102564103
                },
                "endPoint": {
                    "x": 1739.939102564102,
                    "y": 111.689102564103
                },
                "pointsList": [
                    {
                        "x": 1529.939102564102,
                        "y": 111.689102564103
                    },
                    {
                        "x": 1629.939102564102,
                        "y": 111.689102564103
                    },
                    {
                        "x": 1639.939102564102,
                        "y": 111.689102564103
                    },
                    {
                        "x": 1739.939102564102,
                        "y": 111.689102564103
                    }
                ]
            }
        ]
    }

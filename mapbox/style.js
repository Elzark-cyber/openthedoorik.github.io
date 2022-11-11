
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "ngnib_0": {
            "type": "geojson",
            "data": json_ngnib_0
        }
                    ,
        "csvtcht_1": {
            "type": "geojson",
            "data": json_csvtcht_1
        }
                    ,
        "cyxanh_2": {
            "type": "geojson",
            "data": json_cyxanh_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_ngnib_0_0",
            "type": "line",
            "source": "ngnib_0",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#becf50'}
        }
,
        {
            "id": "lyr_csvtcht_1_0",
            "type": "fill",
            "source": "csvtcht_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#987db7'}
        }
,
        {
            "id": "lyr_cyxanh_2_0",
            "type": "circle",
            "source": "cyxanh_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}
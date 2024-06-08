ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([62.042596, 7.800583, 97.449679, 33.922142]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rice1075kTons_3 = new ol.format.GeoJSON();
var features_Rice1075kTons_3 = format_Rice1075kTons_3.readFeatures(json_Rice1075kTons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rice1075kTons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice1075kTons_3.addFeatures(features_Rice1075kTons_3);
var lyr_Rice1075kTons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice1075kTons_3, 
                style: style_Rice1075kTons_3,
                popuplayertitle: "Rice 10 - 75kTons",
                interactive: false,
                    title: '<img src="styles/legend/Rice1075kTons_3.png" /> Rice 10 - 75kTons'
                });
var format_Rice_4 = new ol.format.GeoJSON();
var features_Rice_4 = format_Rice_4.readFeatures(json_Rice_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rice_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice_4.addFeatures(features_Rice_4);
var lyr_Rice_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice_4, 
                style: style_Rice_4,
                popuplayertitle: "Rice",
                interactive: false,
    title: 'Rice<br />\
    <img src="styles/legend/Rice_4_0.png" /> 75000 - 80000<br />\
    <img src="styles/legend/Rice_4_1.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Rice_4_2.png" /> 100000 - 125000<br />\
    <img src="styles/legend/Rice_4_3.png" /> 125000 - 150000<br />\
    <img src="styles/legend/Rice_4_4.png" /> 150000 - 300000<br />\
    <img src="styles/legend/Rice_4_5.png" /> 300000 - 500000<br />\
    <img src="styles/legend/Rice_4_6.png" /> >500 kTons<br />'
        });
var format_IndiaBoundary_5 = new ol.format.GeoJSON();
var features_IndiaBoundary_5 = format_IndiaBoundary_5.readFeatures(json_IndiaBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_5.addFeatures(features_IndiaBoundary_5);
var lyr_IndiaBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_5, 
                style: style_IndiaBoundary_5,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_5.png" /> India Boundary'
                });
var format_Rice50KMArea_6 = new ol.format.GeoJSON();
var features_Rice50KMArea_6 = format_Rice50KMArea_6.readFeatures(json_Rice50KMArea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rice50KMArea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice50KMArea_6.addFeatures(features_Rice50KMArea_6);
var lyr_Rice50KMArea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice50KMArea_6, 
                style: style_Rice50KMArea_6,
                popuplayertitle: "Rice 50KM Area",
                interactive: true,
                    title: '<img src="styles/legend/Rice50KMArea_6.png" /> Rice 50KM Area'
                });
var format_PaperMills_7 = new ol.format.GeoJSON();
var features_PaperMills_7 = format_PaperMills_7.readFeatures(json_PaperMills_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMills_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMills_7.addFeatures(features_PaperMills_7);
var lyr_PaperMills_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMills_7, 
                style: style_PaperMills_7,
                popuplayertitle: "Paper Mills",
                interactive: true,
                    title: '<img src="styles/legend/PaperMills_7.png" /> Paper Mills'
                });
var format_PaperMillsTOP20Rice50Km_8 = new ol.format.GeoJSON();
var features_PaperMillsTOP20Rice50Km_8 = format_PaperMillsTOP20Rice50Km_8.readFeatures(json_PaperMillsTOP20Rice50Km_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillsTOP20Rice50Km_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillsTOP20Rice50Km_8.addFeatures(features_PaperMillsTOP20Rice50Km_8);
var lyr_PaperMillsTOP20Rice50Km_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillsTOP20Rice50Km_8, 
                style: style_PaperMillsTOP20Rice50Km_8,
                popuplayertitle: "Paper Mills TOP 20 Rice 50 Km",
                interactive: true,
    title: 'Paper Mills TOP 20 Rice 50 Km<br />\
    <img src="styles/legend/PaperMillsTOP20Rice50Km_8_0.png" /> 10389265 - 10389265<br />\
    <img src="styles/legend/PaperMillsTOP20Rice50Km_8_1.png" /> 10389265 - 16337229<br />\
    <img src="styles/legend/PaperMillsTOP20Rice50Km_8_2.png" /> 16337229 - 20030321<br />\
    <img src="styles/legend/PaperMillsTOP20Rice50Km_8_3.png" /> 20030321 - 20966334<br />\
    <img src="styles/legend/PaperMillsTOP20Rice50Km_8_4.png" /> 20966334 - 27539165<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_PaperMills_7,lyr_PaperMillsTOP20Rice50Km_8,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Rice1075kTons_3,lyr_Rice_4,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Rice1075kTons_3.setVisible(true);lyr_Rice_4.setVisible(true);lyr_IndiaBoundary_5.setVisible(true);lyr_Rice50KMArea_6.setVisible(false);lyr_PaperMills_7.setVisible(true);lyr_PaperMillsTOP20Rice50Km_8.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_5,lyr_Rice50KMArea_6,group_PaperMills];
lyr_Rice1075kTons_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Rice_4.set('fieldAliases', {'VALUE Rice (kTons)': 'VALUE Rice (kTons)', });
lyr_IndiaBoundary_5.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Rice50KMArea_6.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE': 'VALUE', });
lyr_PaperMills_7.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE Whea': 'VALUE Whea', 'Rice': 'Rice', });
lyr_PaperMillsTOP20Rice50Km_8.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'N° TOP 20': 'N° TOP 20', 'Rice 50KM': 'Rice 50KM', });
lyr_Rice1075kTons_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Rice_4.set('fieldImages', {'VALUE Rice (kTons)': 'TextEdit', });
lyr_IndiaBoundary_5.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Rice50KMArea_6.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_PaperMills_7.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE Whea': 'TextEdit', 'Rice': 'TextEdit', });
lyr_PaperMillsTOP20Rice50Km_8.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'N° TOP 20': 'TextEdit', 'Rice 50KM': 'TextEdit', });
lyr_Rice1075kTons_3.set('fieldLabels', {'VALUE': 'hidden field', });
lyr_Rice_4.set('fieldLabels', {'VALUE Rice (kTons)': 'inline label - always visible', });
lyr_IndiaBoundary_5.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Rice50KMArea_6.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE': 'inline label - always visible', });
lyr_PaperMills_7.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE Whea': 'hidden field', 'Rice': 'inline label - always visible', });
lyr_PaperMillsTOP20Rice50Km_8.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'N° TOP 20': 'inline label - always visible', 'Rice 50KM': 'inline label - always visible', });
lyr_PaperMillsTOP20Rice50Km_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
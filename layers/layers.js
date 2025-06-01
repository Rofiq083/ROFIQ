ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.415331, -6.846449, 107.473314, -6.816874]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_1.addFeatures(features_1_1);
var lyr_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_1, 
                style: style_1_1,
                popuplayertitle: '1',
                interactive: true,
    title: '1<br />\
    <img src="styles/legend/1_1_0.png" /> Sebuah tebing yang berlokasi di kawasan gunung hawu<br />\
    <img src="styles/legend/1_1_1.png" /> Tebing citatah 125<br />\
    <img src="styles/legend/1_1_2.png" /> Tebing citatah 48<br />\
    <img src="styles/legend/1_1_3.png" /> Tebing citatah yang memiliki ketinggian 90 meter<br />\
    <img src="styles/legend/1_1_4.png" /> Tebing Masigit<br />\
    <img src="styles/legend/1_1_5.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_1_1];
lyr_1_1.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'X-Coord': 'X-Coord', 'Gambar_URL': 'Gambar_URL', 'Y-Coord': 'Y-Coord', });
lyr_1_1.set('fieldImages', {'Id': 'TextEdit', 'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'X-Coord': 'TextEdit', 'Gambar_URL': 'TextEdit', 'Y-Coord': 'TextEdit', });
lyr_1_1.set('fieldLabels', {'Id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'Deskripsi': 'header label - always visible', 'X-Coord': 'inline label - visible with data', 'Gambar_URL': 'inline label - visible with data', 'Y-Coord': 'inline label - visible with data', });
lyr_1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
};



var models = [
    {
        url: 'src\Marius1-m.glb', 
        scale: '0.5 0.5 0.5',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '180 180 0',
    },
    {
        url: 'src\Marius1-m.glb',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Articuno, Lv. 80, HP 100/100',
    },
    {
        url: 'src\Marius1-m.glb',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 180',
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};


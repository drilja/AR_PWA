
console.log("test 1");


AFRAME.registerComponent('arjs', {
    init: function () {
var sceneEl = document.querySelector('a-scene');
console.log(sceneEl);

console.log("test 2");

}
});


  window.onload = () => {
    const button = document.querySelector('button[data-action="change"]')
    button.innerText = '?';
    button.addEventListener("click", function(){
    console.log("Button wurde geklickt!");
    // alert("This is marker 1");
    });    

    var puppet = staticLoadpuppet();
    changePuppet(puppet);
};

function staticLoadpuppet() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // decomment the following and add coordinates:
          
            },
        },
    ];
}

var models = [
    {
        url: 'src/bug_v1.glb',
        scale: '0.1 0.1 0.1',
        info: 'Bug, Lv. 5, HP 10/10',
        rotation: '0 0 0',
    },
    {
        url: 'src/frankv1.glb',
        scale: '0.1 0.1 0.1',
        rotation: '0 0 0',
        info: 'Puppet from Frank, HP 100/100',
    },
    {
        url: 'src/whale_v1.glb',
        scale: '0.1 0.1 0.1',
        rotation: '0 0 0',
        info: 'Whale Puppet, Lv. 99, HP 150/150',
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


    entity.setAttribute('gesture-handler');
    entity.setAttribute('class', 'clickable');

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function changePuppet(puppet) {
    var scene = document.querySelector('a-scene');

    puppet.forEach((puppet) => {
        var latitude = puppet.location.lat;
        var longitude = puppet.location.lng;

        var model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', 'latitude: ${latitude}; longitude: ${longitude};');

      

        model.setAttribute('animation-mixer', '');
        model.setAttribute('gesture-handler');
        model.setAttribute('class', 'clickable');

        setModel(models[modelIndex], model);

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
            // setModel(models[newIndex]);
        });

        scene.appendChild(model);
    });
}
AFRAME.registerComponent('log', {
    schema: {type: 'string'},
  
    init: function () {
      var stringToLog = this.data;
    //   console.log(stringToLog);
    //   console.log(this.el.sceneEl); 
    var sceneEl = document.querySelector('a-scene');
    var markerEl = document.querySelector('a-marker');
    // console.log(sceneEl.querySelector('#puppet1'));
    // console.log(document.querySelector('button'))
    // console.log(sceneEl.querySelectorAll('.clickable'));
    // var els = sceneEl.querySelectorAll('*');
    // for (var i = 0; i < els.length; i++) {
    // console.log(els[i]);
    // }

    
  

    document.querySelector('#button').addEventListener('click', function () {
        console.log("Button was pressed");
        
        var entityEl = document.createElement('a-entity');
// Do `.setAttribute()`s to initialize the entity.
        

        entityEl.setAttribute('geometry', {
            primitive: 'box',
            height: 10,
            width: 10
          });


        //   sceneEl.appendChild(entityEl);
          markerEl.appendChild(markerEl);
          console.log(entityEl);


        // puppet1.setAttribute('visible', false);

        // puppet2.object3D.visibile = false;
        // puppet3.object3D.visibile = false;
    });
    }
  });
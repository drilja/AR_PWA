AFRAME.registerComponent('log', {
    schema: {type: 'string'},
  
    init: function () {
      var stringToLog = this.data;
    //   console.log(stringToLog);
    //   console.log(this.el.sceneEl); 
    // var sceneEl = document.querySelector('a-scene');
    // console.log(sceneEl.querySelector('#puppet1'));
    // console.log(document.querySelector('button'))
    }
  });
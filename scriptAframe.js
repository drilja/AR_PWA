AFRAME.registerComponent('log', {
    schema: {type: 'string'},
  
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);

      

    }
  });


  function pressButton(){
    document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        console.log("Button pressed")
    }); 
  }
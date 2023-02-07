document.querySelector('.dupe').addEventListener('click', function(e) {
    var card = document.querySelector('.card');
      var dupCard = card.cloneNode(true);
      console.log(dupCard);
      document.body.appendChild(dupCard);
    });
    
    
    changeColor = document.querySelector('#btn1');
    let body = document.querySelector('body');
    changeColor.addEventListener('click', function(){
        let r = (Math.floor(Math.random() * 256));
        let g = (Math.floor(Math.random() * 256));
        let b = (Math.floor(Math.random() * 256));
        
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
    
    document.querySelector('.delete').addEventListener('click', function(e) {
    var card = document.querySelector('.card');
      var dupCard = card.cloneNode(true);
      console.log(dupCard);
      document.body.appendChild(dupCard);
    });
    
    
    
    
    
    
    
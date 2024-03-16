
     const shareButton = document.querySelector('.share-button');
     const overlay = document.querySelector('.overlay');
     const shareModal = document.querySelector('.share');
     const closeButton = document.querySelector('.close-button');
     console.log('test share');

     function copyLink(){
      var copyText = document.getElementById("myInput");
    
    
      copyText.select();
      copyText.setSelectionRange(0, 99999); 
    
      
      navigator.clipboard.writeText(copyText.value);
    
      
      alert("Copied the text: " + copyText.value);
     }
     shareButton.addEventListener('click', event => {
      if (navigator.share) {
        navigator.share({
          title: 'Retro chic quiz',
          url: 'https://bhoomika-m.github.io/RetroChic/'    
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
      } else{
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
      }
     });
     

    

    ``
     
     closeButton.addEventListener('click', event => {
       overlay.classList.remove('show-share');
       shareModal.classList.remove('show-share');
      });    

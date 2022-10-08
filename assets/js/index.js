// FAQ
  const accordion = document.querySelectorAll('.accordion');

 
  accordion.forEach((item, index) => {
    let header = item.querySelector(".accordion-link");
    header.addEventListener('click', () => {
      item.classList.toggle('open');

      let description = item.querySelector('.answer');
      if(item.classList.contains('open')){
        description.style.height = `${description.scrollHeight}px`;
        item.querySelector('i').classList.replace("ion-md-add", "ion-md-remove");
      }else{
        description.style.height = '0px';
        item.querySelector('i').classList.replace("ion-md-remove", "ion-md-add");
      }
      removeOpen(index);
    })
  })

  function removeOpen(index1){
    accordion.forEach((item2, index2) => {
      if(index1 != index2){
        item2.classList.remove('open');

        let des = item2.querySelector('.answer');
        des.style.height = '0px';
        item2.querySelector('i').classList.replace("ion-md-remove", "ion-md-add")
      }
    })
  }







// parallax
// document.addEventListener("mousemove", parallax);
// function parallax(e){
//   this.querySelectorAll('.layerMouse').forEach(layer => {
//     const speed = layer.getAttribute('data-speed')

//     const x = (window.innerWidth - e.pageX*speed)
//     const y = (window.innerHeight - e.pageY*speed)

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//   })
// }


// collapsible


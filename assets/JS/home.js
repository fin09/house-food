if(window.innerWidth < 900){
   let nav= document.createElement('nav');
   $(nav).attr('id','mobile-navbar');
   let mobilenav = document.querySelector('#mobile-nav');
   let data = `

   <div id="logo-desktop" >
   <a href="#" ><img src="./assets/images/logo.png"></a>
      </div>
      <button type="button" id="button-collaps" ><i class="fa-solid fa-bars"></i>
    </button>
   `;
   nav.innerHTML = data;
   let t ='   <i class="fa-regular fa-xmark"></i>';
   document.body.insertAdjacentElement('afterbegin', nav);


   $('#button-collaps').click(function(){
      let mob = document.querySelector('#mobile-nav');
      mob.style.left = '0%';
   })
}
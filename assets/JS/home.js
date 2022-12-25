let observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.add('show');       
      }
      else{
         entry.target.classList.remove('show');
      }
   })
});

let section = document.querySelectorAll('section');
section.forEach((el)=>{
   observer.observe(el);
});


document.body.onload = () =>{
   let div = document.createElement('div');
   div.classList.add('loading-page');
   document.body.insertAdjacentElement('afterbegin',div);
   div.innerHTML = `<div class="container">
   <div id="progressive">
       <div>
           <h1 class="loadFont text-center">Please Wait...</h1>
       </div>
       <div class="progress" id="shadow" >
           <div class="progress-bar progress-bar-danger six-sec-ease-in-out" role="progressbar" data-transitiongoal="100"></div>
       </div>
    </div>
</div>`;
   div.style.display = 'flex';
   div.style.textAlign = 'center';
   div.style.alignItems = 'center';
   document.body.style.overflow = 'hidden';

   $(document).ready(function() {
      $(".progress-bar").animate({
          width: "100%"
      }, 250 );
  });

   setTimeout(function(){
     div.remove();
     document.body.style.overflow = 'visible';
   },1000);
}


if(window.innerWidth < 900){
   let element = document.querySelector('#navbar-mobile').innerHTML;
   var template = Handlebars.compile(element);
   $('header').html(template);

   element = document.querySelector('#home-section-mobile').innerHTML;
   var template = Handlebars.compile(element);
   $('.home-section').html(template);
   
   $('#open-navbar').click(function(){
      document.querySelector('nav').style.top = '0%';
      document.body.style.overflow = 'hidden';
   });
   
   $('#close-navbar').click(function(){
      document.body.style.overflow = 'visible';
      document.querySelector('nav').style.top = '-150%';
   });
}
else{
   let element = document.querySelector('#navbar-for-desktop').innerHTML;
   var template = Handlebars.compile(element);
   $('header').html(template);

   element = document.querySelector('#home-section-desktop').innerHTML;
   var template = Handlebars.compile(element);
   $('.home-section').html(template);
   console.log(document.querySelector('#home-section'));

   $('#open-navbar').click(function(){
      document.body.style.overflow = 'hidden';
   });
   
   $('#close-navbar').click(function(){
      document.body.style.overflow = 'visible';
   });
}
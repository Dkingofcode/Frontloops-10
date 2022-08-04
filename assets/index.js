const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const options = { 
    root: null,
    threshold: 0,
    rootMargin: "-50px"
};

/*const observer = new IntersectionObserver(function(entries, observer){
   entries.forEach(entry => {
     if(!entry.isIntersecting){
        return;
     }
    console.log(entry.target);
    observer.unobserve(entry.target)
   });
}, options);

sections.forEach(section => {
    observer.observe(section);
})


observer.observe(sectionOne);
*/
const appearOnScroll = new IntersectionObserver(function(
    entries, appearOnScroll){
        entries.forEach(entry => {
          if(!entry.isIntersecting) {
            return;
          }  else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
          }
        });
    }, options)

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  })
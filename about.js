Splitting();

ScrollOut({
    targets: '[data-splitting]'
});



// FAIRE REMONTER LE TEXTE PAR LE COTE BAS

const options = {
  root: null, // use the document's viewport as the container
  rootMargin: "0px", // % or px - offsets added to each side of the intersection
  threshold: 0.2 };


const itemDelay = 0.1;

let fadeupCallback = (entries, self) => {
  let itemLoad = 0;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.set(entry.target, { visibility: "visible" });
      tl.from(entry.target, {
        duration: 1.8,
        y: 200,
        skewY: 30,
        autoAlpha: 0,
        //delay:  itemLoad * itemDelay,
        delay:  5.5,
        ease: "power3.out" });

      itemLoad++;
      self.unobserve(entry.target);
    }
  });
};

let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

document.querySelectorAll(".text span, .text-2 span").forEach(fadeup => {
  fadeupObserver.observe(fadeup);
});
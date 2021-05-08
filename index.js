// !!!!! FAIRE BOUGER UN CONTAINER AU MOUVEMENT DE LA SOURIS

let button = document.getElementsByClassName('button');

//quand on bouge la souris on veut qu'il y est une fonction qui parte 
document.onmousemove = function() {

    //"client" suivit de X ou Y correspond à la position de la souris de l'utilisateur 
    // 50 correspond à la puissance du mouvement
    let x = event.clientX * 30 / window.innerWidth + "%";
    let y = event.clientY * 30 / window.innerHeight + "%";

    for (let i = 0; i < 1; i++) {
        button[i].style.left = x;
        button[i].style.top = y;
        button[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }

    console.log("x =" + x);
    console.log("y =" + y);
}


// ============================================================

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
          y:-200,
          skewY: 30,
          autoAlpha: 0,
        //delay:  itemLoad * itemDelay,
          delay: 5.5,
          ease: "power3.out" });
  
        itemLoad++;
        self.unobserve(entry.target);
      }
    });
  };
  
  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
  
  document.querySelectorAll(".text span").forEach(fadeup => {
    fadeupObserver.observe(fadeup);
  });


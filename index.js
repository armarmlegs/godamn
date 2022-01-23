



// test throttle

const arrayX = document.querySelectorAll(
  ".ProductCard__title",
  "ProductCard__price"
);

let arr = ['']

const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};
document.addEventListener(
  "scroll",
  throttle((e) => {
    for (let i = 0; i < arrayX.length; i++) {
      const name = document.querySelectorAll(".ProductCard__title")[i];
      const nameTxt = name.innerText
      const price = document.querySelectorAll(".hasReduction")[i];
      const priceTxt = price.innerText;

    
    

      const bounding = name.getBoundingClientRect();

      const isInViewport =
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= window.innerHeight &&
        bounding.right <= window.innerWidth;

      isInViewport
        ? console.log(nameTxt, priceTxt)
        : null;



        // let unique = [...new Set(arr)]

        // arr.push(nameTxt, priceTxt)
        // console.log(unique)

//arr.push(nameTxt, priceTxt) && console.log(` ${arr.join(' ')}`)
//console.log(nameTxt, priceTxt)
    }
  }, 1000),
);




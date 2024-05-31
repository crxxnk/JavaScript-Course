/**
 *?Everything inside the body that is visible in the website 
 console.log(document.body);

  *?Everything inside the body that is visible in the code
  console.log(document.body.innerHTML);*/
/**
*!Replaces everything in the webiste with 'hello world'
document.body.innerHTML = 'hello world';
*?Changes the title to 'Good job!'
document.title = 'Good job!';*/

/** querySelector()
*? Lets us get any element from the page and put it inside js,
*? .innerHTML shows everything inside the button.
*! e.g hello world
*? Instead, if .innerHtml doesn't exist, it shows the button itself,
*! e.g <button>hello world<button/>,
** *NOTE* It selects only the first element of each entity,
** if you have more than one you have to specify it with a class or an id */
console.log(document.querySelector('button').innerHTML = 'hello world');
const buttonElement = document.querySelector('.js-button')
console.log(buttonElement);
var templateString = document.getElementById('nameTemplate').innerHTML;

var newTemplateString = document.getElementById('newTemplate').innerHTML;


var nameTemplate = _.template(templateString);

var newTemplate = _.template(newTemplateString);


var lotsOfThings = newTemplate({
   color: 'purple'
});


var compiledTemplate = nameTemplate({
  name: 'bill'
});

console.log(templateString);
console.log(compiledTemplate);

console.log(newTemplateString);
console.log(lotsOfThings);



// My variable of names.
var colors = [
  'blue',
  'purple',
  'yellow',
  'red'
];

//Getting a list of compiled templates by mapping over my list of names.
var newTemplates = _.map(colors, function (colorOptions) {
  return newTemplate({ color: colorOptions });
  // Notice that an object is being passed into this function
  // this object has the key that matches my template in HTML.
  //I'm calling the nameTemplate function once for each name and returning it.
});

var destination = document.querySelector('#colorTarget');
//Grab the element where I want to put the data

destination.innerHTML = newTemplates.join('');
//Assign the innerHTML of my destination element to all the name templates joined together.
















document.getElementById('main');

var header = document.getElementsByTagName("header");
// header
// header[0]
headerInner = header[0]
// headerInner
headerInner.style.color = "#f0f"


document.getElementsByTagName('nav');

var getNav = document.getElementsByTagName('nav');


var theUl = getNavWhole.children[0]
var theChildren = theUl.children[1]


var mainSection = document.getElementById("main")
var newP = document.createElement("p");
mainSection.appendChild(newP);

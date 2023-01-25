/*
Write a function that takes an array of objects and erturns an array
of the objects "name" property, only if that property exists
*/

function getNames(obj) {
  const newArr = [];
  obj.forEach((item) => {
    //console.log(item.name)
    if (item.hasOwnProperty("name")) {
      newArr.push(item.name);
    }
    // if (item.name !== undefined) {
    //   newArr.push(item.name);
    // }
  });
  return newArr;
}

console.log(getNames(
    [
        { a: 1 }, 
        { name: "Jane" }, 
        {}, 
        { name: "Dave" }
    ]
));

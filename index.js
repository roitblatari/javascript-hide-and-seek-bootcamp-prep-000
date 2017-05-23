function getFirstSelector(selector) {
  selector = document.querySelector(selector)
  return selector
}
function nestedTarget(selector) {
  selector = document.querySelector("#nested .target")
  return selector
}
function deepestChild(selector) {
  selector = document.querySelector("#grand-node > div > div > div > div")
  return selector
}
function increaseRankBy(n) {

  var arr = document.querySelectorAll(".ranked-list")
  // find the elements that need to be changed
  // for each child element in selector array
  // get the innerHTML, parseInt, then add 1
   for (var i = 0; i < arr.length; i++) {
     // i = ul element
     var children = arr[i].children
     for(var j = 0; j < children.length; j++){
     var selector = children[j].innerHTML = parseInt(children[j].innerHTML) + n ;
    }
  }
}

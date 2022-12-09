const paths = document.querySelectorAll("path");

function drawPaths() {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  paths.forEach((path, i) => {
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    //path.style.strokeDashoffset = pathLength;

    path.style.strokeDashoffset = pathLength - pathLength * scrollPercentage;
  });
}

drawPaths();
document.addEventListener("scroll", drawPaths);

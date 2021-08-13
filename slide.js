let images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
let i = 0;
let slideShow;
show = () => {
  if (i < images.length) {
    console.log(i);
    document.getElementById("img").src = images[i];
    i++;
  } else {
    i = 0;
  }
}
slideShow = setInterval(show, 2000);

function pause() {
  clearInterval(slideShow);
}

function resume() {
  slideShow = setInterval(show, 2000);
}

function previous() {
  clearInterval(slideShow);
  if (i > 0) {
    i = i - 1;
    document.getElementById("img").src = images[i];
  } else {
    i = 4;
    document.getElementById("img").src = images[i];
  }
  slideShow = setInterval(show, 2000);
}

function next() {
  clearInterval(slideShow);
  if (i >= 4) {
    i=0;
    document.getElementById("img").src = images[i];
  } else {
    i++;
    document.getElementById("img").src = images[i];
  }
  slideShow = setInterval(show, 2000);
}
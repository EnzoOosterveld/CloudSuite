window.onscroll = function() {magicScroll()};

function magicScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("scrolling");
    
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
    document.getElementById("navbar").classList.remove("scrolling");
  } else {
    document.getElementById("navbar").classList.add("static");
  }
}
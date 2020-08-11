$("ul").on("click","li",(function () {//lall the li inside of ul will get completed class
  //if li is grey then make it black else make it grey
  $(this).toggleClass("completed");
  //   if (this.style.color === "black") {
  //     this.style.color = "rgb(128,128,128)";
  //     this.style.textDecoration = "line-through";
  //   }
  //   else{
  //     this.style.color = "black";
  //     this.style.textDecoration = "none";
  //   }

  //   this.css({
  //       color:"grey",
  //       textDecoration:"line-throgh"
  //   })
}));

$("ul").on("click","span", function (event) {
  //we are using event as argument so that we can stop bubbling or to focus only on what clicked
  $(this)
    .parent()
    .fadeOut(300, function () {
      $(this).remove();
    }); //remove the li of the clicked span

  event.stopPropagation();
});

$("input[type='text'").on("keypress", function (event) {
  if (event.which === 13) {
    //checking for enter key pressed
    //grabbing the todo task
    const todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

$('.fa-plus').on("click",function(){
    $("input[type='text'").fadeToggle();
});
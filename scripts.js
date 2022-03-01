var filter = document.querySelector(".filter");

var dropdown_li_items = document.querySelectorAll(".dropdown ul li label");

var checkbox_items = document.querySelectorAll(".dropdown ul li input");

var filter_text = document.querySelector(".filter .text");

filter.addEventListener("click", function(){
  filter.classList.toggle("active");
})

dropdown_li_items.forEach(function(item, index){
  item.addEventListener("click", function(){

      checkbox_items.forEach(function(c_item, c_index){
        if(index == c_index){
          var item_text = item.querySelector(".text").innerText;
          filter_text.innerText = item_text;
          c_item.checked = true;
        }
        else{
           c_item.checked = false;
        }
      });

      filter.classList.remove("active");
  })
});
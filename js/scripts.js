//business logic
function movieTicket(name, age, time) {
  this.name = name;
  this.age = age;
  this.time = time;
}

movieTicket.prototype.ticketTotal = function() {
  return this.age + this.time;
}


//user interface logic
$(document).ready(function() {
  $(".ticket-calculator").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var inputtedName = $("input:radio[name=name]:checked").val();
    var inputtedAge = parseInt($("input:radio[name=age]:checked").val());
    var inputtedTime = parseInt($("input:radio[name=time]:checked").val());
    var newTicket = new movieTicket(inputtedName, inputtedAge, inputtedTime);

    
    $(".show-ticket").show();

    $("ul.ticketInfo").append("<li>" + "$" + newTicket.ticketTotal() + ".00" + "</li>");



  });
});

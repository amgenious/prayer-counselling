var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//  document.getElementById("btn").addEventListener("click", myFunction());
// document.getElementById("btn1").addEventListener("click", myFunction);

//  function myFunction() {
  // var name = document.getElementById("name").value;
  // var email = document.getElementById("email").value;
  // var message = document.getElementById("message").value;
  // 

  //console.log(body);

// Email.send({
//   SecureToken : "b49bffb5-2659-4926-b795-2ceb5d3f2249",
//   To : 'henrytweneboah956@gmail.com',
//   From : email,
//   Subject : "This is the subject",
//   Body : body
// }).then(
// message => alert(message)
// );

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "henrytweneboah956@gmail.com",
//     Password : "35D35987C2F664B0075A99EFF4C15E98E9A0",
//     To : 'henrytweneboah956@gmail.com',
//     From : email,
//     Subject : "This is the subject",
//     Body : body
// }).then(
//   swal({
//     text: "Submitted Succesfully",
//     icon: "success",
//     button: "Ok"
//   })
// );
//  }

// function SendMail(){
//   var params = {
//     from_name:document.getElementById("name").value,
//     email:document.getElementById("email").value,
//     message:document.getElementById("message").value
//   }
//   emailjs.send("service_v5ocjzu", "template_31p3p0s", params).then(function (res){
//     alert('success');
//   })
// }
// b49bffb5-2659-4926-b795-2ceb5d3f2249


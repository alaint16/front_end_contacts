$(document).ready(function() {

    $(".submit").click(function(e) {
        e.preventDefault() //this stop the default actions on the form. and excute my js file

        var contact = {
            name: $(".name").val(),
            lastname: $(".lastname").val(),
            address: $(".address").val(),
            email: $(".email").val(),
            dob: $(".dob").val(),
            title: $(".title").val(),
            country: $(".country").val()
        }

        $.post("http://localhost:5454/contact", contact, function(result) {
            console.log(result)
            $(.name).val(" ");
            $(".lastname").val(" "),
            $(".address").val(" "),
            $(".email").val(" "),
            $(".dob").val(" "),
            $(".title").val(" "),
            $(".country").val(" ")
        })

    })



});

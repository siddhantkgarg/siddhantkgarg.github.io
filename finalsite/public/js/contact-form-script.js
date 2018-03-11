$("#contactForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

$("#resetcontactform").on("click", function(event) {
    $("#contactFormSuccess").hide();
    $("#contactForm").show();
    $("#contactForm")[0].reset();
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();
    var post_data = {
        "name": name,
        "email": email,
        'msg_subject': msg_subject,
        "message": message
    };
    $.ajax({
        type: "POST",
        url: "/email",
        data: post_data,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        },
        error: function(text) {
            formError();
            submitMSG(false, "Something went wrong! Don't forget, you can raise query on WhatsApp too.")
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    $("#contactForm").hide();
    submitMSG(true, "Yay! Sit back and relax while we go through your email.");
    $("#contactFormSuccess").show();

}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    if (valid === true) {
        $("#msgSubmitSuccess").removeClass().addClass(msgClasses).text(msg);
    } else
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
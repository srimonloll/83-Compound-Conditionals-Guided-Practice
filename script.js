$("button").click(function() {
    let time = $(".time").val();
    let hungry = $(".hungry").val();

    if(time === "morning" && hungry === "yes") {
        $(".result").text("Eat breakfast.");
    } 
    else if(time ==="morning" && hungry === "no") {
        $(".result").text("Sleep in.");
    } 
    else if(time === "afternoon" && hungry === "yes") {
        $(".result").text("Eat lunch.");
    } 
    else if(time ==="afternoon" ||  time === "evening" && hungry === "no") {
        $(".result").text("Hang out with friends.");
    } 
    else if(time === "evening" && hungry === "yes") {
        $(".result").text("Eat dinner.");
    } 
    else {
        $(".result").text("ERROR. Try again.");
    }
});
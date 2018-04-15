$(document).ready(function() {
	//$(".main_btn").on("click", function() {
	//	$(".overlay").fadeToogle("slow");
	//});
	function showModal() {
    	$(".overlay").fadeToggle("slow");
    	$(".modal").css({"margin-top": "-700px", "display": "block"});
    	$(".modal").animate(
    	{
    		marginTop: "50px"
    	}, 1000)
    }

	$(".main_btna").click(showModal);
	$(".main_btn").click(showModal);
	$("a[href='#sheldure']").click(showModal);


    $(".close").click(function() {
    	$(".overlay").fadeToggle("slow");
    	$(".modal").animate(
    	{
    		marginTop: "-700px",
    		display: "none"

    	}, 1000)
    });
});
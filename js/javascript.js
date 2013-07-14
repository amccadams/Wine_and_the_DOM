$(document).ready(function(){
$("#filters").on("click", ".on-sale", function(){
	$(".wine").filter(".on-sale").addClass("highlight");
});
$("filters").on("click",".featured", function(){
	$(".wine").filter(".featured").addClass("highlight");
});
});

var $: any;
var span1: number = 0;
var span2: number = 0;
var span3: number = 0;
var span4: number = 0;
var span5: number = 0;
var span6: number = 0;
var span7: number = 0;
var span8: number = 0;
var span9: number = 0;
var span10:number = 0;

window.onload = () => {

    $("#span_1").text(span1);
    $("#span_2").text(span2);
    $("#span_3").text(span3);
    $("#span_4").text(span4);
    $("#span_5").text(span5);
    $("#span_6").text(span6);
    $("#span_7").text(span7);
    $("#span_8").text(span8);
    $("#span_9").text(span9);
    $("#span_10").text(span10);


    $('#btn_1').on("click", () => {
        span1++;
        $("#span_1").text(span1);

    });

    $('#btn_2').on("click", () => {
        span2++;
        $("#span_2").text(span2);

    })
    $('#btn_3').on("click", () => {
        span3++;
        $("#span_3").text(span3);

    })
    $('#btn_4').on("click", () => {
        span4++;
        $("#span_4").text(span4);

    })
    $('#btn_5').on("click", () => {
        span5++;
        $("#span_5").text(span4);

    })
    $('#btn_6').on("click", () => {
        span6++;
        $("#span_6").text(span6);

    })
    $('#btn_7').on("click", () => {
        span7++;
        $("#span_7").text(span7);

    })
    $('#btn_8').on("click", () => {
        span8++;
        $("#span_8").text(span8);

    })
    $('#btn_9').on("click", () => {
        span9++;
        $("#span_9").text(span9);

    })
    $('#btn_10').on("click", () => {
        span10++;
        $("#span_10").text(span10);

    })
    $("#mornBtn").on("click", () => {
        $("#Morning").css("display", "");
        $("#eveing").css("display", "none");
        $("#home").css("display", "none");
    });
    $("#homeBtn").on("click", () => {
        $("#Morning").css("display", "none");
        $("#eveing").css("display", "none");
        $("#home").css("display", "");
    });
    $("#evenBtn").on("click", () => {
        $("#Morning").css("display", "none");
        $("#eveing").css("display", "");
        $("#home").css("display", "none");
    });

}



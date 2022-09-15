$(function() {

    $(".firstStepRadio").on('click', function() {
        var dataId = $(this).attr("data-id");
     	//$('.nextButton').attr("data-id", dataId);
        
        $('#set_1 .nextButton').attr("data-id", dataId);

        $('#set_1 .toggleWrapper').removeClass('active');
        $('#set_1.questionGroup').addClass('in');
		$('.toggleWrapper').removeClass('active');

        if ($("#POSRES").is(":checked")) {
            $("#quantity").removeAttr("disabled");
           // $('#projectedDollarVolume').attr('disabled', true);
            //$('#moontlyDollarVolume').attr('disabled', true);
            $('form.quiz_form').trigger("reset");
            $(this).parent().parent('.toggleWrapper').addClass('active');
           $('#set_2.questionGroup').removeClass('in');
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
           $(this).prop("checked", "true");
           //$('#set_1 .nextButton').attr("data-id", 'set_2');
            
        } else if ($("#POSRET").is(":checked")) {
            $("#quantity").removeAttr("disabled");
           // $('#projectedDollarVolume').attr('disabled', true);
           // $('#moontlyDollarVolume').attr('disabled', true);
            $('form.quiz_form').trigger("reset");
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $('#set_4.questionGroup').removeClass('in');
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
            $(this).prop("checked", "true");
           //$('#set_1 .nextButton').attr("data-id", 'set_4');
        } else if ($("#CCP").is(":checked")) {
            $("#quantity").attr("disabled", "disabled");
           // $('#projectedDollarVolume').attr('disabled', true);
           // $('#moontlyDollarVolume').attr('disabled', true);
            $('form.quiz_form').trigger("reset");
            $(this).parent().parent('.toggleWrapper').addClass('active');
          $('#set_6.questionGroup').removeClass('in');
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
            $(this).prop("checked", "true");
           // $('#set_1 .nextButton').attr("data-id", 'set_6');
        } else {
            $('#set_1.questionGroup').removeClass('in');
        }
    });


    $("#cbRESSelectAll").click(function() {
        $('.businessTypeSelect').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#cbRETSelectAll").click(function() {
        $('.retailTypeSelect').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });


    $("#AcceptCreditCardsTypeSelect").click(function() {
        $('.AcceptCreditCardsTypeSelect ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#cbRESSelectALLhardwareAndSoftware").click(function() {
        $('.secondStepRadio ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#CustomerFacingDisplaySelect").click(function() {
        $('.additionalHardwareAndSoftware ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#cbCCPSelectAll").click(function() {
        $('.describeBusiness ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });



    var $selectService = $('.businessTypeSelect');
    $selectService.click(function() {
        $selectService.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });

    var $retailTypeSelect = $('.retailTypeSelect');
    $retailTypeSelect.click(function() {
        $retailTypeSelect.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });

    var $AcceptCreditCardsTypeSelect = $('.AcceptCreditCardsTypeSelect');
    $AcceptCreditCardsTypeSelect.click(function() {
        $AcceptCreditCardsTypeSelect.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });


    var $secondStepRadio = $('.secondStepRadio');
    $secondStepRadio.click(function() {
        $secondStepRadio.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });

    var $CustomerFacingDisplaySelect = $('.additionalHardwareAndSoftware');
    $CustomerFacingDisplaySelect.click(function() {
        $CustomerFacingDisplaySelect.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });

    var $describeBusinessSelect = $('.describeBusiness');
    $describeBusinessSelect.click(function() {
        $describeBusinessSelect.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });




    $("#set_2 .nextButton").click(function() {

        $(".businessTypeSelect").each(function() {
            if ($(this).prop('checked') == true) {
                // alert('OK');
                $('.questionGroup').addClass('in');
                $('#set_9.questionGroup').removeClass('in');
                $('.completedBar').css("width", '40%');
                $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
                $('.completedBar').html('40%');

                $('#set_9 .backButton').attr("data-id", 'set_2');
                $('#set_9 .nextButton').attr("data-id", 'set_3');
                $("#error1").html("");
                return false;
            } else {
                $("#error1").html("Please make a selection.");
            }
        });

    });



    $("#set_3 .nextButton").click(function() {
        $(".secondStepRadio").each(function() {
            if ($(this).prop('checked') == true) {
                // alert('OK');
                $('.questionGroup').addClass('in');
                $('#set_10.questionGroup').removeClass('in');
                $('.completedBar').css("width", '80%');
                $('.completedBar').html('80%');
                $('.compleredBarText').html("");

                $('#set_10 .backButton').attr("data-id", 'set_3');
                $('#set_10 .nextButton').attr("data-id", 'Success');
                $("#error3").html("");
                return false;
            } else {
                $("#error3").html("Please make a selection.");
            }
        });
    });




    $("#set_4 .nextButton").click(function() {
        $(".retailTypeSelect").each(function() {
            if ($(this).prop('checked') == true) {
                // alert('OK');
                $('.questionGroup').addClass('in');
                $('#set_9.questionGroup').removeClass('in');
                $('.completedBar').css("width", '40%');
                $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
                $('.completedBar').html('40%');

                $('#set_9 .backButton').attr("data-id", 'set_4');
                $('#set_9 .nextButton').attr("data-id", 'set_5');
                $("#error4").html("");
                return false;
            } else {
                $("#error4").html("Please make a selection.");
            }
        });

    });

    $("#set_5 .nextButton").click(function() {
        $(".additionalHardwareAndSoftware").each(function() {
            if ($(this).prop('checked') == true) {
                $('.questionGroup').addClass('in');
                $('#set_10.questionGroup').removeClass('in');
                $('.completedBar').css("width", '80%');
                $('.completedBar').html('80%');
                $('.compleredBarText').html("");
                $('#set_10 .backButton').attr("data-id", 'set_5');
                $('#set_10 .nextButton').attr("data-id", 'Success');
                $("#error5").html("");
                return false;
            } else {
                $("#error5").html("Please make a selection.");
            }
        });

    });


    $("#set_6 .nextButton").click(function() {
        $(".describeBusiness").each(function() {
            if ($(this).prop('checked') == true) {
                $('.questionGroup').addClass('in');
                $('#set_7.questionGroup').removeClass('in');
                $('.completedBar').css("width", '40%');
                $('.completedBar').html('40%');
                $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
                $("#error6").html("");
                return false;
            } else {
                $("#error6").html("Please make a selection.");
            }
        });


    });

    $("#set_7 .nextButton").click(function() {

        if ($('#ddlCCPmoontlyDollarVolume option:selected').val() == '' && $('#ddlCCPprojectedDollarVolume option:selected').val() == '') {
            $("#error7").html("Please make a selection.");
        } else {
            $('.questionGroup').addClass('in');
            $('#set_8.questionGroup').removeClass('in');
            $('.completedBar').css("width", '60%');
            $('.completedBar').html('60%');
            $('.compleredBarText').html("");
            $("#error7").html("");
        }
    });



    $("#set_8 .nextButton").click(function() {
        $(".AcceptCreditCardsTypeSelect").each(function() {
            if ($(this).prop('checked') == true) {
                $('.questionGroup').addClass('in');
                $('#set_10.questionGroup').removeClass('in');
                $('.completedBar').css("width", '80%');
                $('.completedBar').html('80%');
                $('.compleredBarText').html("");
                $('#set_10 .backButton').attr("data-id", 'set_8');
                $('#set_10 .nextButton').attr("data-id", 'Success');
                $("#error8").html("");
                return false;
            } else {
                $("#error8").html("Please make a selection.");
            }
        });
    });


    
    $("#set_9 .nextButton").click(function() {

        const next_data_id = $('#set_9 .nextButton').attr("data-id");

        if ($("#quantity").val() == "") {
            //alert("Please enter Name!");
            $("#error9").html("Please make a selection.");
        } else {
            
            $('.questionGroup').addClass('in');
            $('.questionGroup#' + next_data_id).removeClass('in');

            $('.completedBar').css("width", '60%');
            $('.completedBar').html('60%');
            $('.compleredBarText').html("");
            $("#error9").html("");
        }


    });



    $("#set_2 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
    });

    $("#set_3 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_9.questionGroup').removeClass('in');
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
    });

    $("#set_4 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
    });

    $("#set_5 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_9.questionGroup').removeClass('in');
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
        $('#set_10 .backButton').attr("data-id", 'set_8');
        $('#set_10 .nextButton').attr("data-id", 'Success');
    });

    $("#set_6 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
    });

    $("#set_7 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_6.questionGroup').removeClass('in');
        $('.completedBar').css("width", '20%');
        $('.completedBar').html('20%');
        $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
    });

    $("#set_8 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_7.questionGroup').removeClass('in');
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
    });


    $("#set_9 .backButton").click(function() {
        const back_data_id = $('#set_9 .backButton').attr("data-id");

        $('.questionGroup').addClass('in');
        $('.questionGroup#' + back_data_id).removeClass('in');

        $('.completedBar').css("width", '20%');
        $('.completedBar').html('20%');
        $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
    });

    
    $("#set_10 .backButton").click(function() {

        const back_data_id = $('#set_10 .backButton').attr("data-id");

        $('.questionGroup').addClass('in');
        $('.questionGroup#' + back_data_id).removeClass('in');

        $('.completedBar').css("width", '60%');
        $('.completedBar').html('60%');
        $('.compleredBarText').html("");
    });

    
   $("input[name='selectbudget']").click(function () {
                var budgetMonth = $(this).val();
                $("div.selectbudget").hide();
                $("#" + budgetMonth).show();

                if ($(this).val() == 'Yes') {
                    $('#ddlCCPmoontlyDollarVolume').attr('disabled', false);
                    $('#ddlCCPprojectedDollarVolume').attr('disabled', true);
                    //alert('Select 1');
                }
                else if ($(this).val() == 'No') {
                    $('#ddlCCPprojectedDollarVolume').attr('disabled', false);
                    $('#ddlCCPmoontlyDollarVolume').attr('disabled', true);
                    // alert('Select 1');
                }

            });


    $('#set_1 .nextButton').on("click", function(){
        var dataId1 = $(this).attr("data-id");
        if(dataId1 == ' '){
           // alert('Test');
            $("#msg").html("Please make a selection.");
        } else{
            $('.questionGroup').addClass('in');
            $('.questionGroup#' + dataId1).removeClass('in');   
            $("#msg").html("");
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
        }
        
      });

    $("#set_10 .nextButton").on( "click", function() {
        var name = $("#Name").val();
		var phone = $("#Phone").val();
		var email = $("#Email").val();
		var zip = $("#Zip").val();
		var calltime = $("#BestCallTime").val();
        var qty = $("#quantity").val();

		var posType = $('input[name="selec_pos"]:checked').val();

        var budgetType = $('input[name="selectbudget"]:checked').val();


        var businessTypeSelect = [];
        $('.businessTypeSelect').each(function() {
            if ($(this).is(":checked")) {
                businessTypeSelect.push($(this).val());
            }
        });

        var cbRESSelectAll = [];
        $('.businessTypeSelect').each(function() {
            if ($(this).is(":checked")) {
                cbRESSelectAll.push($(this).val());
            }
        });

        cbRESSelectAll = cbRESSelectAll.toString();
 

        var cbRETSelectAll = [];
        $('.retailTypeSelect').each(function() {
            if ($(this).is(":checked")) {
                cbRETSelectAll.push($(this).val());
            }
        });
        cbRETSelectAll = cbRETSelectAll.toString();
        //console.log(cbRETSelectAll);


        var cbRESSelectALLhardwareAndSoftware = [];
        $('.secondStepRadio').each(function() {
            if ($(this).is(":checked")) {
                cbRESSelectALLhardwareAndSoftware.push($(this).val());
            }
        });   
        cbRESSelectALLhardwareAndSoftware = cbRESSelectALLhardwareAndSoftware.toString();
       // console.log(cbRESSelectALLhardwareAndSoftware);        


        var CustomerFacingDisplaySelect = [];
        $('.additionalHardwareAndSoftware').each(function() {
            if ($(this).is(":checked")) {
                CustomerFacingDisplaySelect.push($(this).val());
            }
        });
        CustomerFacingDisplaySelect = CustomerFacingDisplaySelect.toString();
       // console.log(CustomerFacingDisplaySelect);


        var cbCCPSelectAll = [];
        $('.describeBusiness').each(function() {
            if ($(this).is(":checked")) {
                cbCCPSelectAll.push($(this).val());
            }
        });
        cbCCPSelectAll = cbCCPSelectAll.toString();
      //  console.log(cbCCPSelectAll);

        var ddlmoontlyDollarVolume = $('select[name="ddlmoontlyDollarVolume"]').find(":selected").val();
        var projectedDollarVolume = $('select[name="projectedDollarVolume"]').find(":selected").val();


        var AcceptCreditCardsTypeSelect = [];
        $('.AcceptCreditCardsTypeSelect').each(function() {
            if ($(this).is(":checked")) {
                AcceptCreditCardsTypeSelect.push($(this).val());
            }
        });
        AcceptCreditCardsTypeSelect = AcceptCreditCardsTypeSelect.toString();
       // console.log(AcceptCreditCardsTypeSelect);        


        var valid = true;  
    // var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        //var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        $email = $('#Email');

        if ($email.val() == '') {
            $("#errorEmail").html('This information is required.');
            valid = false;
        } 
        if($email.val() !== ""){
            if(!pattern.test($email.val())){
                $("#errorEmail").html('Enter a valid email address.');               
                valid  = false;
            }
        }

        if ($('#Zip').val() == '') {
            $("#errorZip").html('This information is required.');
            valid = false;
        }
        
        if(valid) {
            
            
            $.ajax
		({
			 type: "POST",
			 url: "email_ajax.php",
			// data: "name="+Name+"&phone="+Phone+"&email="+Email+"&zip="+Zip+"&calltime="+BestCallTime,
			
			 //data: $(this).serialize(),
			data: {
				name: name,
				phone: phone,
				email: email,
				zip: zip,
				calltime:calltime,
                posType:posType,
				qty: qty,
                cbRESSelectAll:cbRESSelectAll,
                cbRETSelectAll: cbRETSelectAll,
                cbCCPSelectAll: cbCCPSelectAll,
                cbRESSelectALLhardwareAndSoftware: cbRESSelectALLhardwareAndSoftware,
                CustomerFacingDisplaySelect: CustomerFacingDisplaySelect,
                budgetType: budgetType,
                AcceptCreditCardsTypeSelect: AcceptCreditCardsTypeSelect,
                ddlmoontlyDollarVolume: ddlmoontlyDollarVolume,
                projectedDollarVolume: projectedDollarVolume,           

			},			 

			 beforeSend: function() {
                $('.spinner').show();                
                $('#set_10 .questionGroupForm').addClass('blur_ele');
                $('#set_10 .headline').addClass('blur_ele');
			 },      
			 success: function(data)
			 {
                $('.questionGroup').addClass('in');
                $('.completedBar').css("width", '100%');
                $('.completedBar').html('100%');
                $('.compleredBarText').remove();
                $('#SuccessForm.questionGroup').removeClass('in');
                $('.spinner').hide();
                $('#set_10 .questionGroupForm').removeClass('blur_ele');
                $('#set_10 .headline').removeClass('blur_ele');
				
				setInterval('location.reload()', 15000);  //page reload after 15 seconds
			}
		});

        }    

    });


    $(".selectbudgetButton").on('change', function() {
        
        $('#set_7 .toggleWrapper').removeClass('active');

        if ($("#rbCCPYes").is(":checked")) {
          //  alert('1');
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $(this).prop("checked", "true");

        } else if ($("#cbCCPNo").is(":checked")) {
          //  alert('2');
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $(this).prop("checked", "true");        
        }
    });
});


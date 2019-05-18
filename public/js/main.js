window.onload = function(){
    defineColorExperience();
    hideShowExperinceNav();
}

//Check changes on #experience_content
$("body").on('DOMSubtreeModified', "#experience_content", function() {
    defineColorExperience()
    hideShowExperinceNav();
});


// $('.experienceNav > .nav-link').on('click', function(e){
//     var classes = $(e.target).closest( ".itemExperience" ).attr('class').split(/\s+/);
//     var classBG = classes.map(c => c.indexOf("bg-")?'':c ).join('');
//     $('#experience_content').removeClass();
//     $('#experience_content').addClass(classBG);
//     hideShowExperinceNav();
// });

function hideShowExperinceNav(){
  //Check if have content on #experience_content
  if($('#experience_content').children().length >= 1){
        $(".experience_nav_desc").hide();
    }else{
        $(".experience_nav_desc").show();
    }
}


function defineColorExperience(){
    $('#experience_content').removeClass();
    if($(".experienceNav > .is-active").length > 0){
        var classes = $(".experienceNav > .is-active").children( ".itemExperience" ).attr('class').split(/\s+/);
        var classBG = classes.map(c => c.indexOf("bg-")?'':c ).join('');
        $('#experience_content').addClass(classBG);
    }
}
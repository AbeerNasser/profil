 var bio = {
        "name" : "John Deo",
        "role" : "Web Develope",
        "contacts": {
            "mobile": "650-555-5555",
            "email": "john@example.com",
            "github": "johndeo",
            "twitter": "@johndeo",
            "location": "SanFrancisco"
        },
        "welcomeMessage": "lorem ipsum dolar sit amet etc etc etc.",
        "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
        "bioPic": "images/fry.jpg",
    //// appear header /////
        'display' : function () {
            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
            var Message_Formate = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").append(formattedImage);
            $("#header").append(Message_Formate);
            $("#header").prepend(formattedName + formattedRole );
            
            if(bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                bio.skills.forEach(function(skill){
                var formattedSkill = HTMLskills.replace("%data%", bio.skills);
                $("#header").append(formattedSkill);
                });
                /*for (var skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#header").append(formattedSkill);
            }*/
            
        }
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
        }
    };
   
  
      //// work  //
   var work = {
    "jobs": [{
          "employer" : "Planet Express",
          "title" : "Delivery Boy",
          "dates" : "January3000-future",
          "description" : "who moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feetwho moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feet "
        },
        {
          "employer" : "Panuccis Pizza",
          "title" : "Delivery Boy",
          "dates" : "1998-December31-1999",
          "description" : " who moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feetwho moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feet "
    }],
       
///// appear work ////
    'display' : function() {
        for(var i= 0; i< work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};



    //// projects ////        
    var projects = {
        "projects": [{
            "title" : "Sample Project 1",
            "dates" : 2014,
            "description" :  "who moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feetwho moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feet who moved my cheese cheesy feet",
            "images": ["images/protfolio.PNG"]
        }] ,
        
    //// Displaying Projects Section
    'display':function() {

        for (var project= 0 ; project < projects.projects.length ; project++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            
            var image =0;
            while ( image < projects.projects[project].images.length ) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
                image++;
            }
        }
    }
};
    


//// education ////

    var education = {
        "schools": [{
            "name" : "Nova southeastern university",
            "location" : "Fort Lauderdal,FL",
            "degree" : "Masters",
            "majors" :  ["CS"],
            "dates" :  2013,
            "url": "http://example.com"
        }, {
          "name" : "Eckerd University",
          "location" : "saint, FL",
          "degree" : "BA",
          "majors" :  ["CS"],
          "dates" :  2003,
          "url": "http://example.com"
        }],
        "onlineCourses": [
            {
                "title": "javaScript Syntax",
                "school": "Udacity",
                "dates": 2014,
                "url" : "http://www.udacity.com/course/ud804"
        }],
        
    /// appear Education ///
    'display': function() {
        for (var school=0; school < education.schools.length ; school++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedName , formattedDegree, formattedDates,formattedLocation, formattedMajor);
        }

        if (education.onlineCourses.length !== 0) {
            $("#education").append();
        }
        for (var course =0; course< education.onlineCourses.length ; course++) {
            $("#education").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDate,formattedURL);
        }
    }
};

// this records the location of the clicks on page and outputs to console

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

//Interneational Mode and Button

    function inName(name){
        name = name.trim().split("");
        console.log(name);
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
        return name[0] + "" + name[1];
    }
// $('#main').append(internationalizeButton);
// adds google map 
 $("#mapDiv").append(googleMap);

////  Display functions to run in page ////

    
bio.display();
work.display();
projects.display(); 
education.display();

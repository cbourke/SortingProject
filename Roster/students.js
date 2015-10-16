$(document).ready(function(){

      var rosterElements = ["firstName", "lastName", "nuid", "email", "year", "gpa", "courseNumber", "courseName"];

      $.getJSON( "./students.json")
       .done( function( data ) {
         //put the roster in the global scope
         roster = data.roster;
         //render the table
         display();
	     })
       .fail(function(jqxhr, textStatus, error ) {
         var err = textStatus + ", " + error;
         $("#errorMsg").css("display", "inline").html("error: " + err);
       });
}); //end of .ready

var years = ["Freshman", "Sophomore", "Junior", "Senior"];

function display() {
  $("#roster tbody").empty();
  $.each( roster, function( key, val ) {
    var item = "<tr><td>" + val.firstName +
               "</td><td>" + val.lastName +
               "</td><td>" + val.nuid +
               "</td><td>" + val.email +
               "</td><td>" + val.year +
               "</td><td>" + val.gpa +
               "</td><td>" + val.courseNumber +
               "</td><td>" + val.courseName +
               "</td></tr>";
    $("#roster tbody").append(item);
  });
}

function resort() {
  var sortBy = $("#sortBy").val();
  if(sortBy === "byName") {
    roster.sort(byName);
  } else if(sortBy === "byCourse") {
    roster.sort(byCourse);
  } else if(sortBy === "byGPADesc") {
    roster.sort(byGPADesc);
  } else if(sortBy === "byGPAAsc") {
    roster.sort(byGPAAsc);
  } else if(sortBy === "byYear") {
    roster.sort(byYear);
  }
  display();
}

/**
 * This comparator function compares two student
 * objects and orders them first by last name,
 * then by first name.
 */
function byName(a, b) {
  if(a.lastName === b.lastName) {
    if(a.firstName === a.lastName) {
      return 0;
    } else if(a.firstName < b.firstName) {
      return -1;
    } else {
      return 1;
    }
  } else if(a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}

/**
 * This comparator function compares two
 * objects and orders them course number.
 */
function byCourse(a, b) {
  //TODO
}

/**
 * This comparator function compares two student
 * objects and orders by GPA in descending orders
 */
function byGPADesc(a, b) {
  //TODO
}

/**
 * This comparator function compares two student
 * objects and orders by GPA in ascending orders
 */
function byGPAAsc(a, b) {
  //TODO
}

/**
 * This comparator function compares two student
 * objects and orders them by year
 */
function byYear(a, b) {
  //TODO
}

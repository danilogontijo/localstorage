// localStorage.js
/* Later we will be using Classes and loading student data from external data file */

function saveData(){
   // alert('hi');
   let sname1 = document.getElementById('sname1').value;
   let sid1 = document.getElementById('sid1').value;
   let tuition1 = document.getElementById('tuition1').value;
   let fees1 = document.getElementById('fees1').value;
   let scholarship1 = document.getElementById('scholarship1').value;

   localStorage.setItem("sname1", sname1);
   localStorage.setItem("sid1", sid1 );
   localStorage.setItem("tuition1",tuition1 );
   localStorage.setItem("fees1", fees1);
   localStorage.setItem("scholarship1", scholarship1);
}
function makeReport(){
    
    let sname1 = localStorage.getItem("sname1");
    let sid1 = localStorage.getItem("sid1");
    let tuition1 = localStorage.getItem("tuition1");
    let fees1 = localStorage.getItem("fees1");
    let scholarship1 = localStorage.getItem("scholarship1");

    let outamount = fees1 - scholarship1;

    document.getElementById('outname').value = sname1;
    document.getElementById('outid').value = sid1;
    document.getElementById('outamount').value = outamount;
}
function deleteALL(){
    localStorage.clear();
}
function deleteFees(){
    localStorage.removeItem('fees1');
}
                        /*   REQUETE AJAX    */  
                //View all data (method "GET")
 
function reqData(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            display(JSON.parse(this.responseText));
        }  else if(this.status === 404 && this.readyState === 4)
        {
            alert("An error occur please refresh!");
        }  
    };
    xhr.open("GET", url, true);
    xhr.send();
};
reqData();

                // View more info (method "GET")

function btnmoreInfo(ID) {

   
    document.getElementById("title").innerText = ID;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            modalContent(JSON.parse(this.responseText));
        }  else if(this.status === 404 && this.readyState === 4)
        {
            alert("An error occur please refresh !!");
        }  
    };
    xhr.open("GET", url + ID, true);
    xhr.send();

}

                // Create new data (method "POST")

    let name = document.getElementById("newName").value;
    let lastName = document.getElementById("newLastName").value;
    let jobTitle = document.getElementById("newJobTitle").value;
    let email = document.getElementById("newEmail").value;

function btnSubmit() {

    const params = {
        name:name,
        last_name:lastName,
        job_title:jobTitle,
        email:email

    }
  
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }  else if(this.status === 404 && this.readyState === 4)
        {
            alert("An error occur please refresh");
        }
    };
   

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('content-Type', 'application/json');
    xhttp.send(JSON.stringify(params));
    alert("Nouvel employé ajouté")
    document.getElementById('myForm').reset();
    location.reload(2);

}

                // Edit data (method"PUT")
        
function btnEdit(ID) {

    let name = document.getElementById("editName").value;
    let lastName = document.getElementById("editLastName").value;
    let jobTitle = document.getElementById("editJobTitle").value;
    let email = document.getElementById("editEmail").value;

    var xhr = new XMLHttpRequest();
    
    xhr.open("PUT", url + ID, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.send("name=" + name + 
    "&last_name=" + lastName + 
    "&job_title=" + jobTitle +
     "&email=" + email);
    alert("Le post a été modifié")
    document.getElementById('myFormModal').reset();
    location.reload(1);
}
   

                // Remove data (method "DELETE")

function btnDel(ID, e) {

    var confirmAsk = confirm("Êtes-vous sûr ?");

    if (confirmAsk) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                display(JSON.parse(this.responseText));
                e.parentElement.parentElement.remove();
                alert("l'employé a été supprimé")
            }  else if(this.status === 404 && this.readyState === 4)
            {
                alert("An error occur please refresh");
            }
            
        };
        xhr.open("DELETE", url + ID, true);
        xhr.send();
    }
}
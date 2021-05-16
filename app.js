const url = "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/";
const table = document.getElementById("list");
const modal = document.getElementById("modalFooter");

//View all data
function display(data) {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])

        table.innerHTML +=
            '<tr id="row ' + data[i].id + ' ">' +
            '<th id="td">' + data[i].name + '</th>' +
            '<td>' + data[i].last_name + '</td>' +
            '<td><button type="button" id=" moreInfo' + data[i].id + '" onclick = btnmoreInfo(' + data[i].id + ') name="view" class="viewMore btn btn-info" data-toggle="modal" data-target="#exampleModal">More info</button></td >' +
            '<td><button type="button" id="btnDelete" class="btn btn-danger" onclick = btnDel(' + data[i].id + ',this) >Delete</button></td > ' +
            '</tr>';
    };
}

// Modal content

function modalContent(data) {

    
    document.getElementById("editName").value =  data.name;
    document.getElementById("editLastName").value = data.last_name;
    document.getElementById("editJobTitle").value = data.job_title;
    document.getElementById("editEmail").value = data.email;

    modal.innerHTML = '<button type="button" class="btn btn-primary" onclick="btnEdit(' + data.id + ')">Save</button>'
                  


};





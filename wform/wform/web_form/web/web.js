// Add Here Any fields Label names which you want to keep tracking it.
const watchFields = ['Supplier', 'Contact', 'Description']
const targetElement = []


function set_props() {
    let status = document.querySelector(`[data-label="Status"`);

    // get the required fields and set them to targetElement array
    for (let i =0; i< watchFields.length;i++) {
        targetElement.push(document.querySelector(`[data-fieldtype][data-label="${watchFields[i]}"]`))
    }

    //set all the watchFields to be mandatory fields
    for(let elem in targetElement) {
        targetElement[elem].setAttribute("data-reqd", "1");
        targetElement[elem].parentElement.classList.add("has-error")
    }

    // if status is completed then make all fields read only.
    if(status.value == "Completed") {
        // if the web form status completed make all fields read only
        for(let elem in targetElement){
			targetElement[elem].setAttribute("disabled", true)
        }
    }

}
function docSaveHandler(e) {
    let status = document.querySelector(`[data-label="Status"`);
    let supplier = document.querySelector('[data-fieldtype][data-label="Supplier"]');
    let contact = document.querySelector('[data-fieldtype][data-label="Contact"]');
    let description = document.querySelector('[data-fieldtype][data-label="Description"]');

    
    // if save button clicked and mandatory field empty dont save
    if(status.value =="Completed") {
        if(!supplier.value || !contact.value || !description.value) {
            e.preventDefault()
            return false
        } else {
            document.location.reload()
        }
    } else {
        document.location.reload()       
    }
}
frappe.ready(function() {
    // bind events here

    //set the fields propertys on webform ready
    set_props()

    // hook the upper save button
    document.getElementsByClassName("btn-primary")[0].addEventListener("click", function(event) {
        docSaveHandler(event)
    });
    // hook the buttom save button
    document.getElementsByClassName("btn-primary")[1].addEventListener("click", function(event) {
        docSaveHandler(event)
    });
})



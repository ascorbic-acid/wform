// add fields Label names which you want to set Read Only Depending on the status Field.
const watchFields = ['Supplier', 'Contact', 'Description']


function set_props() {
    let status = document.querySelector(`[data-label="Status"`).value


    if(status == "Completed") {
        // if the web form status completed make all fields read only
        for(var i =0; i < watchFields.length;i++){
			document.querySelector(`[data-fieldtype][data-label="${watchFields[i]}"]`).setAttribute("disabled", "")
        }
    }

}
frappe.ready(function() {
    // bind events here
    set_props()
    document.querySelector('[type="Submit"]').addEventListener("click", function(e) {
        let status = document.querySelector(`[data-label="Status"`).value

        if(status=="Completed") {
    		document.location.reload()       
        } else {
            document.location.reload()       
        }
    })
})



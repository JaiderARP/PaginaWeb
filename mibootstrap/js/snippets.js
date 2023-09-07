const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'danger')
  })
};


let arr = document.getElementById("exampleInputEmail1");
const alertTrigger2 = document.getElementById("Alert");

if(alertTrigger2){
    alertTrigger2.addEventListener('click',()=> {
        if (arr.value == "") {
            appendAlert("La informacion no puede ir vacia", 'danger')
        } else {
            appendAlert('Informacion almacenada con exito', 'success')
        }
    })
};

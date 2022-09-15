import Swal from "sweetalert2";

function showProcessErrorMessage(swalObject){
    let swalInstance = Swal.fire({
        title: swalObject.title,
        text: swalObject.text,
        icon: "error",
        confirmButtonText: swalObject.confirmButtonText ? swalObject.confirmButtonText : "Tamam"  
      });
      return swalInstance;
}

function showProcessSuccessMessage(swalObject){
  let swalInstance = Swal.fire({
      title: swalObject.title,
      text: swalObject.text,
      icon: "success",
      confirmButtonText: swalObject.confirmButtonText ? swalObject.confirmButtonText : "Tamam"  
    });
    return swalInstance;
}

function showProcessPromptMessage(swalObject){
  let swalInstance = Swal.fire({
      title: swalObject.title,
      text: swalObject.text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: swalObject.confirmButtonText ? swalObject.confirmButtonText : "Evet",
      cancelButtonText: swalObject.cancelButtonText ? swalObject.cancelButtonText : "Hayır"  
    });
    return swalInstance;
}

function showResultPopup(result,title = 'İşlem Başarılı',message = ""){
  if(result.data.status)
  {
    showProcessSuccessMessage({
      title: title,
      text: result.data.message ? result.data.message : message
    })
  }
  else if(result.data.status){
    showProcessErrorMessage({
      title: title,
      text: result.data.message ? result.data.message : message
    })
  }
}

export { showProcessErrorMessage, showProcessSuccessMessage, showProcessPromptMessage, showResultPopup };
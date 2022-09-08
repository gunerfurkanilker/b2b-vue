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

export { showProcessErrorMessage, showProcessSuccessMessage, showProcessPromptMessage };
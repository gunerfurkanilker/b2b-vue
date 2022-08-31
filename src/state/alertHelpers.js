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

export { showProcessErrorMessage };
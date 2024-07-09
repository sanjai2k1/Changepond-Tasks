
function checkAll(){
  let ufname = document.myform.fname.value
  let ulname = document.myform.lname.value
  let password = document.myform.password.value
  let email = document.myform.email.value
  let contact = document.myform.contact.value
  let ugen = document.myform.ugender
  let fname_regex = "^[a-zA-Z]{3,15}$"
  let lname_regex = "^[a-zA-Z]{1,15}$"
  let uedu = document.myform.uedu

  let password_regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let contact_regex = "^[0-9]{10}$"
  if(ufname.trim()===""){
    window.alert("fname field is required")
    return false;
  }
  if(!ufname.trim().match(fname_regex)){
    window.alert("enter range 3-15")
    return false;
  }
  if(ulname.trim()===""){
    window.alert("lname field is required")
    return false;
  }
  if(!ulname.trim().match(lname_regex)){
    window.alert("enter range 1-15")
    return false;
  }
  if(password.trim()===""){
    window.alert("password field is required")
    return false;
  }
  if(!password.trim().match(password_regex)){
    window.alert("password is incorrect")
    return false;
  }
  if(email.trim()===""){
    window.alert("email field is required")
    return false;
  }
  if(!email.trim().match(email_regex)){
    window.alert("email is incorrect")
    return false;
  }
  if(contact.trim()===""){
    window.alert("contact field is required")
    return false;
  }
  if(!contact.trim().match(contact_regex)){
    window.alert("contact is incorrect")
    return false;
  }
  if(ugen[0].checked==false && ugen[1].checked==false ){
    window.alert("select your gender")
    return false;
  }
  if(uedu[0].checked==false &&uedu[1].checked==false &&uedu[2].checked==false &&uedu[3].checked==false &&uedu[4].checked==false ){
    window.alert("select your qualification")
    return false;
  }
 
}
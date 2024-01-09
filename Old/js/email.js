$('#form').on('submit', function(e) {
   e.preventDefault();

   let submit = document.getElementById('mailSubmit');
   submit.innerText = 'Sending...';

   const params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value
   }

   emailjs.send("service_2g7tag9", "template_01rdd4v", params).then((res)=>{
      submit.innerText = 'Send message';
      alert('Message send Successfully !!!');
   });

   document.getElementById("name").value = '';
   document.getElementById("email").value = '';
   document.getElementById("message").value = '';   
 });
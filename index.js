// template_ppaa1s4
// service_rkg2ygf
// 1FU5tHEcTVB94ox2n

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
   emailjs 
   .sendForm (
      'service_rkg2ygf',
       'template_ppaa1s4',
       event.target,
        '1FU5tHEcTVB94ox2n'
    ).then (() => {
         loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible" ;
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at email@email.com"
        );
    })
}
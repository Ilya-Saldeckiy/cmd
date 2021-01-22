window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ui-accordion-icons').forEach(function(el){
            el.addEventListener('click' , function(event){
                event.target.classList.toggle('ui-accordion-icons-active')
            })
        })
})
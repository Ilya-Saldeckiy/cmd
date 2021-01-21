window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn').addEventListener('click', function () {
        document.querySelector('.premium-btn-position').classList.toggle('disable-btn') && document.querySelector('.premium-btn-position').classList.remove('active-prem')
    })
    document.querySelector('.premium-btn').addEventListener('click', function () {
        document.querySelector('.decoration-card').classList.toggle('activ-btn') && document.querySelector('.decoration-card').classList.remove('disable-card')
    })
    document.querySelector('#continue').addEventListener('click', function () {
        document.querySelector('.second-step-premium').classList.toggle('activ-btn') && document.querySelector('.second-step-premium').classList.remove('disable-card')
    })

    document.querySelector('#continue').addEventListener('click', function () {
        document.querySelector('.first-step-premium').classList.toggle('disable-card') && document.querySelector('.first-step-premium').classList.remove('active-prem')
    })

    document.querySelector('#btnBack').addEventListener('click', function () {
        document.querySelector('.second-step-premium').classList.toggle('disable-card') && document.querySelector('.second-step-premium').classList.remove('activ-btn')
    })

    document.querySelector('#btnBack').addEventListener('click', function () {
        document.querySelector('.first-step-premium').classList.toggle('active-prem') && document.querySelector('.first-step-premium').classList.remove('disable-card')
    })

    document.querySelector('#addBtn').addEventListener('click', function () {
        document.querySelector('.add-person-block').classList.toggle('activ-btn') && document.querySelector('.add-person-block').classList.remove('disable-card')
    })

    document.querySelector('#addBtn').addEventListener('click', function () {
        document.querySelector('#addBtn').classList.toggle('disable-btn') && document.querySelector('#addBtn').classList.remove('disable-card')
    })

    document.querySelector('#btnContinui').addEventListener('click', function () {
        document.querySelector('.three-step').classList.toggle('activ-btn') && document.querySelector('.three-step').classList.remove('disable-card')
    })

    document.querySelector('#btnContinui').addEventListener('click', function () {
        document.querySelector('.second-step-premium').classList.toggle('disable-card') && document.querySelector('.second-step-premium').classList.remove('active-prem')
    })

    document.querySelector('#firstPerson').addEventListener('click', function () {
        document.querySelector('.person-form-1').classList.toggle('disable-btn') && document.querySelector('.person-form-1').classList.remove('activ-btn')
    })

    document.querySelector('#secondPerson').addEventListener('click', function () {
        document.querySelector('.person-form-2').classList.toggle('disable-btn') && document.querySelector('.person-form-2').classList.remove('activ-btn')
    })

    document.querySelector('#threePerson').addEventListener('click', function () {
        document.querySelector('.person-form-3').classList.toggle('disable-btn') && document.querySelector('.person-form-3').classList.remove('activ-btn')
    })

    
})
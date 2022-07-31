//DOM ELEMENTS
const app = document.querySelector('#app');

//LISTENERS
window.addEventListener('load', initialPage)

//FUNCTIONS
//initial page construction
function initialPage() {
    //create page
    app.innerHTML = (`
        <div id="initialPage">
            <h1>Consulta de CEP</h1>
            <p>Preencha o campo abaixo para consultar os dados do CEP solicitado</p>
            <input placeholder="exemplo: 99999-999" type="text" name="cep" id="cep">
            <p id="message">CEP inválido!</p>
            <button id="submit">Consultar</button>
        </div>
    `)

    //DOM elements added
    const button = document.querySelector('#submit');
    const input = document.querySelector('#cep');
    let value = '';
    const alertMessage = document.querySelector('#message');

    //initial condition
    alertMessage.style.color = 'transparent'

    //listeners added
    button.addEventListener('click', ()=>{
        queryCEP(input.value, alertMessage)
    })

    input.addEventListener('keydown', (event)=>{
        const length = input.value.length;
        if(event.keyCode != 8){
            if(length === 5){
                input.value += '-';
            } 
        } 
        
    })

    input.addEventListener('keyup', (event)=>{
        if ((event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode === 8) && (value.length < 9)) {
            value  = input.value;
            alertMessage.style.color = 'transparent'
        } else {
            input.value = value;
            alertMessage.innerHTML = 'Certifique-se de preencher o campo acima com apenas 8 caracteres numéricos!'
            alertMessage.style.color = 'red'
        }
    })
    
}

//API CEP query
function queryCEP(data, message) {
    let cep = String(data).replace('-','');
    console.log(cep)
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    .then((resp) => {
        if(resp.status === 400){
            throw new Error('CEP Inválido')
        } else if(resp.status === 404){
            throw new Error('CEP não encontrado')
        } else {
            return resp.json()
        }
    })
    .then((resp)=>{

        document.querySelector('body').style.cursor = "wait"

        app.innerHTML = (`
            <div id="addressPage">
                <h1>Consulta de CEP</h1>
                <div class="column">
                    <span class="label">Endereço: </span>
                    <span>${resp.address}</span>
                </div>
                <div class="line">
                    <div class="column">
                        <span class="label">Bairro: </span>
                        <span>${resp.district}</span>
                    </div>
                    <div class="column">
                        <span class="label">Cidade: </span>
                        <span>${resp.city}</span>
                    </div>
                    <div class="column">
                        <span class="label">Estado: </span>
                        <span>${resp.state}</span>
                    </div>
                </div>
                <div class="line">
                    <div class="column">
                        <span class="label">Latitude: </span>
                        <span>${resp.lat}</span>
                    </div>
                    <div class="column">
                        <span class="label">Longitude: </span>
                        <span>${resp.lng}</span>
                    </div>
                </div>
                <div id="buttons">
                    <button id="back">Voltar</button>
                    <button id="map">Exibir Mapa</button>
                </div>  
            </div>
        `)

        //DOM elements added
        const backBtn = document.querySelector('#back');
        const mapBtn = document.querySelector('#map');

        //listeners added
        backBtn.addEventListener('click', initialPage)
        mapBtn.addEventListener('click', ()=>{
            map(resp.lat,resp.lng,data,message)
        })

        document.querySelector('body').style.cursor = ('default')

    })
    .catch((err) => {
        message.style.color = 'red';
        message.innerHTML = `${err}`
    })
}

function map(lat,lng,data,message){

    document.querySelector('body').style.cursor = "wait"

    app.innerHTML = (`
        <div id="mapIframe">
            <h1>Consulta de CEP</h1>
            <iframe src = "https://maps.google.com/maps?q=${lat},${lng}&hl=es;z=14&amp;output=embed"></iframe>
            <button id="back">Voltar</button>
        </div>
    `)

    //DOM elements added
    const backBtn = document.querySelector('#back');

    //listeners added
    backBtn.addEventListener('click', ()=>{
        queryCEP(data,message)
    })

    document.querySelector('body').style.cursor = ('default')
}

async function enviarFormulario() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaDeNacimiento = document.getElementById('fechaDeNacimiendo').value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        feachaDeNacimiento: fechaDeNacimiento
    };

    const response = await fetch(url,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    console.log(await response.json());
}

const button = document.getElementById("submit");
button.addEventListener("click", (event)=>{
    event.preventDefault();
    enviarFormulario();
})
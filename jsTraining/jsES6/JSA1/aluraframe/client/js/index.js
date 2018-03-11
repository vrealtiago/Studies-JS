var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

document.querySelector('.form').addEventListener('submit', function(event) {
    var tbody = document.querySelector("tbody");
    event.preventDefault();
    var tr = document.createElement('tr');
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })
    var tdvol = document.createElement('td');
    tdvol.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdvol);
    tbody.appendChild(tr);
    document.querySelector("#data").value = '';
    document.querySelector("#quantidade").value = 1;
    document.querySelector("#valor").value = 0;
    document.querySelector("#data").focus();
})
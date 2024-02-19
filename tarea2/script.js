document.addEventListener("DOMContentLoaded", function() { 
    // Ocultar contenedores al inicio
    document.getElementById("archivos-container").style.display = "none";
    document.getElementById("detalles-container").style.display = "none";
    document.getElementById("acordeon-container").style.display = "none";

    // Lógica para los botones de archivos
    var botonesArchivos = document.querySelectorAll(".archivos");
    botonesArchivos.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Oculta el contenedor de detalles y el acordeón
            document.getElementById("detalles-container").style.display = "none";
            document.getElementById("acordeon-container").style.display = "none";

            // Lógica específica de los archivos aquí
            var version = this.parentElement.parentElement.getAttribute('data-version');
            var archivosTitulo = document.getElementById("archivos-titulo");
            var archivosLista = document.getElementById("archivos-lista");

            archivosTitulo.textContent = "Archivos de la Versión: " + version;
            var archivos = obtenerArchivos(version);
            archivosLista.innerHTML = "";

            archivos.forEach(function(archivo) {
                var li = document.createElement("li");
                li.textContent = archivo;
                li.classList.add("list-group-item");
                archivosLista.appendChild(li);
            });

            // Muestra el contenedor de archivos
            document.getElementById("archivos-container").style.display = "block";
        });
    });

    // Lógica para los botones de detalles
    var botonesDetalles = document.querySelectorAll(".detalles");
    botonesDetalles.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Oculta el contenedor de archivos y el acordeón
            document.getElementById("archivos-container").style.display = "none";
            document.getElementById("acordeon-container").style.display = "none";

            // Lógica específica de los detalles aquí
            var version = this.parentElement.parentElement.getAttribute('data-version');

            var detallesTitulo = document.getElementById("detalles-titulo");
            var detallesParrafo = document.getElementById("detalles-parrafo");

            detallesTitulo.textContent = "Detalles de la Versión: " + version;
            detallesParrafo.textContent = "Nuevos detalles para la versión " + version;

            // Muestra el contenedor de detalles
            document.getElementById("detalles-container").style.display = "block";
        });
    });

    // Definir el contenido del acordeón para cada versión
    var informacionVersion1 = "Información de la versión 1";
    var informacionVersion2 = "Información de la versión 2";
    var informacionVersion3 = "Información de la versión 3";
    var informacionVersion4 = "Información de la versión 4";

    // Lógica para los botones de configuración
    var botonesConfiguracion = document.querySelectorAll(".config");
    botonesConfiguracion.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Oculta el contenedor de archivos y el de detalles
            document.getElementById("archivos-container").style.display = "none";
            document.getElementById("detalles-container").style.display = "none";

            // Obtener la versión correspondiente al botón clicado
            var version = this.parentElement.parentElement.getAttribute('data-version');
            var acordeonContainer = document.getElementById("acordeon-container");
            var informacionVersion = obtenerInformacionVersion(version);

            acordeonContainer.innerHTML = `
                <div class="accordion" id="acordeon-${version}">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading-${version}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${version}" aria-expanded="true" aria-controls="collapse-${version}">
                        ${informacionVersion}
                    </button>
                    </h2>
                    <div id="collapse-${version}" class="accordion-collapse collapse show" aria-labelledby="heading-${version}" data-bs-parent="#acordeon-${version}">
                    <div class="accordion-body">
                        Aquí puedes agregar la información específica de la versión ${version}.
                    </div>
                    </div>
                </div>
                </div>
            `;

            // Muestra el contenedor del acordeón
            acordeonContainer.style.display = "block";
        });
    });

    // Función para obtener la información de la versión según su número
    function obtenerInformacionVersion(version) {
        switch (version) {
            case "1":
                return informacionVersion1;
            case "2":
                return informacionVersion2;
            case "3":
                return informacionVersion3;
            case "4":
                return informacionVersion4;
            default:
                return "No hay información disponible para esta versión.";
        }
    }

    // Función de simulación para obtener archivos correspondientes a una versión
    function obtenerArchivos(version) {
        // Simulación de obtener archivos de una versión
        if (version === "1") {
            return ["archivo1.txt", "archivo2.pdf", "archivo3.jpg"];
        } else if (version === "2") {
            return ["archivo4.txt", "archivo5.pdf"];
        } else if (version === "3") {
            return ["archivo6.txt"];
        } else if (version === "4") {
            return ["archivo7.jpg", "archivo8.pdf"];    
        } else {
            return ["No hay archivos disponibles para esta versión"];
        }
    }
});

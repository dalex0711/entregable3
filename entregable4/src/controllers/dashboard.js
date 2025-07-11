

    const tbody = document.getElementById("tabla-cuerpo");

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(key,value)

        try {
            const data = JSON.parse(value);
            if(Array.isArray(data) && data.length === 2){
                const fila = document.createElement("tr");
                fila.classList.add("hover:bg-gray-50")

                fila.innerHTML = `
                    <td class="px-4 py-2 border">${data[0]}</td>
                    <td class="px-4 py-2 border">${data[1]}</td>
                `;

                tbody.appendChild(fila);
            }
        } catch (error) {
            console.warn(`Clave ${clave} ignorada (no es JSON válido):`, error);
        }
    }


console.log('hola')
// Diccionario con todos los textos que enviaste
const mensajes = {
    "triste": `
        <h2>✉️ Estés triste</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ No te escondas cuando te duela, vení a mí 💞<br>
        ˚₊· ͟͟͞͞➳❥ Está bien no poder con todo 💗<br>
        ◛⑅·˚ ༘ Incluso roto… seguís siendo hogar 🫀<br>
        ☈⇘⇉ Tu tristeza no me aleja, me acerca 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Hay días donde todo pesa distinto,<br>donde el aire cuesta un poco más.<br><br>
        Si hoy estás así… no te exijas luz.<br>Solo quedate, aunque sea en silencio.<br><br>
        ˚₊· ͟͟͞͞➳❥ Porque incluso en tu versión más triste,<br>yo te sigo eligiendo. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Voy a quedarme en tus grietas,<br>no para cerrarlas… sino para que no estés solo.<br><br>
        ☈⇘⇉ Si te rompés,<br>yo aprendo cada parte tuya sin miedo.<br><br>
        Porque amarte también es esto:<br>quedarme cuando más duele. 🫀💌</p>
    `,
    "mal_dia": `
        <h2>✉️ Tengas un mal día</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Hay días que solo se sobreviven 💗<br>
        ˚₊· ͟͟͞͞➳❥ No tenés que ser fuerte hoy 💞<br>
        ◛⑅·˚ ༘ Descansá en mí 🫀<br>
        ☈⇘⇉ Soltá el mundo acá 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Si hoy todo salió mal,<br>no te culpes.<br><br>
        ˚₊· ͟͟͞͞➳❥ No sos menos por cansarte.<br><br>
        Vení… respirá conmigo,<br>aunque sea a distancia. 💗</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Si el día te rompió,<br>yo quiero ser donde caés sin romperte más.<br><br>
        ☈⇘⇉ No arreglo el mundo,<br>pero me quedo con vos dentro de él. 🫀💞</p>
    `,
    "aniversario": `
        <h2>✉️ Sea nuestro aniversario</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Elegirte sigue siendo mi forma favorita 💞<br>
        ˚₊· ͟͟͞͞➳❥ No fue suerte, fue destino 💗<br>
        ◛⑅·˚ ༘ Lo nuestro es profundidad 🫀<br>
        ☈⇘⇉ Te elegiría siempre 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Hubo un momento<br>en el que dejé de imaginar mi vida sin vos.<br><br>
        ˚₊· ͟͟͞͞➳❥ Y desde ahí…<br>todo tuvo sentido. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Nos encontramos en un mundo inmenso<br>y aún así, coincidimos.<br><br>
        ☈⇘⇉ Amarte es quedarme,<br>una y otra vez. 🫀💌</p>
    `,
    "cumple": `
        <h2>✉️ Sea tu cumple</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Existir te queda increíble 💗<br>
        ˚₊· ͟͟͞͞➳❥ El mundo es mejor con vos 💞<br>
        ◛⑅·˚ ༘ Sos impacto 🫀<br>
        ☈⇘⇉ Celebrarte es poco 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Hoy nació alguien que cambió mi mundo.<br><br>
        ˚₊· ͟͟͞͞➳❥ Y desde entonces…<br>todo es distinto. 💗</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Llegaste sin aviso<br>y te volviste esencial.<br><br>
        ☈⇘⇉ Te elegiría en todas las vidas. 🫀💞</p>
    `,
    "noche": `
        <h2>🌙 Cuando la noche pese demasiado</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Si todo se oscurece, pensame 💞<br>
        ˚₊· ͟͟͞͞➳❥ No estás solo 💗<br>
        ◛⑅·˚ ༘ Sigo con vos 🫀<br>
        ☈⇘⇉ No me voy 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Hay noches que pesan.<br><br>
        ˚₊· ͟͟͞͞➳❥ Imaginame ahí…<br>sin irme. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Soy la luz mínima que se queda.<br><br>
        ☈⇘⇉ Incluso en la oscuridad…<br>te sigo eligiendo. 🫀</p>
    `,
    "extranes": `
        <h2>💞 Cuando me extrañes</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Pensame y vuelvo 💗<br>
        ˚₊· ͟͟͞͞➳❥ Estoy cerca 🫀<br>
        ◛⑅·˚ ༘ No me fui 💌<br>
        ☈⇘⇉ Extrañarme también es amor 💞</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Si me extrañás… no lo calles.<br><br>
        ˚₊· ͟͟͞͞➳❥ Cerrá los ojos<br>y buscame ahí. 💗</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Extrañarme es sostenerme distinto.<br><br>
        ☈⇘⇉ Sigo en vos… aunque no me veas. 🫀💌</p>
    `,
    "dormir": `
        <h2>💗 Cuando no puedas dormir</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Pensame bajito 💞<br>
        ˚₊· ͟͟͞͞➳❥ Te abrazo en el insomnio 🫀<br>
        ◛⑅·˚ ༘ Descansá en mí 💌<br>
        ☈⇘⇉ No estás solo 💗</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Si la mente no para…<br><br>
        ˚₊· ͟͟͞͞➳❥ pensame cerca. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Quiero ser ese pensamiento suave.<br><br>
        ☈⇘⇉ El que se queda… hasta que descanses. 🫀</p>
    `,
    "falta_algo": `
        <h2>🫀 Cuando sientas que te falta algo</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ No estás incompleto 💞<br>
        ˚₊· ͟͟͞͞➳❥ Eso también es amor 💗<br>
        ◛⑅·˚ ༘ Estoy ahí 🫀<br>
        ☈⇘⇉ No te falta nada 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Ese vacío… también habla.<br><br>
        ˚₊· ͟͟͞͞➳❥ No lo ignores. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Hay vacíos que se acompañan.<br><br>
        ☈⇘⇉ Y en eso… dejo de doler tanto. 🫀💌</p>
    `,
    "volver": `
        <h2>💌 Cuando necesites volver a mí</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Siempre podés volver 💞<br>
        ˚₊· ͟͟͞͞➳❥ Acá estoy 💗<br>
        ◛⑅·˚ ༘ Tenés lugar 🫀<br>
        ☈⇘⇉ Sin condiciones 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ No importa el tiempo.<br><br>
        ˚₊· ͟͟͞͞➳❥ Podés volver. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Volver a mí es reencontrarte.<br><br>
        ☈⇘⇉ Yo sigo siendo refugio. 🫀💌</p>
    `,
    "cancion": `
        <h2>🎶 Cuando una canción te rompa</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ No llores solo 💞<br>
        ˚₊· ͟͟͞͞➳❥ Eso que duele es real 💗<br>
        ◛⑅·˚ ༘ Pensame 🫀<br>
        ☈⇘⇉ Estoy con vos 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Si una canción te abre…<br><br>
        ˚₊· ͟͟͞͞➳❥ dejá que pase. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Que la música te atraviese…<br><br>
        ☈⇘⇉ yo me quedo en el eco. 🫀🎶</p>
    `,
    "carta": `
        <h2>📩 Cuando quieras leerme como carta</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ Estoy escrita para vos 💞<br>
        ˚₊· ͟͟͞͞➳❥ Leeme despacio 💗<br>
        ◛⑅·˚ ༘ Soy esto 🫀<br>
        ☈⇘⇉ Quedándome 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Si abrís esto…<br><br>
        ˚₊· ͟͟͞͞➳❥ es porque me necesitabas. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Soy letras intentando alcanzarte.<br><br>
        ☈⇘⇉ Y si me leés… ya estoy con vos. 🫀💌</p>
    `,
    "mente": `
        <h2>💭 Cuando tu mente no pare</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ No todo es verdad 💞<br>
        ˚₊· ͟͟͞͞➳❥ Respirá 💗<br>
        ◛⑅·˚ ༘ Bajá el ruido 🫀<br>
        ☈⇘⇉ Vení 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Frená un segundo.<br><br>
        ˚₊· ͟͟͞͞➳❥ No sigas todo lo que pensás. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Soy el silencio entre tus pensamientos.<br><br>
        ☈⇘⇉ Descansá un poco… en mí. 🫀💭</p>
    `,
    "pecho": `
        <h2>🩹 Cuando te duela el pecho</h2>
        <h4>• Frases</h4>
        <p>ˏˋ°•*⁀➷ No cargues solo 💞<br>
        ˚₊· ͟͟͞͞➳❥ Apoyate en mí 💗<br>
        ◛⑅·˚ ༘ Estoy acá 🫀<br>
        ☈⇘⇉ No te cierres 💌</p>
        <h4>• Fragmento</h4>
        <p>ˏˋ°•*⁀➷ Ese dolor…<br><br>
        ˚₊· ͟͟͞͞➳❥ no lo guardes solo. 💞</p>
        <h4>• Prosa poética</h4>
        <p>◛⑅·˚ ༘ Abrí lo que duele.<br><br>
        ☈⇘⇉ Yo me quedo ahí… con vos. 🫀💌</p>
    `
};

// Variables del DOM
const sobres = document.querySelectorAll('.sobre');
const modal = document.getElementById('modal-mensaje');
const textoMensaje = document.getElementById('texto-mensaje');
const btnCerrar = document.querySelector('.cerrar');

// Evento para abrir el modal con el texto correcto
sobres.forEach(sobre => {
    sobre.addEventListener('click', () => {
        const id = sobre.getAttribute('data-id');
        
        if (mensajes[id]) {
            textoMensaje.innerHTML = mensajes[id];
        } else {
            textoMensaje.innerHTML = "<p>Mensaje no disponible aún.</p>";
        }
        
        modal.style.display = "block";
    });
});

// Evento para cerrar el modal desde la 'X'
btnCerrar.addEventListener('click', () => {
    modal.style.display = "none";
});

// Evento para cerrar el modal si haces clic fuera de la cajita blanca
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

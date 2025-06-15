import './campaigns.css'
export default function AsisaMascotas() {
    return (
        <div className='wrap'>
            <div>
                <picture >
                    <source
                        media="(min-width: 768px)"
                        srcSet="/campaigns/mascotas.webp"
                    />
                    <img
                        src="/campaigns/mascotas.jpg"
                        style={{display: 'block',marginInlineStart: 'auto',maxHeight: 600, objectFit: "cover", width: '100%'}}
                    />
                </picture>
            </div>
            <h1>Tú decides todo, asegúrale el mejor cuidado
            </h1>
            <p>
                Desde siempre nuestra vocación ha sido y es cuidar de lo más valioso
                e importante para ti: tu salud y la de los que más te importan. </p>
            <p>
                Y es que, los más de 50 años que llevamos cuidando de su salud nos han
                permitido ofrecerte un servicio y una cobertura más completa e integral,
                convirtiéndonos en una aseguradora dispuesta a protegerte a ti y a lo que
                más quieres.
            </p>
            <p>
                Por eso, con nuestro seguro ASISA Mascotas, podrás contar con la seguridad
                de tener acceso a la mejor asistencia veterinaria y ofrecer el mejor cuidado y
                bienestar a tus amigos más fieles.
            </p>
            <p>
                <strong>Y para un mayor cuidado...</strong>
            </p>
            <p>
                Asistencia veterinaria. Accede a todos los servicios veterinarios en cualquier clínica de nuestro cuadro: tratamientos preventivos, pruebas diagnósticas, cirugías, servicios terapéuticos, etc.
                </p>
            <p>
                Y todo con descuentos medios de más del 40% frente a las tarifas de particulares.
                </p>
            <p>
                Además, con el seguro de mascotas de ASISA tendrás incluidas de forma totalmente gratuita:
                </p>
            <ul>

                <li>    Consultas, revisiones y consultas por urgencia vital </li>
                <li>    Vacunaciones caninas: Rabia, Tetravalente (moquillo, hepatitis, leptospirosis y parvovirosis) Trivalente (moquillo, hepatitis y leptospirosis) </li>
                <li>    Vacunaciones felinas: Trivalente (rinotraqueitis, panleucopenia y calicivirosis) Leucemia Rabia   </li>
                <li>    Tetravalente (rinotraqueitis, panleucopenia, calicivirosis y clamidiasis)</li>
            </ul>
            <p>Porque en ASISA, queremos que te sientas cuidado en todo momento.</p>

            <p>Para más información sobre las coberturas, contacta con tu mediador.</p>
            <i>
                <small>Consulta condiciones</small>
            </i>
        </div>
    );
}

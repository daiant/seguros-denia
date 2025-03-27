import './campaigns.css'
export default function AsisaMascotas() {
    return (
        <div className='wrap'>
            <div style={{display: 'flex', width: '100%', background: 'var(--primary-gradient)', gap: 48 }}>
                <p style={{ flex: '1 1 50%', justifyContent: "space-between", color: 'white', marginInlineStart: 32, fontSize: 24, alignSelf: 'center'}}>
                    El seguro que se preocupa por ellos tanto como tú </p>
                <picture style={{marginInlineStart: "auto", flex: '1 1 50%', display: 'contents'}}>
                    <source
                        media="(min-width: 768px)"
                        srcSet="/campaigns/cabecerca-banner-web-mascotas.webp"
                    />
                    <img
                        src="/campaigns/cabecerca-banner-web-mascotas.webp"
                        style={{display: 'block',marginInlineStart: 'auto',maxHeight: 600, objectFit: "cover", width: '50%'}}
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
            <p>Tu seguro ASISA Mascotas incluye videoconsulta veterinaria sin límite de
                 sesiones. Y, además, chat veterinario para consultas y bienestar de tu mascota.
            </p>
            <p>Porque en ASISA, queremos que te sientas cuidado en todo momento.</p>

            <p>Para más información sobre las coberturas contacta con tu mediador.</p>
            <i>
                <small>Consulta condiciones</small>
            </i>
        </div>
    );
}

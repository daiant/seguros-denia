import './campaigns.css'
export default function AsisaTravel() {
    return (
        <div className='wrap'>
            <div style={{display: 'flex', width: '100%', background: 'var(--primary-gradient)', gap: 48 }}>
                <p style={{ flex: '1 1 50%', justifyContent: "space-between", color: 'white', marginInlineStart: 32, fontSize: 24, alignSelf: 'center'}}>
                    Protege tu viaje con ASISA Viajes
                </p>
                <picture style={{marginInlineStart: "auto", flex: '1 1 50%', display: 'contents'}}>
                    <source
                        media="(min-width: 768px)"
                        srcSet="/campaigns/asisa-travel.jpg"
                    />
                    <img
                        src="/campaigns/asisa-travel.jpg"
                        style={{display: 'block',marginInlineStart: 'auto',maxHeight: 600, objectFit: "cover", width: '50%'}}
                    />
                </picture>
            </div>
            <h1>Prepárate para tu viaje de Semana Santa: relájate y disfruta sin preocupaciones.
            </h1>
            <p>
                En ASISA Viajes, queremos asegurarnos de que estés protegido en cada momento, sin importar a dónde vayas. </p>
            <p>
                Nuestros seguros de viaje están diseñados para adaptarse a tus planes y brindarte tranquilidad:
            </p>
            <p>
                <strong>ASISA Travel And You</strong>
            </p>
            <p>Protección completa ante cualquier incidente durante tu estancia.
            </p>
            <p><b>ASISA Travel And You Basic</b></p>
            <p>La cobertura esencial para disfrutar de tu viaje sin contratiempos.</p>
            <p><b>ASISA Travel And You Cruise</b></p>
            <p>Seguridad total para que navegues tranquilo en tu crucero. </p>
            <p>Para más información sobre las coberturas contacta con tu mediador.</p>
            <i>
                <small>Consulta condiciones</small>
            </i>
        </div>
    );
}

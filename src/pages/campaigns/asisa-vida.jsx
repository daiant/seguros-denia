import './campaigns.css'
export default function AsisaVida() {
    return (
        <div className='wrap'>
            <div style={{display: 'flex', width: '100%', background: 'var(--primary-gradient)', gap: 48 }}>
                <p style={{ flex: '1 1 50%', justifyContent: "space-between", color: 'white', marginInlineStart: 32, fontSize: 24, alignSelf: 'center'}}>Un “para siempre”
                    es mucho tiempo, y justo
                    eso dura este descuento</p>
                <picture style={{marginInlineStart: "auto", flex: '1 1 50%', display: 'contents'}}>
                    <source
                        media="(min-width: 768px)"
                        srcSet="/campaigns/cabecera-home-promo-vida-compromiso-asegurados-v2.webp"
                    />
                    <img
                        src="/campaigns/cabecera-home-promo-vida-compromiso-asegurados-v2.webp"
                        style={{display: 'block',marginInlineStart: 'auto',maxHeight: 600, objectFit: "cover", width: '50%'}}
                    />
                </picture>
            </div>
            <h1>15% DTO. para siempre si tienes cualquier producto de asisa salud</h1>
            <p>
                Como ya formamos parte de tu vida, queremos darte lo mejor para protegerla. Por eso, si tienes
                contratado cualquier
                producto de ASISA Salud, puedes disfrutar de un 15% de descuento en los seguros de ASISA Vida
                Tranquilidad y
                ASISA Vida Tranquilidad Protección hipoteca para siempre.            </p>
            <p>
                Tienes toda la vida para darte cuenta de lo buena oferta que es, ¡pero mejor aprovecharla ya!
            </p>
            <p>Para más información sobre las coberturas contacta con tu mediador.</p>
            <i>
                <small>Consulta condiciones</small>
            </i>
        </div>
    );
}

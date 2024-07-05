import github from "../assets/github.png"

export default function CardProjects({ index, name, description, tags, image, source_code_link }) {

    return (
        <>
            <div style={{ position: 'relative', width: '100%', height: '230px' }} onClick={() => window.open(source_code_link, "_blank")}>
                <img
                    src={image}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                />

                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '0.75rem',
                    cursor: 'pointer'
                }}>
                </div>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
                <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>{name}</h3>
                <p style={{ marginTop: '0.5rem', color: '#b2b2b2', fontSize: '14px' }}>{description}</p>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {tags.map((tag) => (
                    <p key={tag.name} style={{ fontSize: '14px', color: tag.color }}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </>
    )
}
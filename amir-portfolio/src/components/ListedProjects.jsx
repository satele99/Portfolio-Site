

export default function Listedprojects(props) {
    return (
        <div style={{borderRadius: '2em', background: '#fff', maxWidth: '250px', maxHeight: '250px'}}>
            <div style={{fontWeight: 'bolder'}}>
                {props.index}
            </div>
            <div>
                <div style={{fontWeight: 'bolder'}}>{props.name}</div>
                <p>{props.content}</p>
            </div>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
                <button class="btn btn-dark"><a style={{textDecoration: 'none', color: '#fff'}} target="_blank" href={props.live}>Live Link</a></button>
                <button class="btn btn-dark"><a style={{textDecoration: 'none', color: '#fff'}} target="_blank" href={props.link}>My GitHub</a></button>
            </div>
        </div>
    )
}
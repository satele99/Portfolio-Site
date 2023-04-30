import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function Listedprojects(props) {
    return (
        <div style={{borderRadius: '2em', background: '#fff', width: '250px', height: '250px'}}>
            <div style={{fontWeight: 'bolder'}}>
                {props.index}
            </div>
            <div>
                <div style={{fontWeight: 'bolder'}}>{props.name}</div>
                <p>{props.content}</p>
            </div>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
                <button class="btn btn-dark"> Live Link</button>
                <button class="btn btn-dark">GitHub</button>
            </div>
        </div>
    )
}
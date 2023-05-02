import Navbar from "../components/Navbar"

export default function Contacts() {
    return (
        <div className="App">
            <Navbar/>
            <div style={{width: '50%', margin: 'auto', color: '#fff', fontWeight: 'bolder'}}>
                Full Name: <input type="text" value={'Amir Ali'} class="form-control"/>
                Email: <input type="text" value={'satele.works@gmail.com'} class="form-control"/>
                Github: <input type="text" value={'https://github.com/satele99'} class="form-control"/>
                Job Search Locations: <input type="text" value={'Atlanta, GA -- East Coast United States'} class="form-control"/>
                <button type="button" class='action-btn'><a style={{textDecoration: 'none', color: '#fff'}} target="_blank" href="https://github.com/satele99">Go to My GitHub</a></button>
            </div>
        </div>
    )
}
import selfie from '../images/amir_selfie.jpg'
export default function AboutMe() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '100%'}}>
            <div className="about_me" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '2rem', fontWeight: 'bolder', marginTop: '-4rem'}}>
                    <h2>Hello,</h2>
                    <h2>My name is Amir.</h2>
                    <h2>Software Development</h2>
                </div>
                <p style={{fontWeight: 'bolder', textAlign: 'left', marginLeft: '2rem'}}>
                    As a highly motivated and detail-oriented software developer,
                    I am passionate about developing innovative solutions to complex problems.
                    I am dedicated to continuously learning and expanding my skill set.
                    I have experience working on projects both individually and in a team setting,
                    and am excited to bring my enthusiasm and strong work ethic to a new employer as a software developer.
                </p>
            </div>
        </div>
    )
}
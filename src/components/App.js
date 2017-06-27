import { h } from 'preact'
import User from './User'

const Users = [
    {name: 'Kamil Ronewicz', image: 'https://photos-6.dropbox.com/t/2/AAA8-vGyUOohs6IFZaj8hswX5h2_8ecx2RI32kbq6P83aQ/12/8347799/png/32x32/1/_/1/2/Heroized%20Kamil%202.png/EOmXmwYYq-ECIAcoBw/XUASvWanxV3rBpqVz5Vm4_eHe-7E5vXpFC-cGZCcyMo?size=2048x1536&size_mode=5'},
    {name: 'Kamil Ronewicz (1)', image: 'https://photos-6.dropbox.com/t/2/AAA8-vGyUOohs6IFZaj8hswX5h2_8ecx2RI32kbq6P83aQ/12/8347799/png/32x32/1/_/1/2/Heroized%20Kamil%202.png/EOmXmwYYq-ECIAcoBw/XUASvWanxV3rBpqVz5Vm4_eHe-7E5vXpFC-cGZCcyMo?size=2048x1536&size_mode=5'},
    {name: 'Kamil Ronewicz (2)', image: 'https://photos-6.dropbox.com/t/2/AAA8-vGyUOohs6IFZaj8hswX5h2_8ecx2RI32kbq6P83aQ/12/8347799/png/32x32/1/_/1/2/Heroized%20Kamil%202.png/EOmXmwYYq-ECIAcoBw/XUASvWanxV3rBpqVz5Vm4_eHe-7E5vXpFC-cGZCcyMo?size=2048x1536&size_mode=5'}
]

export function App(){
    return (
        <div class='app'>
            {Users.map(user => <User {...user} key={user.name} />)}
        </div>
    )
}

export default App

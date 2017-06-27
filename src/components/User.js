import { h } from 'preact'

export function User(props) {
    return <div class="user">
            <figure class="user__image">
                <img src={props.image} width="80" height="80" />
            </figure>
            <p class="usern__name">{props.name}</p>
        </div>
}

export default User

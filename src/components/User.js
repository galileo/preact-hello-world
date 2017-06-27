import { h } from 'preact'

export function User({name, image}) {
    return <div class="user">
            <figure class="user__image">
                <img src={image} width="80" height="80" />
            </figure>
            <p class="usern__name">{name}</p>
        </div>
}

export default User

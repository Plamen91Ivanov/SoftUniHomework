const APIURL = 'https://api.github.com/users';

async function getUser(user) {
    const resp = await fetch(APIURS + user);
    const respData = await resp.json();

    createUserCard();
}  
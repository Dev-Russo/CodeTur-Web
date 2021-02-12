const logar = dados => {
    return fetch('http://localhost:52818/v1/account/signin',{
        method : 'Post',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })
}

export default {
    logar
}
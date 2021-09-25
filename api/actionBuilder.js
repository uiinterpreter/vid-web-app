export function newBaseAction(){
    let action = Object()
    action.action = 'undefined';
    action.apiPath = 'undefined';
    action.version = 1.0;
    console.log("newBaseAction");
    return action;
}

export function newWebsocketConnection(ip, port, options={}) {
    let action = newBaseAction();
    action.action = 'connectWebSocket';
    action.apiPath = 'wsConnect';
    action.IP = ip;
    action.Port = port;
    return {...action, options};
}
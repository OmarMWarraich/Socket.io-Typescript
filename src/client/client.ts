class Client {
    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io();

        this.socket.on('connect', function () {
            console.log('Connected to server');
            document.body.innerHTML = ''
        });

        this.socket.on('disconnect', function (message: any) {
            console.log('Disconnected from server' + message);
            document.body.innerHTML += 
                'Disconnected from server' + message + '<br>';
        });

        this.socket.on('message', function (message: any) {
            console.log(message);
            document.body.innerHTML += message + '<br>';
        });

        this.socket.on('random', function (message: any) {
            console.log(message);
            document.body.innerHTML += 'Winning number is ' + message + '<br/>'
        });
    }
}

const client = new Client();
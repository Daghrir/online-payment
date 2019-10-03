
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        sgap.setKey('pk_test_51WRrgoRby5V2qmDcWM0mgfX00CuZUiI1e');
        sgap.isReadyToPay();
        $("#buyButton").on("click",function(event){
            sgap.requestPayment(10.78, 'EUR');


        });


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();

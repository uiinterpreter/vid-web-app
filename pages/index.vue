<template>
  <v-card>
    <v-card-title primary-title class="justify-center">Web socket Actions</v-card-title>
    <v-card-text>
      <v-row class="pb-6">
        <v-col md="6" lg="6" sm="6" xs="6" class="text-center">
          <v-btn :disabled="buttons[0].disabled" @click="measurementAction(0)">{{buttons[0].text}}</v-btn>
        </v-col>
        <!-- <v-space></v-space> -->
        <v-col md="6" lg="6" sm="6" xs="6" class="text-center">
          <v-btn :disabled="buttons[5].disabled" @click="measurementAction(5)">{{buttons[5].text}}</v-btn>
        </v-col>
      </v-row>

      <v-row class="pb-4">
        <v-col md="3" lg="3" sm="6" xs="12" class="text-center">
          <v-btn :disabled="buttons[1].disabled" @click="measurementAction(1)">{{buttons[1].text}}</v-btn>
        </v-col>
        <v-col md="3" lg="3" sm="6" xs="12" class="text-center">
          <v-btn :disabled="buttons[2].disabled" @click="measurementAction(2)">{{buttons[2].text}}</v-btn>
        </v-col>
        <v-col md="3" lg="3" sm="6" xs="12" class="text-center">
          <v-btn :disabled="buttons[3].disabled" @click="measurementAction(3)">{{buttons[3].text}}</v-btn>
        </v-col>
        <v-col md="3" lg="3" sm="6" xs="12" class="text-center">
          <v-btn :disabled="buttons[4].disabled" @click="measurementAction(4)">{{buttons[4].text}}</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" lg="4" sm="3"></v-col>
        <v-col md="4" lg="4" sm="3" xs="12" class="text-center">
          <v-btn depressed color="primary" :disabled="buttons[6].disabled" @click="measurementAction(6)">{{buttons[6].text}}</v-btn>
          <br>
          <span>{{wsText}}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  
</template>

<script>
import Vuetify from "vuetify"
import OBSWebSocket from "obs-websocket-js"

export default {
  data () {
    return {
      host : "localhost",
      port :4444,
      password : "1234",
      buttons: [
        {text: "Start Procedure", disabled: false},
        {text: "Start Recording", disabled: true},
        {text: "Pause Recording", disabled: true},
        {text: "Resume Recording", disabled: true},
        {text: "Stop Recording", disabled: true},
        {text: "Stop Procedure", disabled: true},
        {text: "Take A Bookmark", disabled: true}
      ],
      wsText: ""
    }
  },
  methods:{
    measurementAction (value){
      this.wsText = "";
      switch (value){
        case 0:
          // console.log("connect to websocket");
          // this.obs.connect({
          //   address: 'localhost:4444',
          //   password: '1234'
          // })
          // .then(() => {
          //   console.log(`Success! We're connected & authenticated.`);
          //   return obs.send('GetSceneList');
          // })
          // .catch(err => { // Promise convention dicates you have a catch on every chain.
          //     console.log(err);
          // });
          this.buttons[1].disabled = false;
          this.buttons[5].disabled = false;
          this.buttons[0].disabled = true;
          break;
        case 1: 
          console.log("send recording signal to websocket");
          this.buttons[1].disabled = true;
          this.buttons[2].disabled = false;
          this.buttons[4].disabled = false;
          this.buttons[6].disabled = false;
          break;
        case 2:
          console.log("send Pause command to websocket");
          this.buttons[2].disabled = true;
          this.buttons[3].disabled = false;
          break;
        case 3:
          console.log("send Resume command to websocket");
          this.buttons[2].disabled = false;
          this.buttons[3].disabled = true;
          break;
        case 4:
          console.log("send STOP command to websocket");
          this.buttons[2].disabled = true;
          this.buttons[3].disabled = true;
          this.buttons[4].disabled = true;
          this.buttons[1].disabled = false;
          break;
        case 5:
          console.log("Disconnect from websocket");
          this.buttons[2].disabled = true;
          this.buttons[3].disabled = true;
          this.buttons[4].disabled = true;
          this.buttons[1].disabled = true;
          this.buttons[0].disabled = false;
          this.buttons[6].disabled = true;
          this.buttons[5].disabled = true;
          break;
        case 6:
          this.wsText = "Send take bookmark command to websocket";
          console.log("Send take bookmark command to websocket");
          break;
        default:
          console.log("no default value");
      }
    }
  }
}
</script>
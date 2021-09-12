import CableReady from "cable_ready"
import consumer from './consumer'

consumer.subscriptions.create('OvenChannel', {
  connected () {
    this.send({ message: 'Client is live' })
  },

  received (data) {
    console.log("this is data")
   //  if(data.cableReady) CableReady.perform(data.operations)
  }
})
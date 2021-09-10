import CableReady from "cable_ready"
import consumer from './consumer'
​
consumer.subscriptions.create('TestChannel', {
  connected () {
    this.send({ message: 'Client is live' })
  },
​
  received (data) {
    console.log("this is somethinggg", data)
    if(data.cableReady) CableReady.perform(data.operations)
  }
})


app/javascript/channels/test_channel.js
import consumer from './consumer'
​
consumer.subscriptions.create('TestChannel', {
  connected () {
    this.send({ message: 'Client is live' })
  },
​
  received (data) {
    console.log(data)
  }
})

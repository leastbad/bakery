import { Controller } from 'stimulus'

export default class extends Controller {
  connect () {
    document.addEventListener('cable-ready:after-morph', this.token)
  }

  disconnect () {
    document.removeEventListener('cable-ready:after-morph', this.token)
  }

  token = () => {
    const csrf = document.querySelector('meta[name="csrf-token"]').content
    const tokenElement = this.element.querySelector(
      'input[name="authenticity_token"]'
    )
    tokenElement.value = csrf
  }
}

import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="turbo-modal"
export default class extends Controller {
  submitEnd(event) {
    if (event.detail.success) {
      this.hideModal();
    }
  }

  hideModal() {
    this.element.remove();
  }
}

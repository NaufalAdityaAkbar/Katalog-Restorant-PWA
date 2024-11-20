const NotificationHelper = {
  async sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet grant permission');
      const permission = await this._requestPermission();
      if (permission === 'denied') {
        console.log('User denied notification permission');
        return;
      }
    }

    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const permission = await Notification.requestPermission();
    return permission;
  },

  async _showNotification({ title, options }) {
    if (navigator.serviceWorker) {
      const registration = await navigator.serviceWorker.ready;
      registration.showNotification(title, options);
    } else {
      new Notification(title, options);
    }
  },
};

export default NotificationHelper;

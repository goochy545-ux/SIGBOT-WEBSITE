document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var name = this.elements.name.value.trim();
      var email = this.elements.email.value.trim();
      var message = this.elements.message.value.trim();
      var body = message + '\n\n— ' + name + ' (' + email + ')';
      window.location.href = 'mailto:support@sigbot.co'
        + '?subject=' + encodeURIComponent('Sigbot enquiry from ' + name)
        + '&body=' + encodeURIComponent(body);
    });

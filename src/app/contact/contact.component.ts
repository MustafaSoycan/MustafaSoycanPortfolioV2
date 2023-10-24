import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButon!: ElementRef;

  disableFormFields() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButon.nativeElement.disabled = true;
  }

  enableFormFields() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButon.nativeElement.disabled = false;
  }

  async sendMail() {
    console.log('sending mail', this.myForm);

    this.disableFormFields();

    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);

    try {
      await fetch('https://mustafa-soycan.com/send_mail/send_mail.php', {
        method: 'post',
        body: fd
      });

      // Nachricht erfolgreich gesendet - Setze die Formularfelder zurück
      this.myForm.nativeElement.reset();
    } catch (error) {
      // Bei einem Fehler kannst du hier eine Fehlerbehandlung durchführen
      console.error('Fehler beim Senden der Nachricht:', error);
    } finally {

      
      // Aktiviere die Eingabefelder und den Senden-Button nach dem Senden oder bei Fehlern
      this.enableFormFields();
    }
  }
}
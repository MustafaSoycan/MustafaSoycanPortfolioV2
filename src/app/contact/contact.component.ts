import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  messageForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  })

  isSubmitted = false;

  successMessage = '';


  constructor(private fb: FormBuilder) { }

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
      this.successMessage = 'Deine E-Mail wurde erfolgreich gesendet!';
      this.hideSuccessMessageAfterDelay();
      this.enableFormFields();
    } catch (error) {
      // Bei einem Fehler kannst du hier eine Fehlerbehandlung durchführen
      console.error('Fehler beim Senden der Nachricht:', error);
      this.successMessage = 'Deine E-Mail konnte leider nicht abgesendet werden, ich kümmere mich schnellstmöglich drum! :)';
      this.hideSuccessMessageAfterDelay();
      this.myForm.nativeElement.reset();
      this.enableFormFields();
    } 
  }

  canSendMail() {
    return (
      this.messageForm.invalid
    );
  }

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.successMessage = ''; // Verberge die Erfolgsmeldung
    }, 5000); // 5000 Millisekunden entsprechen 5 Sekunden
  }
}
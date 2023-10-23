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

  async sendMail() {
      console.log('sending mail', this.myForm);
      let nameField = this.nameField.nativeElement;
      let emailField = this.emailField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let sendButton = this.sendButon.nativeElement;
      
      nameField.disabled = true;
      emailField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;
    // LADE ANIMATION
      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('email', emailField.value);
      fd.append('message', messageField.value);

    await fetch('https://mustafa-soycan.com/send_mail/send_mail.php',
    {
      method: 'post',
      body: fd
    }
    )

      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
  }
}
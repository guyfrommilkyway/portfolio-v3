interface ContactForm {
  name: Required<string>;
  email: Required<string>;
  subject: Required<string>;
  message: Required<string>;
  hidden1?: string;
  hidden2?: string;
  hidden3?: string;
}

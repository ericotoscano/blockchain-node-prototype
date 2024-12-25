export default interface IInquirerSetup {
  getMessage(): string;
  getChoices(): { name: string; value: string }[];
}

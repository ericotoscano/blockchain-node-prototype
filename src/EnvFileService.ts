export default class EnvFileService {
  static formatPortsOptions(portsEnv: string = '3030,3031,3032,3033,3034'): string[] {
    return portsEnv.split(',');
  }
}

export default class EnvFileService {
  static getBaseUrl(): string {
    return process.env.BASE_URL || 'http://localhost:';
  }

  static getPorts(): string[] {
    const ports: string = process.env.PORTS || '3030,3031,3032,3033,3034';

    return ports.split(',');
  }
}